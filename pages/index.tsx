import { GetServerSideProps } from "next";
import Head from "next/head";


export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { slug } = context.params as { slug: string }
    console.log('slug', slug);
    
    return {props: { slug }};
};

export default function Home() {
  return (
  <>
    <Head>
        {/* <title>Swall</title> */}
        <meta name="description" content="Swall" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:title" content="My Website" />
        <meta property="og:description" content="Welcome to my awesome website" />
        <meta property="og:image" content="https://mywebsite.com/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mywebsite.com/" />
        <meta property="twitter:title" content="My Website" />
        <meta property="twitter:description" content="Welcome to my awesome website" />
        <meta property="twitter:image" content="https://mywebsite.com/images/twitter-image.jpg" />
    </Head>
    <div>
      <h1>Hello World</h1>
    </div>
  </>
  );
}