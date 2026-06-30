import { prisma } from '../config/db.js';

export const getAllMovies = async (req, res) => {
  try {
    // const movies = await prisma.movie.findMany();

    const movies = await prisma.movie.findMany({
      where: {
        releaseYear: { gt: 1980, lt: 2020 },
      },
      orderBy: {
        releaseYear: 'asc', // Example sorting: sort by title in ascending order
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
          },
        }
      },
      take: 5
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;
    try {
    const movie = await prisma.movie.findUnique({
        where: { id },
    });
    if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
