import { OrdersBoard } from '@/components';
import { waitingOrders, inProductionOrders } from '@/mocks'
import { Container } from './styles';

export function Orders() {
  return(
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={waitingOrders}/>
      <OrdersBoard icon="👨‍🍳" title="Fila de preparação" orders={inProductionOrders}/>
      <OrdersBoard icon="✅" title="Pronto!" orders={[]}/>
    </Container>
  );
}
