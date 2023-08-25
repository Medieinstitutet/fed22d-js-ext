import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if(req.method === "GET") {

  // }

  // if(req.method === "POST") {

  // }

  console.log("Getting todos");
  res.status(200).send([
    { id: 1, text: "Handla mat", done: true },
    { id: 2, text: "Laga mat", done: false },
  ]);
}
