# Backend Guide

## Dotenv file

Set up your `.env` file and paste in the URI that you get from following the instructions in the video above. It should look something like this:

```
PORT=3001
JWTKEY=SECRET
MONGODB_CONNECTION=mongodb+srv://<dbUser>:<password>@cluster0-m5jph.gcp.mongodb.net/test?retryWrites=true&w=majority
```

## Run API Documentation (SwaggerUI)
```
// ensure the swagger_output.json port is 3001 (backend)
node swagger.js
```

## Run CI Testing (JEST)
```
npm test
```