export interface LineItem {
  id: string;
  description: string;
  quantity: number | '';
  price: number | '';
}

export interface Template {
  id: string;
  image: any; 
  name: string;
  type: 'Free' | 'Premium';
  showInHero?: boolean;
}

export enum DocumentType {
  Invoice = 'INVOICE',
  Estimate = 'ESTIMATE',
}

export interface InvoiceData {
  documentType: DocumentType;
  from: string;
  to: string;
  logoUrl: string | null;
  signatureUrl: string | null;
  invoiceNumber: string;
  poNumber: string;
  date: string;
  dueDate: string;
  paymentTerms: string;
  items: LineItem[];
  notes: string;
  taxRate: number | '';
  discountRate: number | '';
  currency: string;
  amountPaid: number | '';
  paymentLink: string;
  paymentMethod: string;
  language: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
}