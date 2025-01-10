FROM node:18-alpine

WORKDIR /app

# Copying package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the PDF file into the Docker container
COPY pdf_sample_custom_ai_training.pdf /app/

# Copying rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

