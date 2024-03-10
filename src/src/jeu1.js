import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Pharmacien-logo-867FAF3378-seeklogo.com.png';
import { Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Connect4 from './connect4';

const Jeu1 = () => {
    return (
        <div>
            {/* Top navigation bar */}
            <div style={{ backgroundColor: '#7EA4B2', padding: '10px' }}>
                <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: '#BBE2EC', padding: '10px' }}>
                    {/* Left side: Logo */}
                    <Grid item>
                        <div className='containerCatalogueLogo'>
                            <Link to="/">
                                <img className='miniLogo' src={logo} alt="Pharmacie Logo" />
                            </Link>
                            <Typography variant="h5" component="h2" style={{ fontFamily: 'Comic Sans MS', color: '#0D9276' }} >Pharmacie BonLeBon</Typography>
                            <Grid item style={{ marginLeft: '10px' }}>
                                <Link to="/jeux">
                                    <Button variant="contained" color="primary">Retour</Button>
                                </Link>
                            </Grid>
                        </div>
                    </Grid>
                    {/* Right side: Search Box and Button */}
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Link to="/infosCompte">  {/* Ajouter le bon link */}
                                    <Button variant="contained" color="primary">Mon Compte</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                {/* Cart button avec icon */}
                                <Link to="/panier">
                                    <IconButton color="primary" aria-label="cart">
                                        <ShoppingCartIcon />
                                    </IconButton>
                                </Link>
                            </Grid>
                            <Grid item>
                                <TextField id="outlined-basic" label="Recherche..." variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">Recherche</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#BBE2EC', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh'}}>
                <Grid container justifyContent="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>Connecte 4</Typography>
                </Grid>
                <Grid container justifyContent="center">
                    <Connect4 />
                </Grid>
                <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Typography variant="body1" style={{fontWeight: 'bold'}}>
                        Règles:
                    </Typography>
                    <Typography variant="body1">
                        Le but est de connecter 4 de vos jetons horizontalement, verticalement ou diagonalement avant votre adversaire. Les jetons tombes dans la case la plus basse disponible.
                    </Typography>
                </Grid>
                
                
            </div>
        </div>
    )
}

export default Jeu1;