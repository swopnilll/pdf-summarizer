import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const splitDocs = async (docs) => {

	const textSplitter = new RecursiveCharacterTextSplitter();

	const listOfSplitDocs = await textSplitter.splitDocuments(docs);

    return listOfSplitDocs;
};
