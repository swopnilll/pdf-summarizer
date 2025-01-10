import {splitDocs} from "../utils/utils.js"
import { loadDocument } from "../utils/pdfParser.js";

import {getVectorStore} from "../services/vectorService.js"


export const initializeApp = async () => {
	let docs;

	let chunks;

	let vectorEmeddings;

	try {
		docs = await loadDocument(); // Load PDF during app initialization

		console.log("PDF loaded during initialization:", docs);

	} catch (error) {

		console.error("Error loading PDF during initialization:", error);
	}

	try {
		chunks = await splitDocs(docs); // split the text into smaller chunks

		console.log("Chunks", chunks);

	} catch (error) {

		console.error("Error Chunking:", error);
	}

	try{
		vectorEmeddings = await getVectorStore(chunks);

		console.log("Vector Emeddings", vectorEmeddings);
	} catch(error){
		console.error("Error Creating Vector Embeddings: ", error);
	}


};