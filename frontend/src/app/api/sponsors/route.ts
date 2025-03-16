import { NextRequest, NextResponse } from 'next/server';

// Backend API base URL 
const API_BASE_URL = process.env.BACKEND_URL || 'http://backend:8000';

/**
 * Get all sponsors
 */
export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/sponsors/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { detail: 'Failed to fetch sponsors' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API forwarding error:', error);
    return NextResponse.json(
      { detail: 'Failed to connect to backend service' },
      { status: 500 }
    );
  }
}

/**
 * Create a new sponsor
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/api/v1/sponsors/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { detail: errorData.detail || 'Failed to create sponsor' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API forwarding error:', error);
    return NextResponse.json(
      { detail: 'Failed to connect to backend service' },
      { status: 500 }
    );
  }
} 