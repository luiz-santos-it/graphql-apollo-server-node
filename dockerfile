# Use the official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript files
RUN npm run compile

# Generate the GraphQL types
RUN npm run generate

# Run the postbuild script to copy the schema file
RUN npm run postbuild

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "dist/index.js"]
