import fs from 'fs';
import swaggerUi from 'swagger-ui-dist';
import swaggerJSDoc from 'swagger-jsdoc';

export const getSwaggerSpec = (host) => {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Garuda API',
      version: '0.1.0',
      description: 'RESTful API documentation of Garuda Express Skeleton',
    },
    host,
    basePath: '/',
    schemes: ['https', 'http'],
    tags: [{
      name: '# Auth',
      description: 'List of API that used for Authentication',
    }],
    components: {
      securitySchemes: {
        'JWT-Auth': {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'An access token in JWT format that generated by Garuda Library system after login',
        },
      },
      responses: { UnauthorizedError: { description: 'Access token is missing or invalid' } },
    },
  };

  // options for the swagger docs
  const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: [
      './**/routes/**/*.js',
      '!./**/routes/**/index.js',
      './**/validations/**/*.js',
    ],
  };
  // initialize swagger-jsdoc
  return swaggerJSDoc(options);
};

const getSwaggerContent = (host) => {
  const path = swaggerUi.absolutePath();
  const indexHtml = fs.readFileSync(`${path}/index.html`).toString();
  const initializerContent = fs
    .readFileSync(`${path}/swagger-initializer.js`)
    .toString()
    .replace('https://petstore.swagger.io/v2/swagger.json', `${host}/api/docs/swagger.json`);
  const indexContent = indexHtml.replace('<script src="./swagger-initializer.js" charset="UTF-8"> </script>', `<script> ${initializerContent} </script>`);
  return indexContent;
};

export const swaggerUIPath = swaggerUi.absolutePath();

export const swaggerMiddleware = (req, res) => {
  const host = req.get('host');
  const { protocol } = req;
  const swaggerContent = getSwaggerContent(`${protocol}://${host}`);
  res.send(swaggerContent);
};
