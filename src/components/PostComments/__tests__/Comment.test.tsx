import { render, screen, fireEvent } from '@testing-library/react';

import Post from "..";

describe('Teste de renderizacao do componente Coment', () => {
    test('Verificar se o componente esta sendo renderizado', () => {
        render( 
        <Post /> 
    );
        const TextoPost = screen.getByTestId('Descricao')
        expect(TextoPost).toBeInTheDocument()
    });
    test('Se esta ocorrendo a adcicao de comentarios', () => {
        render( 
        <Post /> 
    );
    const TextoPost = screen.getByTestId('Descricao')
    const Btn = screen.getByTestId('BtnAdicionar')
    fireEvent.change(TextoPost, {
        target: {
            value: 'comentario teste'
        }
    } )
    fireEvent.click(Btn)
    expect(screen.getByText('comentario teste')).toBeInTheDocument()

})
} )