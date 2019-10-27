  module.exports = [{
    context: [
      '/api',
    ],
    headers: {
      'user-agent': ''
    },
    target: 'http://localhost',
    secure: false,
    changeOrigin: true
  }];
