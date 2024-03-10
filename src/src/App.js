// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreerCompte from './creerCompte';
import Accueil from './accueil';
import InfosCompte from './infosCompte';
import Catalogue from './catalogue';
import ListeCommandes from './listeCommandes';
import Panier from './panier';
import AllergiesInfos from './allergiesInfos';
import Checkout from './checkout';
import Concours from './concours';
import Concour1 from './concour1';
import Connect4 from './connect4';
import Jeux from './jeux';
import Jeu1 from './jeu1';


function App() {

  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : null;
  }); //pour stocker les infos du user qui pourront etre mis a jour dans creerCompte.js et afficher dans infosCompte.js, et meme modifier dans allergiesInfos.js
    //donnes stocké dans local storage pour les garder meme si on refresh la page
  //on utilise JSON.stringify pour convertir les donnees en string avant de les mettre dans local storage

  useEffect(() => {
    console.log('UserInfo updated:', userInfo);
  }, [userInfo]);

  const handleUserInfo = (data) => {
    setUserInfo(data);
    localStorage.setItem('userInfo', JSON.stringify(data));
  };


  const handleAllergiesUpdate = (allergies) => {
    console.log(allergies);
    const updatedUserInfo = { ...userInfo, allergies };
    setUserInfo(updatedUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
  };


  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Accueil />} />

        <Route
          path="/creerCompte"
          element={<CreerCompte onAccountCreation={handleUserInfo} />}
        /> 

        <Route path="/infosCompte" element={<InfosCompte userInfo={userInfo} />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/listeCommandes" element={<ListeCommandes />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/allergiesInfos"
          element={<AllergiesInfos onUpdateUserInfo={handleAllergiesUpdate} />} />
        <Route exact={true} path="/concours" element={<Concours />} />
        <Route exact={true} path="/concour1" element={<Concour1 />} />
        <Route path="/connect4" element={<Connect4 />} />
        <Route exact={true} path="/jeux" element={<Jeux />} />
        <Route exact={true} path="/jeu1" element={<Jeu1 />} />

      </Routes>
    </Router>
  );
}

export default App;
