import { getAnswer } from "./qaService.js";

import { splitDocs } from "../utils/utils.js";
import { loadDocument } from "../utils/pdfParser.js";

import { getVectorStore } from "../services/vectorService.js";

const question = "What is the budget of the program ?";

export const initializeApp = async () => {
  let docs;

  let chunks;

  let vectorEmeddings;

  let answers;

  try {
    docs = await loadDocument(); // Load PDF during app initialization
  } catch (error) {
    console.error("Error loading PDF during initialization:", error);
  }

  try {
    chunks = await splitDocs(docs); // split the text into smaller chunks
  } catch (error) {
    console.error("Error Chunking:", error);
  }

  try {
    vectorEmeddings = await getVectorStore(chunks);
  } catch (error) {
    console.error("Error Creating Vector Embeddings: ", error);
  }

  try {
    answers = await getAnswer(question, vectorEmeddings);

    console.log("Answer: ", answers);
  } catch (error) {
    console.error("Error Creating Answers: ", error);
  }
};
