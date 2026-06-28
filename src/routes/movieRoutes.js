import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "List of movies" });
});

router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  res.send({ message: `Details of movie with ID: ${movieId}` });
});

export default router;