import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../(services)/user'
 

export default async function GetController(req: NextApiRequest, res: NextApiResponse) {
    const user = new User();
    await user.get();
}
