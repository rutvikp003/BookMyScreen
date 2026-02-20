import { Request, Response } from "express";
import axios from "axios";

export const reverseGeocode = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ message: "lat and lon are required" });
      return;
    }

    const response = await axios.get(
      "https://us1.locationiq.com/v1/reverse.php",
      {
        params: {
          key: process.env.LOCATIONIQ_KEY,
          lat,
          lon,
          format: "json",
        },
        timeout: 8000,
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("LocationIQ error:", error);
    res.status(500).json({ message: "Reverse geocoding failed" });
  }
};
