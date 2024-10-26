import React from 'react';
import Contador from './components/Contador';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Aplicação de Contagem de Cliques</h1>
      <Contador />
    </Container>
  );
}

export default App;
