import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';
import { setHeader } from './api';

export function login(token) {
    cookie.set('token', token, { expires: 1 });
    Router.push('/')
}

export function logout() {
    cookie.remove('token');
    Router.push('/login');
}

export function auth(ctx) {
    const { token } = nextCookie(ctx);

    if (ctx.req && !token) {
        console.log('Não existem cookies')
        ctx.res.writeHead(302, { Location: '/login' });
        ctx.res.end()
    }

    if (!token) {
        console.log('Não existe token')
        Router.push('/login');
    }
    console.log('Cookie: ' + token)
    return token
}

export function withAuth(WrappedComponent) {
    function Wrapper(props) {
        return <WrappedComponent {...props} />
    }
  
    Wrapper.getInitialProps = async function(ctx) {
        const token = auth(ctx);
        setHeader(token);
        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx))
  
        return { ...componentProps, token }
    }
  
    return Wrapper
  }