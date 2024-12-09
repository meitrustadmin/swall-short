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
export const EXAMPLE_MOVE_PACKAGE_ID = process.env.NEXT_PUBLIC_EXAMPLE_MOVE_PACKAGE_ID || '';
if (!process.env.NEXT_PUBLIC_EXAMPLE_MOVE_PACKAGE_ID) {
  console.warn("Warning: EXAMPLE_MOVE_PACKAGE_ID is not set");
}

export const SWALL_CHANNEL_PACKAGE_ID = process.env.NEXT_PUBLIC_SWALL_CHANNEL_PACKAGE_ID || '';
if (!process.env.NEXT_PUBLIC_SWALL_CHANNEL_PACKAGE_ID) {
  console.warn("Warning: SWALL_CHANNEL_PACKAGE_ID is not set");
}

export const INTERVAL_OBJECT_ID = process.env.NEXT_PUBLIC_INTERVAL_OBJECT_ID || '';
if (!process.env.NEXT_PUBLIC_INTERVAL_OBJECT_ID) {
  console.warn("Warning: INTERVAL_OBJECT_ID is not set");
}
//console.log('process.env.API_HOST ', JSON.stringify(process.env.API_HOST))
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || '';
if (!process.env.NEXT_PUBLIC_API_HOST) {
  console.warn("Warning: API_HOST is not set");
}

export const SHARE_HOST = process.env.NEXT_PUBLIC_SHARE_HOST || '';
if (!process.env.NEXT_PUBLIC_SHARE_HOST) {
  console.warn("Warning: SHARE_HOST is not set");
}

export const SUI_USD_PRICE_OBJECT_ID = process.env.NEXT_PUBLIC_SUI_USD_PRICE_OBJECT_ID || '';
if (!process.env.NEXT_PUBLIC_SUI_USD_PRICE_OBJECT_ID) {
  console.warn("Warning: SUI_USD_PRICE_OBJECT_ID is not set");
}


export const CHANNEL_FEE_OBJECT_ID = process.env.NEXT_PUBLIC_CHANNEL_FEE_OBJECT_ID || '';
if (!process.env.NEXT_PUBLIC_CHANNEL_FEE_OBJECT_ID) {
  console.warn("Warning: CHANNEL_FEE_OBJECT_ID is not set");
}

//console.log('EXAMPLE_MOVE_PACKAGE_ID:', EXAMPLE_MOVE_PACKAGE_ID);

// //console.log('process.env.RPID ', JSON.stringify(process.env.RPID))

export const RPID = process.env.NEXT_PUBLIC_RPID || '';
if (!process.env.NEXT_PUBLIC_RPID) {
  console.warn("Warning: RPID is not set");
}

export const KV_REST_API_URL = process.env.NEXT_PUBLIC_KV_REST_API_URL || '';
if (!process.env.NEXT_PUBLIC_KV_REST_API_URL) {
  console.warn("Warning: API_KV_REST_API_URL is not set");
}

export const KV_REST_API_TOKEN = process.env.NEXT_PUBLIC_KV_REST_API_TOKEN || '';
if (!process.env.NEXT_PUBLIC_KV_REST_API_TOKEN) {
  console.warn("Warning: KV_REST_API_TOKEN is not set");
}

// const getEnvVariable = (key: string): string => {
//   if (typeof window === 'undefined') {
//     // Server-side
//     return process.env[key] || throwExpression(new Error(`${key} not configured on server`));
//   } else {
//     // Client-side
//     return (process.env.NEXT_PUBLIC_PREFIX ? process.env[`NEXT_PUBLIC_${key}`] : process.env[key]) || 
//            throwExpression(new Error(`${key} not configured on client`));
//   }
// };

// export const EXAMPLE_MOVE_PACKAGE_ID = getEnvVariable('EXAMPLE_MOVE_PACKAGE_ID');
// export const API_HOST = getEnvVariable('API_HOST');
// export const RPID = getEnvVariable('RPID');

// const getEnvVariable = (key: string, defaultValue: string): string => {
//   const value = typeof window === 'undefined'
//     ? process.env[key]
//     : process.env[`NEXT_PUBLIC_${key}`];

//   console.log(`[DEBUG] ${key}:`, value);

//   return value || defaultValue;
// };

// export const EXAMPLE_MOVE_PACKAGE_ID = getEnvVariable('EXAMPLE_MOVE_PACKAGE_ID', 'default_package_id');
// export const API_HOST = getEnvVariable('API_HOST', 'http://localhost:3000');
// export const RPID = getEnvVariable('RPID', 'localhost');

// console.log('[DEBUG] All env variables:', {
//   EXAMPLE_MOVE_PACKAGE_ID,
//   API_HOST,
//   RPID
// });

//export const API_HOST = ''
