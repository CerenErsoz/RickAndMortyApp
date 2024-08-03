export const fetchEpisodes = async (page = 1) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch episodes:", error);
      throw error;
    }
  };
  