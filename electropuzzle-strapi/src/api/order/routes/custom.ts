export default {
    routes: [
      { 
        method: 'POST',
        path: '/order', 
        handler: 'order.create',
      },
      {
        method: 'POST',
        path: '/order/confirm',
        handler: 'order.confirm',
      }
    ]
  }