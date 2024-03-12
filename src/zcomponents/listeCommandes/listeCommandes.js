import React from 'react';

import { Grid, Typography } from '@mui/material';



import OrderCard from './orderCard.js';
import '../../style/listeCommandes.css';
import NavBar from '../navBar';

const ListeCommandes = () => {
    return (
        <div>
            <NavBar />
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

