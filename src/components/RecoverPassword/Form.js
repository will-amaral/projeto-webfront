import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Field,
  Control,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Column
} from 'bloomer';
import FormField from '../FormField';

export default function Form({ loading, handleSubmit }) {
  const [email, setEmail] = useState('');

  return (
    <Column tag='form' isSize='1/3' onSubmit={e => handleSubmit(e)}>
      <FormField
        icon='envelope'
        onChange={event => setEmail(event.target.value)}
        type='email'
        value={email}
        placeholder='Entre seu e-mail'
      />
      <Field>
        <Control hasTextAlign='centered'>
          {loading ? (
            <Button isFullWidth isLoading />
          ) : (
            <Button isFullWidth isColor='white' isOutlined type='submit'>
              Entrar
            </Button>
          )}
        </Control>
      </Field>
      <Breadcrumb isAlign='centered'>
        <ul>
          <BreadcrumbItem>
            <Link to='/login'>Voltar</Link>
          </BreadcrumbItem>
        </ul>
      </Breadcrumb>
    </Column>
  );
}
