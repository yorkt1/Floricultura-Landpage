import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; // 'Routes' deve ser importado corretamente

import Home from "../Pages/Home/Home.jsx";
import Sobre from "../Pages/Sobre/Sobre.jsx";
import Usuario from "../Pages/Usuario/Usuario.jsx";

const RoutesApp = () => {
   return(
       <BrowserRouter>
           <Routes> {/* Aqui, você coloca as rotas dentro de <Routes> */}
               <Route path="/" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/usuario" element={<Usuario />} />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesApp;
