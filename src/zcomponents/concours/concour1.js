import React, { useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';



import ConcourFormulaire from './concourFormulaire';
import NavBar from '../navBar';

const Concour1 = () => {
    const [showPDF, setShowPDF] = useState(false);
    const [formulaire, setFormulaire] = useState(false);


    const handleFormClick = () => {
        if (showPDF) {
            setShowPDF(false);
            setFormulaire(true);
        } else {
            setFormulaire(!formulaire);
        }
    };

    return (
        <div className='mainComponent'>

            <NavBar />
            <div style={{ backgroundColor: 'white', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
                <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>CONCOUR: Participer c'est GAGNANT!</Typography>
                </Grid>
                <br />
                <Grid>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>DATE:</Typography>
                    <Typography variant="body1" >Du 2024/02/26 au 2024/08/01</Typography>
                    <br />
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>PRIX À GAGNER:</Typography>
                    <Typography variant="body1" >Médicaments gratuit à vie!</Typography>
                    <br />
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>SUCCURSALES PARTICIPANTES:</Typography>
                    <Typography variant="body1" >Pharmacacie Bon LeBon Sainte-Catherine: 1234 Rue Sainte-Catherine Ouest, Montreal, QC H3G 1P1, Canada</Typography>
                    <Typography variant="body1" >Pharmacacie Bon LeBon Saint-Laurent: 5678 Boulevard Saint-Laurent, Montreal, QC H2T 1R5, Canada</Typography>
                    <Typography variant="body1" >Pharmacacie Bon LeBon Mont-Royal: 910 Avenue du Mont-Royal E, Montreal, QC H2J 1X6, Canada</Typography>
                    <br />
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={() => {
                            if (formulaire) {
                                setFormulaire(false);
                                setShowPDF(true);
                            } else {
                                setShowPDF(!showPDF);
                            }
                        }} style={{ marginRight: '5px' }}>Règlements</Button>
                        <Button variant="contained" color="primary" onClick={handleFormClick} style={{ marginLeft: '5px' }}>Inscription</Button>
                    </Grid>
                </Grid>
                <br />
                {/* Render PDF. Toggleable*/}
                {showPDF && (
                    <div className="pdf-container">
                        <embed src="pdf/reglement---ca-pourrait-etre-moi-le-gagnant.pdf" type="application/pdf" width="100%" height="620px" />
                    </div>
                )}

                {/* Render form. toggleable*/}
                {formulaire && <ConcourFormulaire />}
            </div>
        </div>
    )
}

export default Concour1;
