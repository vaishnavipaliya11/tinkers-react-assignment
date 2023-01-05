import axios from "axios";

export const PokemonData = async (pageNo) => {
 
  try {
    const { data } = await axios(`https://api.pokemontcg.io/v2/cards?page=${pageNo}&pageSize=10`);
    return data
  } catch (error) {
    console.error(error);
  }
};
