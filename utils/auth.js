import Router from 'next/router';
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

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
