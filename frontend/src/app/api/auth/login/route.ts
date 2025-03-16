import { NextRequest, NextResponse } from 'next/server';

// Backend API base URL 
const API_BASE_URL = process.env.BACKEND_URL || 'http://backend:8000';

/**
 * Handle login requests and forward to backend
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Create form data for token request
    const formData = new URLSearchParams();
    formData.append('username', body.username);
    formData.append('password', body.password);
    
    // Forward request to backend
    const response = await fetch(`${API_BASE_URL}/api/v1/login/access-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    
    if (!response.ok) {
      // Try to get error details
      try {
        const errorData = await response.json();
        return NextResponse.json(
          { detail: errorData.detail || 'Authentication failed' },
          { status: response.status }
        );
      } catch {
        return NextResponse.json(
          { detail: 'Authentication failed' },
          { status: response.status }
        );
      }
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { detail: 'Failed to process authentication request' },
      { status: 500 }
    );
  }
} 