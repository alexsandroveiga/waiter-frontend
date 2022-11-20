import { OrdersBoard } from '@/components';
import { Order } from '@/types';
import { api } from '@/utils';
import { Container } from './styles';

import socketIo from 'socket.io-client';
import { useEffect, useState } from 'react';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const io = socketIo('https://waiterserver.herokuapp.com', { transports: ['websocket'] })
    io.on('order@new', (order: Order) => {
      setOrders(prevState => [...prevState, order])
    })
  }, [])

  useEffect(() => {
    api.get('/orders').then(({ data }) => setOrders(data));
  }, []);

  const waiting = orders.filter(order => order.status === 'WAITING')
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION')
  const done = orders.filter(order => order.status === 'DONE')

  function handleCancelOrder(orderId: string) {
    setOrders(prevState => prevState.filter(order => order.id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders(prevState => prevState.map(order => (
      order.id === orderId ? { ...order, status }
      : order
    )))
  }

  return(
    <Container>
      <OrdersBoard onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} icon="🕒" title="Fila de espera" orders={waiting}/>
      <OrdersBoard onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} icon="👨‍🍳" title="Fila de preparação" orders={inProduction}/>
      <OrdersBoard onCancelOrder={handleCancelOrder} onChangeOrderStatus={handleOrderStatusChange} icon="✅" title="Pronto!" orders={done}/>
    </Container>
  );
}
