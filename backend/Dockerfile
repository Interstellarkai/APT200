#  Dockerfile for Node Express Backend api (development)

FROM alpine
RUN apk add --update npm

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/app/backend
WORKDIR /usr/app/backend

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 3001

CMD ["npm","start"]