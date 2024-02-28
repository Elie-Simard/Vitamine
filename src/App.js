// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreerCompte from './creerCompte';
import Accueil from './accueil';
import InfosCompte from './infosCompte';
import Catalogue from './catalogue';
import ListeCommandes from './listeCommandes';
import Panier from './panier';
import Checkout from './checkout';
import Concours from './concours';
import Concour1 from './concour1';
import Connect4 from './connect4';
import Jeux from './jeux';
import Jeu1 from './jeu1';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const handleUserInfo = (data) => {
    setUserInfo(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />

        <Route
          path="/creerCompte"
          element={<CreerCompte onAccountCreation={handleUserInfo} />}
        />

        <Route path="/infosCompte" element={<InfosCompte userInfo={userInfo} />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/listeCommandes" element={<ListeCommandes />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/checkout" element={<Checkout />} />
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
