import express from "express";
import { getWatchlistByUserId, addToWatchlist, updateWatchlistItem, removeFromWatchlist } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { watchlistItemSchema } from "../validators/watchlistValidators.js"

const router = express.Router();

router.use(authMiddleware); // Apply authentication middleware to all routes in this router

router.get("/user/:userId", getWatchlistByUserId);
router.post("/", validateRequest(watchlistItemSchema), addToWatchlist);
router.put("/:id", validateRequest(watchlistItemSchema), updateWatchlistItem);
router.delete("/:id",  removeFromWatchlist);

export default router;