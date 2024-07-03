import { render, screen, fireEvent } from '@testing-library/react';

import App from "../App";

describe('Test de renderizacao do app', () => {
    test('Testando a renderiazacao do app', () => {
        render( <App /> );
        const CarroDoBatman = screen.getByText('Olha só que legal minha miniatura do Batmóvel.')
        expect(CarroDoBatman).toBeInTheDocument()
    })
})