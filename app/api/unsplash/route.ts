import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const unsplashApiKey = process.env.UNSPLASH_API_KEY;

    const city = "Madrid";

    const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}`;

    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error in getting image");

    return new Response("Error in getting images", { status: 500 });
  }
}
