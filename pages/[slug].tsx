import { getByCodeKV, getByKeyKV } from "client";
import Loading from "components/loading";
import { GetServerSideProps } from "next";
import Head from "next/head";


export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { slug } = context.params as { slug: string }
    console.log('code', slug);
    const data = await getByCodeKV(slug);
    console.log('data', data);
    if (data && data.length > 0) {
        const key = data[0];
        const value = await getByKeyKV(key);
        console.log('value', value);
        if (value) {
            return {
                redirect: {
                  destination: value,
                  permanent: false,
                },
              }
        }
    }
    
    return {props: { slug,  targetUrl: null  }};
};

export default function Home({ slug }: { slug: string }) {
  return (
    <>
    <Head>
      <title>Redirecting...</title>
      <meta property="og:title" content="Redirecting you to your destination" />
      <meta property="og:description" content="You'll be redirected momentarily" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://go1.swall.xyz/${slug}`} />
    </Head>
    <Loading text="Redirecting..." />
  </>
  );
}