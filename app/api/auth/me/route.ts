import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-me-in-production';

function getUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

interface TokenPayload {
  id: string;
  email: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
      const users = getUsers();
      const user = users.find((u: User) => u.id === decoded.id);
      
      if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
      
      return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name } });
    } catch {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
