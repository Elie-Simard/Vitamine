import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import allergieImg from '../../images/allergie.avif';
import '../../style/infosCompte.css';

const AllergiesInfos = ({ onUpdateUserInfo }) => { //ON MET UN MAJUSCULE A AllergiesInfos vs le nom du fichier parce que c'est un composant et c'est une convention de nommage
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUserInfo(allergies);
    };

    return (
        <div>

            <Box
                component="form"
                autoComplete="off"
                className="containerCreerCompte"
            >
                <img src={allergieImg} alt="Pharmacie Logo" style={{ width: '90%' }} />
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Entrer vos allergies"
                        multiline
                        rows={4}
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        variant="outlined"
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Save Allergies Info
                    </Button>
                </form>
                <Link to="/infosCompte">Back to Account Info</Link>
            </Box>
        </div>
    );
};

export default AllergiesInfos;
