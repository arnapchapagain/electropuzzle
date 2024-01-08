export default {
    routes: [
      { 
        method: 'POST',
        path: '/orders', 
        handler: 'order.create',
      },
      {
        method: 'GET',
        path: '/orders/success',
        handler: 'order.success',
      }
    ]
  }