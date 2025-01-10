import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import path from 'path';

// Resolving path for the PDF file relative to /app inside the container
const pdfFilePath = path.resolve('/app', 'pdf_sample_custom_ai_training.pdf');

/**
 * Loads a PDF document using langchain's PDFLoader.
 * @returns {Promise} A promise that resolves with the loaded documents.
 * @throws {Error} If an error occurs while loading the document.
 */
export const loadDocument = async () => {
    try {      
        // Validate the file path
        if (!pdfFilePath || typeof pdfFilePath !== 'string') {
            throw new Error("Invalid file path provided.");
        }

        // Load the PDF document using PDFLoader
        const loader = new PDFLoader(pdfFilePath);

        const docs = await loader.load();
        
        return docs;
    } catch (error) {

        // Log error details to provide better insight for debugging
        console.error("Error loading the PDF document:", {
            message: error.message,
            stack: error.stack,
            filePath: pdfFilePath
        });

        // Optionally, rethrow the error or return a user-friendly message
        throw new Error("Failed to load the PDF document. Please try again.");
    }
};
