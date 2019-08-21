import { useState } from 'react';
import Link from 'next/link';
import { Field, FieldBody, Control, Button, 
    Breadcrumb, BreadcrumbItem, Column
} from 'bloomer';
import FormField from '../FormField';

export default function Form({ loading, handleSignup}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <Column tag='form' isSize='2/3' onSubmit={handleSignup}>
            <Field isHorizontal>
                <FieldBody>
                    <FormField group expand
                        icon='user'
                        onChange={event => setName(event.target.value)}
                        type='text'
                        value={name}
                        placeholder='Entre seu nome'
                    />
                    <FormField
                        icon='envelope'
                        onChange={event => setEmail(event.target.value)}
                        type='email'
                        value={email}
                        placeholder='Entre seu e-mail'
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
                        placeholder='Entre sua senha'
                    />
                    <FormField 
                        icon='lock'
                        onChange={event => setConfirm(event.target.value)}
                        type='password'
                        value={confirm}
                        placeholder='Confirme a sua senha'
                    />
                </FieldBody>
            </Field>
            <Field>
                <Control hasTextAlign="centered">
                {loading
                ? <Button isFullWidth isLoading/>
                : <Button isFullWidth isColor="white" isOutlined type="submit">Entrar</Button>
                }
                </Control>
            </Field>
            <Breadcrumb isAlign='centered'>
                <ul>
                    <BreadcrumbItem><Link href='/login'><a>Voltar</a></Link></BreadcrumbItem>
                </ul>
            </Breadcrumb>
        </Column>
    )
}