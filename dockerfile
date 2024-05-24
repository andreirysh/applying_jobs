# Use the Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Set environment variable for running npm run command
ENV NODE_ENV=development

# Run the application with npm run command
CMD ["npm", "run"]
