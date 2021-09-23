import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onPonNewTransactionModal: () => void;
}

export function Header({ onPonNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onPonNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}
