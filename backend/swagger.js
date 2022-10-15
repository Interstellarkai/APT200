import SwaggerAutogen from 'swagger-autogen';
const swaggerAutogen = new SwaggerAutogen();

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

export default swaggerAutogen(outputFile, endpointsFiles).then(async () => {
    await import('./index.js');
})

