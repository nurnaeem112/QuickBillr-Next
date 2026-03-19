import type { InvoiceData } from "../types";
export const downloadPdf = async (
  data: InvoiceData,
  paperSize: string,
  formatDate: (dateStr: string) => string
) => {
  if (typeof window === 'undefined') return;
  
  const original = document.getElementById("invoice-preview");
  if (!original) {
    console.error("invoice-preview element not found");
    alert("Invoice preview not found!");
    return;
  }

  // capture computed styles
  const computed = window.getComputedStyle(original);
  const bgColor =
    computed.backgroundColor && computed.backgroundColor !== "transparent"
      ? computed.backgroundColor
      : "#ffffff";

  // clone element and cleanup interactive-only bits
  const clone = original.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(".preview-only").forEach(e => e.remove());

  // replace inputs/textareas with plain text nodes (preserve date formatting)
  clone.querySelectorAll("input, textarea").forEach(el => {
    const e = el as HTMLInputElement | HTMLTextAreaElement;
    const parent = e.parentElement;
    if (!parent) return;
    const span = document.createElement("div");
    span.textContent =
      e.type === "date" && e.value ? formatDate(e.value) : (e.value || "");
    // ensure spans behave like block so layout matches
    span.style.display = "block";
    // copy some spacing so layout matches better
    span.style.whiteSpace = "pre-wrap";
    parent.replaceChild(span, e);
  });

  // remove optional sections that are empty
  if (!data.paymentMethod)
    clone.querySelector('[data-export-id="payment-method-container"]')?.remove();
  if (!data.poNumber)
    clone.querySelector('[data-export-id="po-number-row"]')?.remove();
  if (!data.paymentTerms)
    clone.querySelector('[data-export-id="payment-terms-row"]')?.remove();
  if (!data.notes)
    clone.querySelector('[data-export-id="notes-container"]')?.remove();
   if (!data.signatureUrl)
    clone.querySelector('[data-export-id="signature-container"]')?.remove();


  // Force clone to reflect preview exact layout
  clone.style.boxSizing = "border-box";
  clone.style.backgroundColor = bgColor;
  clone.style.color = computed.color || "#000";
  clone.style.width = original.offsetWidth + "px";
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.overflow = "visible";
  clone.style.transform = "none";
  clone.style.padding = computed.padding; // optional: helps match spacing if padding applied inline
  // Add PDF-only borders only for Template 1
clone.querySelectorAll(".template1-pdf-border").forEach(el => {
  (el as HTMLElement).style.borderBottom = "25px solid #1F2937"; // gray-200
});

  // Put clone off-screen in a container that won't influence layout
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "-99999px";
  container.style.left = "0";
  container.style.width = original.offsetWidth + "px";
  container.style.height = "auto";
  container.style.overflow = "visible";
  container.style.pointerEvents = "none";
  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    // allow a short pause so browser applies styles (fonts/tailwind)
    await new Promise(r => setTimeout(r, 80));

    // dynamically import html2canvas
    const html2canvasModule = await import('html2canvas');
    const html2canvas = html2canvasModule.default;

    // render with html2canvas
    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      backgroundColor: bgColor,
      windowWidth: clone.scrollWidth,
      windowHeight: clone.scrollHeight,
      scrollY: -window.scrollY, // avoid capturing scroll offset
    });

    // debug logs (inspect in console if something wrong)
    // canvas.width/height are in device pixels (scaled by `scale`)
    console.log("canvas px:", canvas.width, canvas.height);
    console.log("clone css width (px):", clone.offsetWidth, "clone scrollHeight:", clone.scrollHeight);

    const imgData = canvas.toDataURL("image/png");

    // convert px -> mm precisely:
    const pxToMm = (px: number) => px * 0.264583; // 1px ≈ 0.264583 mm

    const pdfWidthMm = pxToMm(canvas.width);
    const pdfHeightMm = pxToMm(canvas.height);

    // dynamically import jspdf
    const jsPDFModule = await import('jspdf');
    const jsPDF = jsPDFModule.default;

    // Create PDF sized to exact rendered canvas (portrait orientation implied by dims)
    const pdf = new jsPDF({
      orientation: pdfWidthMm >= pdfHeightMm ? "l" : "p",
      unit: "mm",
      format: [Math.round(pdfWidthMm * 100) / 100, Math.round(pdfHeightMm * 100) / 100],
    });

    // draw image at full size in mm
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidthMm, pdfHeightMm);
    pdf.save(`${data.documentType.toLowerCase()}-${data.invoiceNumber}.pdf`);
  } catch (err) {
    console.error("PDF export error:", err);
    alert("Error generating PDF (see console).");
  } finally {
    // cleanup
    document.body.removeChild(container);
  }
};

