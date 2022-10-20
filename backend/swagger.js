/* Here is the explanation for the code above:
1. We create a new instance of SwaggerAutogen
2. We define the output file (where the generated documentation will be saved)
3. We define the endpoints file (where the documentation will be generated from)
4. We use the function swaggerAutogen() to generate the documentation
5. We import the endpoints file to execute the functions */
import SwaggerAutogen from 'swagger-autogen';
const swaggerAutogen = new SwaggerAutogen();

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

export default swaggerAutogen(outputFile, endpointsFiles).then(async () => {
    await import('./app.js');
})

