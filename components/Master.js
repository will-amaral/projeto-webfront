import Head from 'next/head';

export default function Master({ children }) {
    return (
        <>
            <Head>
                <title>Gym App</title>
                <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                />
                <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                <link rel="stylesheet" href="/static/fonts/css/all.css"/>
            </Head>
            { children }
        </>
    );
}