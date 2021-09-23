import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { ButtonType, Container, TransactionTypeContainer } from './styles';

interface NewTransacionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransacionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <ButtonType
            type="button"
            colorType="green"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <img
              src={incomeImg}
              alt="Entradas"
            />
            <span>Entradas</span>
          </ButtonType>
          <ButtonType
            type="button"
            colorType="red"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <img
              src={outcomeImg}
              alt="Saídas"
            />
            <span>Saídas</span>
          </ButtonType>
        </TransactionTypeContainer>

        <input type="number" placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
