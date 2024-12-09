import { API_HOST } from "lib/api/move";


const SHARE_GET_BY_CODE_KV_API_ROUTE = '/api/share/getByCode';
const SHARE_GET_BY_KEY_KV_API_ROUTE = '/api/share/getByKey';

export const getByCodeKV = async (code: string, ) => {
    const result = await fetch(`${API_HOST}${SHARE_GET_BY_CODE_KV_API_ROUTE}`, {
        method: "POST",
        body: JSON.stringify({code: code }),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const data = await result.json();
    return data
}

export const getByKeyKV = async (key: string) => {
    const result = await fetch(`${API_HOST}${SHARE_GET_BY_KEY_KV_API_ROUTE}`, {
        method: "POST",
        body: JSON.stringify({key: key}),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const data = await result.json();
    return data
}