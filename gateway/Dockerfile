# Use official Node.js image as the base image
FROM node:16

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the application files
COPY . .

# Expose port for the service
EXPOSE 7000

# Command to run the app
CMD ["node", "index.js"]