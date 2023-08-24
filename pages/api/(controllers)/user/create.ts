import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../(services)/user'
 

export default async function CreateController(req: NextApiRequest, res: NextApiResponse) {
    const user = new User();
    await user.create();
}
