import {render, screen} from '@testing-library/react';
import Foods from '../pages/Foods';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Foods', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Foods/>
      </BrowserRouter>
    );    
  });

  it('Exist card em Foods?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Foods?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Foods?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Foods?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Foods?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});