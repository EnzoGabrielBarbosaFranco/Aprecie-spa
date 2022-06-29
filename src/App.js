import React, { useState } from 'react';
import MaskedInput from './MaskedInput';

const initialValues = {
  cpf: '',
};

export default function App() {
  const [colaborador, setColaborador] = useState(IColaborador);

  function handleChange(event) {
    setColaborador({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="App">
      <MaskedInput
        name="cpf"
        mask="999.999.999-99"
        value={values.cpf}
        onChange={handleChange}
      />
      <MaskedInput
        name="cnpj"
        mask="99.999.999/9999-99"
        value={values.cnpj}
        onChange={handleChange}
      />
      <button onClick={() => setValues(initialValues)}>
        Limpar
      </button>
    </div>
  );
}