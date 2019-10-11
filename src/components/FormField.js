import React, { useState } from 'react';
import { Field, Control, Icon, Input, Help } from 'bloomer';

export default function FormField(props) {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const { group, expand, icon, onChange, type, value, placeholder } = props;

  function checkFields() {
    switch (type) {
      case 'name':
        nameCheck();
        break;
      case 'phone':
        phoneCheck();
        break;
      case 'email':
        emailCheck();
        break;
      case 'cpf':
        cpfCheck();
        break;
      case 'password':
        passwordCheck();
        break;

      default:
        break;
    }

    function clearFields() {
      setColor('');
      setMessage('');
      setActive(false);
    }

    function nameCheck() {
      if (value && value.length < 3) {
        setActive(true);
        setColor('danger');
        setMessage('Esse nome é muito curto!');
      } else {
        clearFields();
      }
    }

    function phoneCheck() {
      const re = /^[0-9]{10,12}$/;
      if (value && !re.test(String(value).toLowerCase())) {
        setActive(true);
        setColor('danger');
        setMessage('Número inválido. Insira seu telefone com DDD.');
      } else {
        clearFields();
      }
    }

    function emailCheck() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value && !re.test(String(value).toLowerCase())) {
        setActive(true);
        setColor('danger');
        setMessage('Esse email é inválido. Verifique a sua entrada');
      } else {
        clearFields();
      }
    }

    function cpfCheck() {
      if (value && !cpfValidate(value)) {
        setActive(true);
        setColor('danger');
        setMessage('CPF inválido. Insira apenas números');
      } else {
        clearFields();
      }
    }

    function cpfValidate(cpf) {
      // Elimina CPFs invalidos conhecidos
      if (
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
      )
        return false;
      // Valida 1o digito
      let add = 0;
      let rev;
      for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) rev = 0;
      if (rev !== parseInt(cpf.charAt(9))) return false;
      // Valida 2o digito
      add = 0;
      for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) rev = 0;
      if (rev !== parseInt(cpf.charAt(10))) return false;
      return true;
    }

    function passwordCheck() {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (value && !re.test(String(value))) {
        setActive(true);
        setColor('danger');
        setMessage('Mínimo 8 caracteres alfanuméricos');
      } else {
        clearFields();
      }
    }
  }

  return (
    <Field isGrouped={group}>
      <Control isExpanded={expand} hasIcons='left'>
        <Icon isSize='small' isAlign='left' className={`fas fa-${icon}`} />
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          isColor={color}
          onChange={onChange}
          onBlur={checkFields}
        />
        {active && <Help isColor={color}>{message}</Help>}
      </Control>
    </Field>
  );
}
