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

      </Routes>
    </Router>
  );
}

export default App;
