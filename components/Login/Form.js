import { useState } from 'react';
import Link from 'next/link';
import { Field, Control, Button,
    Breadcrumb, BreadcrumbItem, Checkbox
} from 'bloomer';
import FormField from '../FormField';

export default function Form({ loading, handleSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={event => handleSubmit(event, email, password)}>
            <FormField
                icon='envelope'
                onChange={event => setEmail(event.target.value)}
                type='email'
                value={email}
                placeholder='Entre seu e-mail'
            />
            <FormField 
                icon='lock'
                onChange={event => setPassword(event.target.value)}
                type='password'
                value={password}
                placeholder='Entre sua senha'
            />
            <Field>
                <Control hasTextAlign="centered">
                    {loading
                    ? <Button isFullWidth isLoading/>
                    : <Button isFullWidth isColor="white" isOutlined type="submit">Entrar</Button>
                    }
                </Control>
            </Field>
            <Field>
                <Control hasTextAlign="centered">
                    <Checkbox> Lembrar de mim </Checkbox>
                </Control>
            </Field>
            <Breadcrumb isAlign="centered">
                <ul>
                    <BreadcrumbItem><Link href='/recuperar-senha'><a>Recuperar a senha</a></Link></BreadcrumbItem>
                </ul>
            </Breadcrumb>
        </form>
    );
}