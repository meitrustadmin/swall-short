

import { NextApiRequest, NextApiResponse } from 'next';
import kvclient from 'lib/vercelkv';
//import { SHARE_SUFFIX } from 'const';

const SHARE_SUFFIX = 'share';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
    const { code } = request.body;
    const keys = await kvclient.keys(`*:${code}:${SHARE_SUFFIX}`);
    console.log('keys', keys);
  
    return response.status(200).json(keys);
}