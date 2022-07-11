/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  breeds: object;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const options: object = {
      headers: { "x-api-key": process.env.API_KEY },
    };
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${req.query.id}`,
      options
    );
    res.status(200).json(response.data);
  } catch (error) {
    // res.status(500).json({ error: error.message });
  }
};
