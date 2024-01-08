export default {
    routes: [
      { 
        method: 'POST',
        path: '/order', 
        handler: 'order.create',
      },
      {
        method: 'GET',
        path: '/order/success',
        handler: 'order.success',
      }
    ]
  }