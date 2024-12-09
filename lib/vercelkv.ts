import { createClient } from "@vercel/kv";


const kvclient = createClient({
    url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
    token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN,
});

export default kvclient;