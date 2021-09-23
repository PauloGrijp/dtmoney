import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento Web',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date(),
        },
        {
          id: 2,
          title: 'Freela',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createAt: new Date(),
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createAt: new Date(),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', { ...data, createAt: new Date() })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
