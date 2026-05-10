import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.log("GET ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log(body);

    const review = await Review.create(body);

    return NextResponse.json(review);
  } catch (error) {
    console.log("POST ERROR:", error);

    return NextResponse.json(
      { error: "Failed to add review" },
      { status: 500 }
    );
  }
}