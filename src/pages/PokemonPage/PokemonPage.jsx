import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { PokemonData } from "../../data/PokemonData";
import "../../styles.css"

export const Pokemon = () => {
    const[cardData, setCardData]= useState()
  useEffect(() => {
    (async () => {
      try {
        const apiData = await PokemonData();
        console.log(apiData.data);
        setCardData(apiData.data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div className="common-flex mapped-container">
    {cardData?. map((data) =>{
        return(
            <PokemonCard data={data}/>
        )
    })}
  </div>;
};
