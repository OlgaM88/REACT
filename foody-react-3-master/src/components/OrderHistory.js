import React from 'react';
import OrderData from './OrderData';

const OrderHistory = ({ orders, onDelete, onShowMore }) => (
  <table className="order-list">
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery</th>
        <th>Rating</th>
      </tr>
    </thead>

    <tbody>
      {orders.map(order => (
        <OrderData
          key={order.id}
          data={order.data}
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
