// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CreerCompte from './zcomponents/creerCompte/creerCompte';
import Accueil from './zcomponents/accueil/accueil';
import AccueilSpanish from './zcomponents/accueil/AccueilSpanish';
import InfosCompte from './zcomponents/infosCompte/infosCompte';
import Catalogue from './zcomponents/catalogue/catalogue';
import ListeCommandes from './zcomponents/listeCommandes/listeCommandes';
import Panier from './zcomponents/panier/panier';
import AllergiesInfos from './zcomponents/allergiesInfos/allergiesInfos';
import Checkout from './zcomponents/checkout/checkout';
import Concours from './zcomponents/concours/concours';
import Concour1 from './zcomponents/concours/concour1';
import Connect4 from './zcomponents/jeux/connect4';
import Jeux from './zcomponents/jeux/jeux';
import Jeu1 from './zcomponents/jeux/jeu1';
import Pendu from './zcomponents/jeux/pendus/Pendu';



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
        <Route path="*" element={<Navigate to="/" replace />} />


        <Route
          path="/creerCompte"
          element={<CreerCompte onAccountCreation={handleUserInfo} />}
        /> 
        <Route path="/infosCompte" element={<InfosCompte userInfo={userInfo} />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/listeCommandes" element={<ListeCommandes />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/allergiesInfos" element={<AllergiesInfos onUpdateUserInfo={handleAllergiesUpdate} />} />
        <Route
          path="/allergiesInfos"
          element={<AllergiesInfos onUpdateUserInfo={handleAllergiesUpdate} />} />
        <Route exact={true} path="/concours" element={<Concours />} />
        <Route exact={true} path="/concour1" element={<Concour1 />} />
        <Route path="/connect4" element={<Connect4 />} />
        <Route exact={true} path="/jeux" element={<Jeux />} />
        <Route exact={true} path="/jeu1" element={<Jeu1 />} />
        <Route exact={true} path="/AccueilSpanish" element={<AccueilSpanish />} />
        <Route exact={true} path="/pendu" element={<Pendu />} />
      </Routes>
    </Router>
  );
}

export default App;
