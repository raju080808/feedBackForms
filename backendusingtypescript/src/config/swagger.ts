import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Unified Feedback API',
      version: '1.0.0',
      description: 'API documentation for submitting unified feedback from users or pharmacies.',
    },
    components: {
      schemas: {
        // Your schemas here...
         UserFeedback: {
          type: 'object',
          required: [
            'feedbackType',
            'fullName',
            'mobileNumber',
            'email',
            'orderId',
            'issueType',
            'feedBackMessage',
            'rating',
          ],
          properties: {
            feedbackType: {
              type: 'string',
              enum: ['user'],
            },
            fullName: { type: 'string',example:"jaya raju" },
            mobileNumber: { type: 'string', example: '9908089697' },
            email: { type: 'string', example: 'jaya@gmail.com' },
            orderId: { type: 'string',example:"ORD123" },
            issueType: {
              type: 'string',
              enum: [
                'Order',
                'Medicine Availability',
                'Delivery',
                'Payment Issue',
                'all Good',
                'others',
              ],
            },
            feedBackMessage: { type: 'string',example:"no major issues" },
            rating: { type: 'integer', minimum: 1, maximum: 5 },
          },
        },
        PharmacyFeedback: {
          type: 'object',
          required: [
            'feedbackType',
            'pharmacyName',
            'contactPersonName',
            'mobileNumber',
            'email',
            'feedBackCategory',
            'feedBackMessage',
            'rating',
          ],
          properties: {
            feedbackType: {
              type: 'string',
              enum: ['pharmacy'],
            },
            pharmacyName: { type: 'string' },
            contactPersonName: { type: 'string' },
            mobileNumber: { type: 'string', example: '9876543210' },
            email: { type: 'string', example: 'pharmacy@example.com' },
            feedBackCategory: {
              type: 'string',
              enum: ['Technical', 'Support', 'Delivery', 'Suggestions'],
            },
            feedBackMessage: { type: 'string' },
            rating: { type: 'integer', minimum: 1, maximum: 5 },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options as any); 

export const setupSwagger = (app: express.Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
