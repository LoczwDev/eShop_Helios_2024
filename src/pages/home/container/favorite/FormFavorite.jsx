import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";

export const FormFavorite = ({ productId }) => {
  const [itemsFavorite, setItemsFavorite] = useState([]);
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(itemsFavorite));
  }, [itemsFavorite]);
  return (
    <div>
      <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
        <GrFavorite />
      </div>
    </div>
  );
};
