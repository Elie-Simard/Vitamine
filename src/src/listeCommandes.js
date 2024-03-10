import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Pharmacien-logo-867FAF3378-seeklogo.com.png';
import './listeCommandes.css';
import { Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderCard from './orderCard';

const ListeCommandes = () => {
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
                            <Typography variant="h5" component="h2" style={{ fontFamily: 'Comic Sans MS', color: '#0D9276' }}>Pharmacie BonLeBon</Typography>
                            <Grid item style={{ marginLeft: '10px' }}>
                                <Link to="/infosCompte">
                                    <Button variant="contained" color="primary">Retour</Button>
                                </Link>
                            </Grid>
                        </div>
                    </Grid>
                    {/* Right side: Search Box and Button */}
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                {/* Cart button with icon */}
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
            {/* Page Title */}
            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>LISTE DES COMMANDES</Typography>
            </Grid>
            {/* Rest of your content */}
            {/* Add your content here */}
            <div>
                <OrderCard
                    orderDate="2022-03-01"
                    orderNumber="123456"
                    totalAmount="65.00"
                    products={[
                        { name: "Produit 1", quantity: 2, price: 10.00 },
                        { name: "Produit 2", quantity: 1, price: 30.00 },
                        { name: "Produit 3", quantity: 3, price: 5.00 }
                    ]}
                />
            </div>
            <div>
                <OrderCard
                    orderDate="2022-03-01"
                    orderNumber="123456"
                    totalAmount="65.00"
                    products={[
                        { name: "Produit 1", quantity: 2, price: 10.00 },
                        { name: "Produit 2", quantity: 1, price: 30.00 },
                        { name: "Produit 3", quantity: 3, price: 5.00 }
                    ]}
                />
            </div>
            <div>
                <OrderCard
                    orderDate="2022-03-01"
                    orderNumber="123456"
                    totalAmount="65.00"
                    products={[
                        { name: "Produit 1", quantity: 2, price: 10.00 },
                        { name: "Produit 2", quantity: 1, price: 30.00 },
                        { name: "Produit 3", quantity: 3, price: 5.00 }
                    ]}
                />
            </div>
            <div>
                <OrderCard
                    orderDate="2022-03-01"
                    orderNumber="123456"
                    totalAmount="65.00"
                    products={[
                        { name: "Produit 1", quantity: 2, price: 10.00 },
                        { name: "Produit 2", quantity: 1, price: 30.00 },
                        { name: "Produit 3", quantity: 3, price: 5.00 }
                    ]}
                />
            </div>
            <div>
                <OrderCard
                    orderDate="2022-03-01"
                    orderNumber="123456"
                    totalAmount="65.00"
                    products={[
                        { name: "Produit 1", quantity: 2, price: 10.00 },
                        { name: "Produit 2", quantity: 1, price: 30.00 },
                        { name: "Produit 3", quantity: 3, price: 5.00 }
                    ]}
                />
            </div>
        </div>
    );
};

export default ListeCommandes;

