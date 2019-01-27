import React from 'react';
import OrderData from './OrderData';

const orderColumns = ['Data', 'Price', 'Delivery', 'Rating'];

const OrderHistory = ({ orders, onDelete, onShowMore }) => (
  <table className="order-list">
    <thead>
      <tr>
        {orderColumns.map(column => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {orders.map(order => (
        <OrderData
          key={order.id}
          data={order.date}
          price={order.price}
          delivery={order.address}
          rating={order.rating}
          onDelete={() => onDelete(order.id)}
          onShowMore={() => onShowMore(order.id)}
        />
      ))}
    </tbody>
  </table>
);
export default OrderHistory;
