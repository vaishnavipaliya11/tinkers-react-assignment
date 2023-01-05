import axios from "axios";

export const PokemonData = async () => {
  try {
    const { data } = await axios("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10");
    return data
  } catch (error) {
    console.error(error);
  }
};
