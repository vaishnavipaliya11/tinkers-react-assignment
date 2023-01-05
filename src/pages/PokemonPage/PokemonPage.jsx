import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/pokemoncard/PokemonCard";
import { PokemonData } from "../../data/PokemonData";
import "../../styles.css";

export const Pokemon = () => {
  const [cardData, setCardData] = useState();
  const [loading, setloading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const apiData = await PokemonData(pageNo);
        setloading(false);
        console.log(apiData.data);
        setCardData(apiData.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handelPage = async () => {
    if (pageNo == 3) {
      setPageNo(1);
    }
    try {
      setloading(true);
      const apiData = await PokemonData(pageNo);
      setloading(false);
      console.log(apiData.data);
      setCardData(apiData.data);
    } catch (error) {
      console.log(error);
    }
    setPageNo((pageNo) => pageNo + 1);
  };

  return (
    <div className="margin-med">
      <div className="common-flex mapped-container">
        {cardData?.map((data) => {
          return <PokemonCard data={data} />;
        })}
        {loading ? <p>loading...</p> : ""}
       
      </div>
      
      <button className="page-no-btn" onClick={handelPage}>Page No {pageNo}</button>
    </div>
  );
};
