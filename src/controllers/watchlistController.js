import { prisma } from "../config/db.js";

export const getWatchlistByUserId = async (req, res) => {
  const userId = req.user?.id;
  try {
    const watchlist = await prisma.watchlistItem.findMany({
      where: { userId },
      include: { movie: true },
    });
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addToWatchlist = async (req, res) => {
  const userId = req.user?.id;
  const { movieId, rating, notes, status } = req.body;
  try {
    const existingMovie = await prisma.movie.findUnique({
      where: { id: movieId },
    });
    if (!existingMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const existingEntry = await prisma.watchlistItem.findUnique({
      where: { userId_movieId: { userId, movieId } },
    });
    if (existingEntry) {
      return res.status(400).json({ error: "Movie already in watchlist" });
    }
    const newEntry = await prisma.watchlistItem.create({
      data: { userId, movieId, rating, notes, status },
    });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateWatchlistItem = async (req, res) => {
  const userId = req.user?.id;
  const { id } = req.params;
  const { rating, notes, status } = req.body;
  try {
    const existingEntry = await prisma.watchlistItem.findUnique({
      where: { id },
    });
    if (!existingEntry || existingEntry.userId !== userId) {
      return res.status(404).json({ error: "Watchlist item not found" });
    }
    const updatedEntry = await prisma.watchlistItem.update({
      where: { id },
      data: { rating, notes, status },
    });
    res.json(updatedEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  const userId = req.user?.id;
  const { id } = req.params; 
  try {
    const existingEntry = await prisma.watchlistItem.findUnique({
      where: { id },
    });
    if (!existingEntry || existingEntry.userId !== userId) {
      return res.status(404).json({ error: "Watchlist item not found" });
    }
    await prisma.watchlistItem.delete({
      where: { id },
    });
    res.json({ message: "Watchlist item removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};