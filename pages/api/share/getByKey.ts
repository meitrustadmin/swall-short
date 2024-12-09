



import { NextApiRequest, NextApiResponse } from 'next';
import kvclient from 'lib/vercelkv';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

 
  const result = await kvclient.get(`${request.body.key}`);
 

 
    return response.status(200).json(result);
}