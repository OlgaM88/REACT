import React from 'react';

const OrderData = ({ date, price, delivery, rating, onDelete, onShowMore }) => (
  <tr>
    <td>{date}</td>
    <td>{price}</td>
    <td>{delivery}</td>
    <td>{rating}</td>
    <td>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </td>
    <td>
      <button type="button" onClick={onShowMore}>
        Детальнее
      </button>
    </td>
  </tr>
);
export default OrderData;
