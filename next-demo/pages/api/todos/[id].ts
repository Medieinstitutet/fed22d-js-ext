import { NextApiResponse, NextApiRequest } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send(req.query["id"]);
};

export default handler;
