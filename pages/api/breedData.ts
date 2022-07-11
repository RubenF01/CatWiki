/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  breeds: object;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${req.query.id}&api_key=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    // res.status(500).json({ error: error.message });
  }
};
