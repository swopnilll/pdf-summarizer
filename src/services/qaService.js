import dotenv from "dotenv";

import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";

// Load environment variables
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error(
    "Missing OpenAI API key. Please set OPENAI_API_KEY in the .env file."
  );
  throw new Error(
    "Missing OpenAI API key. Please set OPENAI_API_KEY in the .env file."
  );
}

export const getAnswer = async (question, vectorStore) => {
  try {
    const model = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      openAIApiKey: openaiApiKey,
    });

    // Ensure the vectorStore object is available and valid
    if (!vectorStore || !vectorStore.asRetriever) {
      throw new Error("Vector store is not initialized correctly.");
    }

    // Create the QA chain using the model and vector embeddings
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

    // Call the chain with the question
    const response = await chain.call({ query: question });

    // Return the answer
    return response.text;
  } catch (error) {
    // Log the error
    console.error("Error in getAnswer function:", error.message);
    console.error("Stack trace:", error.stack);

    // Return a user-friendly error message
    throw new Error(
      "An error occurred while getting the answer. Please try again later."
    );
  }
};
