import React, {useContext, useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./Components";
import {AnimatePresence} from 'framer-motion'
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./Context/StateProvider";
import { actionType } from "./Context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-slate-100">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route  path="/*" element={<MainContainer />} />
            <Route  path="/createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
    
  );
}

export default App;
