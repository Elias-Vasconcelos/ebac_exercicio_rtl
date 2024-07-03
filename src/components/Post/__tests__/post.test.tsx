import { render, screen } from '@testing-library/react';

import Post from '..';

describe('Teste de renderizacao do Container post', () => {
    test('renderizacao da img', () => {
        render( 
        <Post imageUrl='../../../ImagemFicticia.png' >
            Texto Para teste
        </Post>)
    })
    expect(screen.getByText('Texto Para teste')).toBeInTheDocument()
}  )