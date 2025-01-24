// /sanity/lib/fetch.ts
import { createClient } from "next-sanity";

// Create Sanity client
const client = createClient({
  projectId: "ceq8w7at", 
  dataset: "production", 
  apiVersion: "2021-10-21", 
  useCdn: true, 
});

// Define the types for `query` and `params`
interface SanityFetchParams {
  query: string;
  params?: Record<string, unknown>; 
}

// Function to fetch data from Sanity
export async function sanityfetch({ query, params }: SanityFetchParams) {
  const data = await client.fetch(query, params);
  return data;
}