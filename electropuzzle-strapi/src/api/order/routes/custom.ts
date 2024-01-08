export default {
    routes: [
      { 
        method: 'POST',
        path: '/order', 
        handler: 'order.create',
      },
      {
        method: 'GET',
        path: '/order/confirm',
        handler: 'order.confirm',
      }
    ]
  }