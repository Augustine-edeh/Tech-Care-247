import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: "*", // Allow all origins, you can specify a more restrictive origin if needed
});

// Helper method to wait for middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const API_KEY = "537c95553a3e424aaf50912bcd96d405";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export async function GET(request: NextRequest) {
  try {
    // Run the CORS middleware
    await runMiddleware(request, NextResponse, cors);

    const response = await axios.get(BASE_URL, {
      params: {
        sources: "bbc-news,the-verge",
        q: "bitcoin",
        category: "business",
        language: "en",
        country: "us",
        apiKey: API_KEY,
      },
    });

    console.log("NewsAPI response:", response.data); // Add console log
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
