import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logoVit.webp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './creerCompte.css';

const Connexion = ({ onAccountCreation }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        address: '',
        phone: '',
        allergies: ''
    });
    const [compteCree, setCompteCree] = useState(false); // pour afficher le message de confirmation

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        onAccountCreation(user);
        setCompteCree(true);
    };

    document.body.classList.add('creerCompteBody');


    return (
        <div className="containerCreerCompte">
            {compteCree ? (
                <div>
                    <p>Succès</p>
                    <Link to="/infosCompte">
                        <Button>Voir vos infos</Button>
                    </Link>
                </div>
            ) : (
                <Box
                    component="form"
                    autoComplete="off"
                    className="containerCreerCompte"
                >
                    <Link to="/">
                        <img className="miniLogo" src={logo} alt="Pharmacie Logo" />
                    </Link>
                    <h1>Connexion</h1>
                    <br />
                    <TextField
                        required
                        label="Adresse email"
                        placeholder="Adresse email"
                        onChange={handleInputChange}
                        name="email"
                        margin="normal"
                    />
                    <br />
                    <TextField
                        required
                        label="Mot de passe"
                        type="password"
                        placeholder="Mot de passe"
                        onChange={handleInputChange}
                        name="password"
                        margin="normal"
                    />
                    <br />
                    <br />
                    {/* redirige le bouton vers infosCompte---> */}
                    <Button type="submit" variant="contained" color="primary" onClick={handleCreateAccount}>
                        Confirmer
                    </Button>
                </Box>
            )}
        </div>
    );
};

export default Connexion;
