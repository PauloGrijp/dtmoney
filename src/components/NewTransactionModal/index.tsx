import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { ButtonType, Container, TransactionTypeContainer } from './styles';

interface NewTransacionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransacionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  function heandleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

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
      <Container onSubmit={heandleCreateNewTransaction}>
        <h2>Cadastrar</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

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

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
