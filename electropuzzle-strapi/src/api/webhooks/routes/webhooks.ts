export default {
  routes: [
    {
     method: 'POST',
     path: '/webhooks/success',
     handler: 'webhooks.success',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/webhooks/cancel',
     handler: 'webhooks.cancel',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
