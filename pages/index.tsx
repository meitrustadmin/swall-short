import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { slug } = context.params as { slug: string }
    console.log('slug', slug);
    
    return {props: { slug }};
};

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}