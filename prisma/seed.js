import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createdBy = "5f44c4a0-f624-4636-bee2-3d39d2be84f5";

const movies = [
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men form a lasting friendship while finding hope and redemption through years of incarceration.",
    genres: ["Drama"],
    releaseYear: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    createdBy,
  },
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime family transfers control of his empire to his reluctant son.",
    genres: ["Crime", "Drama"],
    releaseYear: 1972,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    createdBy,
  },
  {
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
    genres: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    createdBy,
  },
  {
    title: "Inception",
    overview:
      "A skilled thief enters people's dreams to steal secrets but is offered a chance at redemption through one impossible mission.",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2010,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    createdBy,
  },
  {
    title: "Interstellar",
    overview:
      "A group of astronauts travel through a wormhole in search of a new home for humanity.",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    releaseYear: 2014,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    createdBy,
  },
  {
    title: "Fight Club",
    overview:
      "An office worker and a charismatic soap maker create an underground fight club that grows into something much larger.",
    genres: ["Drama"],
    releaseYear: 1999,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    createdBy,
  },
  {
    title: "Forrest Gump",
    overview:
      "The extraordinary life journey of a kind-hearted man who unknowingly witnesses pivotal moments in American history.",
    genres: ["Drama", "Romance"],
    releaseYear: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    createdBy,
  },
  {
    title: "Pulp Fiction",
    overview:
      "The lives of several criminals intertwine through a series of unforgettable stories in Los Angeles.",
    genres: ["Crime", "Drama"],
    releaseYear: 1994,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    createdBy,
  },
  {
    title: "The Matrix",
    overview:
      "A hacker discovers the shocking truth about reality and joins a rebellion against intelligent machines.",
    genres: ["Action", "Sci-Fi"],
    releaseYear: 1999,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    createdBy,
  },
  {
    title: "Gladiator",
    overview:
      "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family.",
    genres: ["Action", "Adventure", "Drama"],
    releaseYear: 2000,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    createdBy,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview:
      "A young hobbit begins a perilous journey to destroy a powerful ring before darkness consumes Middle-earth.",
    genres: ["Adventure", "Fantasy"],
    releaseYear: 2001,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    createdBy,
  },
  {
    title: "The Silence of the Lambs",
    overview:
      "An FBI trainee seeks the help of an imprisoned serial killer to catch another dangerous murderer.",
    genres: ["Crime", "Drama", "Thriller"],
    releaseYear: 1991,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    createdBy,
  },
  {
    title: "The Green Mile",
    overview:
      "A death row prison guard encounters a mysterious inmate with extraordinary healing abilities.",
    genres: ["Crime", "Drama", "Fantasy"],
    releaseYear: 1999,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    createdBy,
  },
  {
    title: "Whiplash",
    overview:
      "A determined jazz drummer pushes himself to the limit under the demanding guidance of an uncompromising instructor.",
    genres: ["Drama", "Music"],
    releaseYear: 2014,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    createdBy,
  },
  {
    title: "Parasite",
    overview:
      "A struggling family gradually infiltrates the lives of a wealthy household with unexpected consequences.",
    genres: ["Drama", "Thriller"],
    releaseYear: 2019,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    createdBy,
  },
];

const main = async () => {
  try {
    for (const movie of movies) {
      await prisma.movie.create({
        data: movie,
      });
      console.log(`Seeded movie: ${movie.title}`);
    }
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

main()
  .catch((error) => {
    console.error("Error in main function:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
