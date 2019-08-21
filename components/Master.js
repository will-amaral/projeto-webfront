import Head from 'next/head';

export default function Master({ children }) {
    return (
        <>
            <Head>
                <title>Gym App</title>
                <meta charset="utf-8"/>
                <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                />
                <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"/>
            </Head>
            { children }
        </>
    );
}