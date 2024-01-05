import {render, screen} from '@testing-library/react';
import Foods from '../pages/Foods';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Foods', () => {

  beforeEach(() => {
    <BrowserRouter>
      <Foods/>
    </BrowserRouter>
  });

  it('Exist card em Foods?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

});