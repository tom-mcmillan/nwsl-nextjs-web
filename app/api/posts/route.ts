import { NextResponse } from 'next/server';
import { getAllPosts } from '../../../lib/posts';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([]);
  }
}