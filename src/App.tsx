import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionOpen() {
    setIsNewTransactionModalOpen(true);
  };

  function handleOpenNewTransactionClose() {
    setIsNewTransactionModalOpen(false);
  };

  Modal.setAppElement('#root');

  return (
    <TransactionsProvider>
      <Header onPonNewTransactionModal={handleOpenNewTransactionOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenNewTransactionClose}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
