import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Pharmacien-logo-867FAF3378-seeklogo.com.png";
import "./checkout.css";


const Checkout = () => {
  // State pour les informations du panier
  const [items] = useState([
    { id: 1, name: "Produit 1 ", quantity: 1, price: 10 },
    { id: 2, name: "Produit 2 ", quantity: 1, price: 20 },
    { id: 3, name: "Produit 3 ", quantity: 1, price: 15 },
  ]);

  // Fonction pour supprimer un article du panier

  // Calcul du total
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    // Conteneur du panier avec des classes pour le style
    <div className="containerCheckout">
      <div className="checkout">
        <Link to="/">
          <img className="miniLogo" src={logo} alt="Pharmacie Logo" />
        </Link>
        <h2>Checkout</h2>

        {/* Résumé des articles */}
        <div className="resume-articles">
          <h3>Résumé des articles</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Prix: {item.price}$ </span>
                <span>Quantité: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code promo */}
        <div className="code-promo">
          <h3>Code promo</h3>
          <input type="text" placeholder="Entrez votre code promo" />
          <button className="button">Appliquer</button>
        </div>

        {/* Adresse */}
        <div className="adresse">

          {/* Formulaire pour l'adresse */}

          <div className="adresse">
            <h3>Adresse de livraison</h3>
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Nom complet</label>
                <input type="text" id="fullName" name="fullName" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresse</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">Ville</label>
                <input type="text" id="city" name="city" />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Code postal</label>
                <input type="text" id="zipCode" name="zipCode" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Pays</label>
                <input type="text" id="country" name="country" />
              </div>
            </form>
          </div>
        </div>

        {/* Carte de crédit */}
        <div className="carte-credit">
          <h3>Méthode de paiement</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Numéro de carte</label>
              <input type="text" id="cardNumber" name="cardNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Nom sur la carte</label>
              <input type="text" id="cardName" name="cardName" />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Date d'expiration</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" />
            </div>

          </form>
        </div>

        {/* Total */}
        <div className="total">
          <h3>Total</h3>
          <p>Total avant taxes: {total}$</p>
          <p>Taxes: {/* Calcul des taxes */}</p>
          <p>Total avec taxes: {/* Total avec taxes */}</p>
          <p>Frais de livraison: {/* Frais de livraison */}</p>
          <p>Total final: {/* Total final avec frais de livraison */}</p>
        </div>

        {/* Bouton pour retourner au panier */}

        <Link to="/panier">
          <button className="button">Retourner au panier</button>
        </Link>
        <button className="button" type="submit">Valider le paiement</button>
      </div>
    </div>
  );
};

export default Checkout;
