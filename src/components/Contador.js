import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => setContagem(contagem + 1);
  const decrementar = () => setContagem(contagem - 1);

  return (
    <Card className="text-center" style={{ width: '18rem', margin: 'auto' }}>
      <Card.Body>
        <Card.Title>Calculadora de Contagem de Cliques</Card.Title>
        <Card.Text className="display-4">{contagem}</Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="primary" onClick={incrementar}>Incrementar</Button>
          <Button variant="danger" onClick={decrementar}>Decrementar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Contador;
