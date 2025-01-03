// app/api/country-codes/route.ts
import { CountryDialCodes } from "@/json/country-codes";
import { NextResponse } from "next/server";

// Define the API route
export async function GET() {
  return NextResponse.json(CountryDialCodes); // Return the array of country dial codes as JSON
}
