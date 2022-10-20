#  Dockerfile for Node Express Backend api (development)

FROM node

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/app/socket
WORKDIR /usr/app/socket

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
#const io = require("socket.io")(8800, {
#    cors: {
#        origin: "http://localhost:3000", // React
#    },
#});

# Expose
EXPOSE 8800

CMD ["npm","start"]