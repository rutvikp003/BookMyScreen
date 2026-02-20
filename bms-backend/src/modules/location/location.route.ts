import { Router } from "express";
import { reverseGeocode } from "./location.controller";

const router = Router();

router.get("/reverse", reverseGeocode);

export default router;
