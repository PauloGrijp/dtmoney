import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Dev</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Casa</td>
            <td>21/09/2021</td>
          </tr>
        </tbody>
      </table>
    </ Container>
  )
}
