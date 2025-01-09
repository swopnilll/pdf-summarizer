import axios from 'axios';

export async function getAnswer(question) {
  return Promise.resolve(
    {
      "What is a large language model?": "A large language model (LLM) is a type of neural network designed to process and generate human-like text.",
      "How do I train a model?": "Training a model involves providing it with large amounts of data and fine-tuning it to improve performance on specific tasks.",
    }[question] || "This is a mock answer. The real answer will come from the OpenAI API."
  );
}
