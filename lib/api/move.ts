//import { throwExpression } from "../shared/utils";

// const getEnvVariable = (key: string): string => {
//   if (typeof window !== 'undefined') {
//     // Client-side
//     return (window as any).__ENV__?.[key] || '';
//   } else {
//     // Server-side
//     return process.env[key] || '';
//   }
// };

// export const EXAMPLE_MOVE_PACKAGE_ID = getEnvVariable('NEXT_PUBLIC_EXAMPLE_MOVE_PACKAGE_ID');
// export const API_HOST = getEnvVariable('NEXT_PUBLIC_API_HOST');
// export const RPID = getEnvVariable('NEXT_PUBLIC_RPID');

// console.log('Client-side environment variables:');

// console.log('API_HOST:', API_HOST);
// console.log('RPID:', RPID);

// console.log('process.env type:', typeof process.env);
//console.log('process.env keys:', Object.keys(process.env));
//console.log('NODE_ENV:', process.env.NODE_ENV);
//console.log('process.env.EXAMPLE_MOVE_PACKAGE_ID', JSON.stringify(process.env.EXAMPLE_MOVE_PACKAGE_ID))

//console.log('process.env.API_HOST ', JSON.stringify(process.env.API_HOST))
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || '';
if (!process.env.NEXT_PUBLIC_API_HOST) {
  console.warn("Warning: API_HOST is not set");
}


export const KV_REST_API_URL = process.env.NEXT_PUBLIC_KV_REST_API_URL || '';
if (!process.env.NEXT_PUBLIC_KV_REST_API_URL) {
  console.warn("Warning: API_KV_REST_API_URL is not set");
}

export const KV_REST_API_TOKEN = process.env.NEXT_PUBLIC_KV_REST_API_TOKEN || '';
if (!process.env.NEXT_PUBLIC_KV_REST_API_TOKEN) {
  console.warn("Warning: KV_REST_API_TOKEN is not set");
}





