import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../style/panier.css";
import logo from '../../images/logoVit.webp';


// Composant Panier
const Panier = ({ retournerAuCatalogue, passerALaCaisse }) => {
  // State pour les articles dans le panier avec quantité
  const [items, setItems] = useState([
    { id: 1, name: "Produit 1 ", quantity: 1, price: 10 },
    { id: 2, name: "Produit 2 ", quantity: 1, price: 20 },
    { id: 3, name: "Produit 3 ", quantity: 1, price: 15 },
  ]);

  // Fonction pour supprimer un article du panier
  const removeFromCart = (itemToRemove) => {
    const updatedItems = items.filter((item) => item.id !== itemToRemove.id);
    setItems(updatedItems);
  };

  // Fonction pour mettre à jour la quantité d'un article dans le panier
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  // Calcul du total
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    // Conteneur du panier avec des classes pour le style
    <div className="containerPanier">
      <div className="panier">
        <Link to="/">
          <img className="logoPanier" src={logo} alt="Pharmacie Logo" />
        </Link>
        <h2>Panier</h2>
        {/* Liste des articles dans le panier */}
        <ul>
          {/* Mapping sur les articles pour les afficher dans la liste */}
          {items.map((item) => (
            <li key={item.id}>
              {/* Affichage du nom de l'article */}
              <span>{item.name}</span>
              {/* Affichage du prix */}
              <span>Prix: {item.price}$</span>
              {/* Champ d'entrée pour la quantité avec gestion du changement */}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
              {/* Bouton pour supprimer l'article */}
              <button onClick={() => removeFromCart(item)}>
                Supprimer du panier
              </button>
            </li>
          ))}
        </ul>
        {/* Section Add-ons */}
        <div className="addons">
          <h3>Add-ons</h3>
          <div className="addon-products">
            {/* Ajoutez ici les trois produits d'add-ons */}
            <div className="addon-product">
              <h4>Add-on 1</h4>
              <p>Description de l'add-on 1</p>
              <button>Ajouter</button>
            </div>
            <div className="addon-product">
              <h4>Add-on 2</h4>
              <p>Description de l'add-on 2</p>
              <button>Ajouter</button>
            </div>
            <div className="addon-product">
              <h4>Add-on 3</h4>
              <p>Description de l'add-on 3</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>

        {/* Affichage du total */}
        <div className="total">
          Total partiel (Avant livraison et les taxes): {total}$
        </div>
        <div className="livrasion">
          Livraison standard gratuite pour toutes les commandes de plus de 50 $
          avant les taxes, à l'exception de l'achat de cartes-cadeaux
          numériques.
        </div>

        {/* Bouton pour retourner au catalogue */}
        <Link to="/catalogue">
          <button type="button">Retourner au catalogue</button>
        </Link>
        {/* Bouton pour passer à la caisse */}
        <Link to="/checkout">
          <button type="button">Passer à la caisse</button>
        </Link>
      </div>
    </div>
  );
};

export default Panier;
