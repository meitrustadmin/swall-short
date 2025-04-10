import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            {/* <title>Swall</title> */}
            <meta name="description" content="Swall" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mywebsite.com/" />
            <meta property="og:title" content="CTA Header" />
            <meta property="og:description" content="CTA Content" />
            <meta property="og:image" content="https://mywebsite.com/images/og-image.jpg" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://mywebsite.com/" />
            <meta property="twitter:title" content="My Website" />
            <meta property="twitter:description" content="Welcome to my awesome website" />
            <meta property="twitter:image" content="https://mywebsite.com/images/twitter-image.jpg" />
        </Head>
        <body className="antialiased">
            <Main />
            <NextScript />
        </body>
    </Html>
  );
}
