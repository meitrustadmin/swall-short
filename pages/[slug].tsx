import { getByCodeKV, getByKeyKV } from "client";
import Loading from "components/loading";
import { GetServerSideProps } from "next";
import getByKey from "./api/share/getByKey";
import { redirect } from "next/navigation";





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
                  permanent: true,
                },
              }
        }
    }
    
    return {props: { slug }};
};

export default function Home() {
  return (
    <Loading text="Loading..." />
  );
}