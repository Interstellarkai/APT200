#  Dockerfile for Socket server (Chat Feature)

FROM alpine
RUN apk add --update npm

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/app/socket
WORKDIR /usr/app/socket

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Expose
EXPOSE 8800

CMD ["npm","start"]