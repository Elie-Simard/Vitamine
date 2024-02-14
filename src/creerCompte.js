import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Pharmacien-logo-867FAF3378-seeklogo.com.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './creerCompte.css';

const CreerCompte = ({ onAccountCreation }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        onAccountCreation(user);
    };

    document.body.classList.add('creerCompteBody');


    return (
        <div className="containerCreerCompte">
            <Box
                component="form"
                autoComplete="off"
                className="containerCreerCompte"
            >
                <Link to="/">
                    <img className="miniLogo" src={logo} alt="Pharmacie Logo" />
                </Link>
                <h1>Créer un compte</h1>
                <TextField
                    required
                    label="Adresse email"
                    placeholder="Adresse email"
                    onChange={handleInputChange}
                    name="email"
                    margin="normal"
                />
                <TextField
                    required
                    label="Mot de passe"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={handleInputChange}
                    name="password"
                    margin="normal"
                />
                <TextField
                    required
                    label="Prénom et Nom"
                    placeholder="Prénom et Nom"
                    onChange={handleInputChange}
                    name="name"
                    margin="normal"
                />
                <TextField
                    label="Téléphone"
                    placeholder="Téléphone"
                    onChange={handleInputChange}
                    name="phone"
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" onClick={handleCreateAccount}>
                    Confirmer
                </Button>
                <Link to="/infosCompte">
                    <Button>Voir vos infos</Button>
                </Link>
            </Box>
        </div>
    );
};

export default CreerCompte;
