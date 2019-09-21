import { useState } from 'react';
import { Field, FieldBody, Control, Button, Column } from 'bloomer';
import FormField from '../FormField';

export default function Form({ loading, handleSignup}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <Column tag='form' onSubmit={handleSignup}>
            <Field isHorizontal>
                <FieldBody>
                    <FormField group expand
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
                    <FormField group expand
                        icon='lock'
                        onChange={event => setPassword(event.target.value)}
                        type='password'
                        value={password}
                        placeholder='Entre a senha'
                    />
                    <FormField 
                        icon='lock'
                        onChange={event => setConfirm(event.target.value)}
                        type='password'
                        value={confirm}
                        placeholder='Confirme a senha'
                    />
                </FieldBody>
            </Field>
            <Field>
                <Control hasTextAlign="centered">
                {loading
                ? <Button isLoading/>
                : <Button isColor='primary' isOutlined type="submit">Criar Usuário</Button>
                }
                </Control>
            </Field>
        </Column>
    )
}