import React from "react";
import { render } from '@testing-library/react';
import Transacao from "./Transacao";
import Transacoes from './Transacoes';

describe('Componente de transação do extrato', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo',
  () => {
    const { container } = render (<Transacao
      data="08/09/2020"
      tipo="saque"
      valor="20.00"
    />)

    expect(container.firstChild).toMatchSnapshot();
  })

  it("Snapshot das transações deve ser renderizado", () => {
    const transacoes = [
      {
        id: 1,
        transacao: "saque",
        tipo: "saque",
        valor: "30.00",
        data: "10/12/2021",
      },
      {
        id: 2,
        transacao: "deposito",
        tipo: "deposito",
        valor: "40.00",
        data: "10/12/2021",
      },
    ];
    const { container } = render(<Transacoes transacoes={transacoes} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
