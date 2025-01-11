import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error(
    "Missing OpenAI API key. Please set OPENAI_API_KEY in the .env file."
  );
}

/**
 * Asynchronously creates a vector store from document splits using OpenAI embeddings.
 *
 * @param {Array} documentSplits - Array of document splits to be embedded.
 * @returns {Promise<MemoryVectorStore>} A promise resolving to the vector store.
 * @throws {Error} If vector store creation fails.
 */
export const getVectorStore = async (documentSplits) => {
  try {
    // Create an instance of OpenAIEmbeddings with the API key
    const embeddings = new OpenAIEmbeddings({ openaiApiKey });

    // Generate a memory vector store from the document splits
    const vectorStore = await MemoryVectorStore.fromDocuments(
      documentSplits,
      embeddings
    );

    return vectorStore;
  } catch (error) {
    console.error("Error creating vector store:", {
      message: error.message,
      stack: error.stack,
    });

    // Optionally, rethrow the error or return a fallback value
    throw new Error(
      "Failed to create vector store. Please check the logs for more details."
    );
  }
};
