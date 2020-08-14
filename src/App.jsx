import React from 'react';

import  HeaderDev from './components/HeaderDev'
import LogoDev from './components/LogoDev'
import ButtonDev from './components/ButtonDev'
import FooterDev from './components/FooterDev'
import LinkDev from './components/LinkDev'
import HighlightDev from './components/HighlightDev'

function App() {
  return (
    <>
        <HeaderDev>
          <LogoDev />

          <ButtonDev>Novo Vídeo</ButtonDev>
        </HeaderDev>

        <FooterDev>
          <LogoDev />
            <p>Site produzido durante a <HighlightDev>#ImersaoReact</HighlightDev> da  
            <LinkDev href="https://alura.com.br"> Alura</LinkDev>
            </p>
        </FooterDev>
    </>
  );
}

export default App;
