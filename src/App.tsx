import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"

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
    <>
      <Header onPonNewTransactionModal={handleOpenNewTransactionOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenNewTransactionClose}
      />
      <GlobalStyle />
    </>
  );
}
