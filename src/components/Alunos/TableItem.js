import React, { useState } from 'react';
import { Checkbox } from 'bloomer';
import { Redirect } from 'react-router-dom';

export default function TableItem({ name, change, status, id }) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to={`/alunos/${id}`} />;

  return (
    <tr className='selectable-item' onClick={() => setRedirect(true)}>
      <td>
        <Checkbox />
      </td>
      <td>{name}</td>
      <td>{change}</td>
      <td>{status ? 'Ativo' : 'Inativo'}</td>
    </tr>
  );
}
