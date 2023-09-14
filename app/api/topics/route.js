import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const topics = await Topic.find()
    return NextResponse.json({ topics }, { status: 200 });
  }catch (error) {
    return NextResponse.json({ message: "not found" }, { status: 404 });
  }

}
