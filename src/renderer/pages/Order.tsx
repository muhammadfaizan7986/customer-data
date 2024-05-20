import React, { Fragment } from 'react';
import InvoicesTablePage from '../modules/InvoicesTablePage';
import OrderTablePage from '../modules/OrderTablePage';

type Props = {};

const OrderTable = (props: Props) => {
  return (
    <Fragment>
      <OrderTablePage />
    </Fragment>
  );
};

export default OrderTable;
