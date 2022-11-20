import { Order } from '@/types';
import { api } from '@/utils';
import { OrderModal } from '@/components';
import { Board, OrdersContainer } from './styles';

import { useState } from 'react';
import { toast } from 'react-toastify'

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

export function OrdersBoard({ onCancelOrder, icon, title, orders, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true)
    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'
    await api.patch(`/orders/${selectedOrder?.id}`, { status })
    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`)
    onChangeOrderStatus(selectedOrder!.id, status)
    setIsLoading(false)
    setIsModalVisible(false)
  }

  async function handleCancelOrder() {
    setIsLoading(true)
    // await new Promise(resolve => setTimeout(resolve, 3000))
    await api.delete(`/orders/${selectedOrder?.id}`)
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`)
    setIsLoading(false)
    setIsModalVisible(false)
    onCancelOrder(selectedOrder!.id)
  }

  return(
    <Board>
      <OrderModal visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{`(${orders.length})`}</span>
      </header>

      {orders.length > 0 &&
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order.id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} iten(s)</span>
            </button>
          ))}
        </OrdersContainer>}
    </Board>
  );
}
