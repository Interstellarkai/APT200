# Dockerfile for client

# Stage 1: Build react client
FROM node

# Working directory be frontend
RUN mkdir -p /usr/app/frontend
WORKDIR /usr/app/frontend

COPY package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY . .

# increase storage space
ENV GENERATE_SOURCEMAP=false

EXPOSE 3000

CMD ["npm","start"]