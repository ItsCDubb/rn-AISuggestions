import { genrateEmbedding } from "./generateEmbedding.js";
import { supabase } from "./supabase.js";

const getMovies = () => {
  return supabase.from("movies").select("*").is("embedding", null);
};

const addMovieEmbedding = async (movie) => {
  const embedding = await genrateEmbedding(movie.overview);
  await supabase.from("movies").update({ embedding }).eq("id", movie.id);
};

const processAllMovies = async () => {
  const { data: movies } = await getMovies();
  console.log(movies.length);
  if (!movies?.length) {
    return;
  }
  await Promise.all(movies.map(addMovieEmbedding));
  processAllMovies();
};

processAllMovies();
