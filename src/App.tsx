import { GlobalStyles } from '@/styles';
import { Header, Orders } from '@/components';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App
