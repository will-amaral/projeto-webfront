import React, { useState } from 'react';
import {
  Field,
  FieldBody,
  Control,
  Button,
  Column,
  Select,
  Icon,
  FieldLabel
} from 'bloomer';
import { useDispatch, useSelector } from 'react-redux';
import FormField from '../FormField';
import { signUp } from '../../actions';

export default function Form({ extend }) {
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [role, setRole] = useState('Estágio');
  const [file, setFile] = useState(null);
  const [financial, setFinancial] = useState({
    dueDay: '',
    amount: '',
    plan: 'Mensal'
  });

  async function handleSignup(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', 'ahn291092');
    data.append('cpf', cpf);
    data.append('address', address);
    data.append('phone', phone);
    data.append('birthDate', new Date(date).toISOString());
    if (extend) {
      data.append('specialty', specialty);
      data.append('role', role);
      data.append('level', 'Instrutor');
    } else if (!extend) {
      data.append('financial', JSON.stringify(financial));
      data.append('level', 'Aluno');
    }
    data.append('thumbnail', file);
    dispatch(signUp(data));
  }

  return (
    <Column tag='form' onSubmit={handleSignup}>
      <Field isHorizontal>
        <FieldBody>
          <FormField
            group
            expand
            icon='user'
            onChange={event => setName(event.target.value)}
            type='text'
            value={name}
            placeholder='Entre o nome'
          />
          <FormField
            icon='envelope'
            onChange={event => setEmail(event.target.value)}
            type='email'
            value={email}
            placeholder='Entre o e-mail'
          />
        </FieldBody>
      </Field>
      <Field isHorizontal>
        <FieldBody>
          <FormField
            group
            expand
            icon='id-card'
            onChange={event => setCpf(event.target.value)}
            type='text'
            value={cpf}
            placeholder='Entre o cpf'
          />
          <FormField
            icon='map-marked-alt'
            onChange={event => setAddress(event.target.value)}
            type='text'
            value={address}
            placeholder='Entre o endereço'
          />
        </FieldBody>
      </Field>
      <Field isHorizontal>
        <FieldBody>
          <FormField
            group
            expand
            icon='phone'
            onChange={event => setPhone(event.target.value)}
            type='text'
            value={phone}
            placeholder='Entre o telefone'
          />
          <FieldLabel>Data de Nascimento</FieldLabel>
          <FormField
            group
            expand
            icon='calendar-day'
            onChange={event => setDate(event.target.value)}
            type='date'
            value={date}
            placeholder='Entre a data de aniversário'
          />
        </FieldBody>
      </Field>
      {extend && (
        <Field isHorizontal>
          <FieldBody>
            <FieldLabel>Especialidade</FieldLabel>
            <FormField
              icon='dumbbell'
              onChange={event => setSpecialty(event.target.value)}
              type='text'
              value={specialty}
              placeholder='Entre a specialidade'
            />
            <Field>
              <Control hasIcons='left'>
                <Icon isSize='small' isAlign='left' className={'fas fa-user-tag'} />
                <Select value={role} onChange={event => setRole(event.target.value)}>
                  <option>Estágio</option>
                  <option>Coordenação</option>
                  <option>Líder</option>
                </Select>
              </Control>
            </Field>
          </FieldBody>
        </Field>
      )}
      {!extend && (
        <Field isHorizontal>
          <FieldBody>
            <FormField
              icon='calendar-check'
              onChange={e => {
                const dueDay = e.target.value;
                setFinancial(prevState => {
                  return { ...prevState, dueDay };
                });
              }}
              type='text'
              value={financial.dueDay}
              placeholder='Entre a data de pagamento'
            />
            <FormField
              icon='dollar-sign'
              onChange={e => {
                let amount = e.target.value;
                setFinancial(prevState => {
                  return { ...prevState, amount };
                });
              }}
              type='text'
              value={financial.amount}
              placeholder='Entre o valor do pagamento'
            />
            <Field>
              <Control hasIcons='left'>
                <Icon isSize='small' isAlign='left' className={'fas fa-calendar-plus'} />
                <Select
                  value={financial.plan}
                  onChange={e => {
                    const plan = e.target.value;
                    setFinancial(prevState => {
                      return { ...prevState, plan };
                    });
                  }}
                >
                  <option>Mensal</option>
                  <option>Trimestral</option>
                  <option>Anual</option>
                </Select>
              </Control>
            </Field>
          </FieldBody>
        </Field>
      )}
      <Field>
        <Control>
          <div className='file has-name is-fullwidth'>
            <label className='file-label'>
              <input
                className='file-input'
                type='file'
                name='resume'
                onChange={event => setFile(event.target.files[0])}
              />
              <span className='file-cta'>
                <span className='file-icon'>
                  <i className='fas fa-upload'></i>
                </span>
                <span className='file-label'>Escolha uma foto...</span>
              </span>
              <span className='file-name'>{file && file.name}</span>
            </label>
          </div>
        </Control>
      </Field>
      <Field>
        <Control hasTextAlign='centered'>
          {loading ? (
            <Button isLoading />
          ) : (
            <Button isColor='primary' isOutlined type='submit'>
              Criar Usuário
            </Button>
          )}
        </Control>
      </Field>
    </Column>
  );
}
