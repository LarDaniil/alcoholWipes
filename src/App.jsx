import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/catalog";
import { DescriptionCard } from "./pages/descriptionCard/DescriptionCard";
import { Basket } from "./pages/basket";

import arrCards from "./assets/napkins.json";
import descriptionCard from "./assets/descriptionCard.json";

export const Context = React.createContext();

export default function App() {
  const [activeLinkHeader, setActiveLinkHeader] = React.useState(0);
  const [nameCard, setNameCard] = React.useState();
  const [basket, setBasket] = React.useState([]);

  function onClickActiveLinkHeader(index) {
    setActiveLinkHeader(index);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Context.Provider
        value={{
          basket,
          setBasket,
          // itemsCart,
          // setItemsCart,
          nameCard,
          setNameCard,
          activeLinkHeader,
          onClickActiveLinkHeader,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog arrCards={arrCards} />} />

          <Route
            path={"/catalog/" + nameCard}
            element={descriptionCard.map(
              (obj) =>
                obj.title === nameCard && (
                  <DescriptionCard key={obj.id} obj={obj} />
                )
            )}
          />
          <Route path="/wholesale" element={<Home />} />
          <Route path="/contacts" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Context.Provider>
    </>
  );
}
