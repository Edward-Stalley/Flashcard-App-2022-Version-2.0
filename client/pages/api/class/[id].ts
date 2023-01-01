import { NextApiRequest, NextApiResponse } from "next";

export default function getClassById(req: NextApiRequest, res: NextApiResponse) {
  //   if (req.method !== "GET") {
  //     res.status(500).json({ message: "sorry only GET requests are accepted" });
  //   }

  res.json({ byID: req.query.id, message: "get class by id" });
}