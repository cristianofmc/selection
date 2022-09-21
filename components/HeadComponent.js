import Head from 'next/head';

const HeadComponent = (props) => {
    const title = `${props.name} - ${props.title}`
    const description = props.description
    return(
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name="keywords" 
            content="web design, web, development, web development, website, portifolio, backend, fronted, architecture, cristiano, cristiano felipe, cristiano castro, castro, felipe, designer, freelancing"
            />
            <meta property='og:title' content={title}/>
            <meta property='og:description' content={description}/>
            <meta property='og:url' content='selection-dun.vercel.app' />
            <meta property='og:type' content='website' />
        </Head>
    );
};

export default HeadComponent;
