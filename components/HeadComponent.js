import Head from 'next/head';

const HeadComponent = (props) => {
    return(
        <Head>
            <title>{props.title} - {props.name}</title>
            <meta name='description' content='' />
            <meta property='og:title' content='---' />
            <meta
                property='og:description'
                content='---'
            />
            <meta property='og:url' content='selection-dun.vercel.app' />
            <meta property='og:type' content='website' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    );
};

export default HeadComponent;
