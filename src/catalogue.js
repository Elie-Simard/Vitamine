import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logoVit.webp';
import './catalogue.css';
import { Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCard from './productCard';

const Catalogue = () => {
    document.body.classList.add('catalogue-body');

    // Déclaration des états pour les filtres
    const [filters, setFilters] = useState({
        noix: false,
        gluten: false,
        antibiotique: false,
        latex: false
    });

    // Exemple de produits
    const products = [
        {
            productName: "Produit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper id arcu quis placerat.",
            price: "$10.00",
            imageUrl: "images/sisu.webp",
            allergenes: ["gluten", "noix"]
        },
        {
            productName: "Produit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper id arcu quis placerat.",
            price: "$15.00",
            imageUrl: "images/workout.jpeg",
            allergenes: ["antibiotique"]
        },
        {
            productName: "Produit 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper id arcu quis placerat.",
            price: "$12.00",
            imageUrl: "images/purple.jpeg",
            allergenes: ["antibiotique", "gluten"]
        },
        {
            productName: "Produit 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper id arcu quis placerat.",
            price: "$3.00",
            imageUrl: "images/laroche.jpeg",
            allergenes: ["noix"]
        },

        // Ajoutez d'autres produits ici
    ];

    // Fonction pour mettre à jour les filtres
    const handleFilterChange = (filterName) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName]
        }));
    };

    // Fonction pour filtrer les produits en fonction des filtres sélectionnés
    const filterProducts = (product) => {
        if (filters.noix && product.allergenes.includes('noix')) {
            return false;
        }
        if (filters.gluten && product.allergenes.includes('gluten')) {
            return false;
        }
        if (filters.antibiotique && product.allergenes.includes('antibiotique')) {
            return false;
        }
        if (filters.latex && product.allergenes.includes('latex')) {
            return false;
        }
        return true;
    };

    return (
        <div>
            {/* Top navigation bar */}
            {/* ajouteunr un espace en haut car la cest trop haut */}
            <div style={{ height: '50px' }}></div>
            {/* Top navigation bar */}
            <div style={{ backgroundColor: 'white', padding: '10px' }}>
                <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: 'white', padding: '10px' }}>
                    {/* Left side: Logo */}
                    <Grid item>
                        <div className='containerCatalogueLogo' style={{ backgroundColor: 'white' }}>
                            <Link to="/">
                                <img className='miniLogo' src={logo} alt="Pharmacie Logo" />
                            </Link>
                            <Typography variant="h5" component="h2" style={{ fontFamily: 'Comic Sans MS', color: 'blue' }}>Vitamine BonLeBon</Typography>
                        </div>
                    </Grid>
                    {/* Right side: Search Box and Button */}
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Link to="/infosCompte">
                                    <Button variant="contained" color="primary">Mon Compte</Button>
                                </Link>
                            </Grid>
                            <Grid item>
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
            <div style={{ backgroundColor: 'white', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
                <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>CATALOGUE</Typography>
                </Grid>
                {/* Filter section */}
                <Grid container justifyContent="center" style={{ margin: '20px 0' }}>
                    <Typography variant="h6" style={{ marginRight: '10px' }}>Filtres:</Typography>
                    <Button variant={filters.noix ? "contained" : "outlined"} onClick={() => handleFilterChange('noix')}>Sans Noix</Button>
                    <Button variant={filters.gluten ? "contained" : "outlined"} onClick={() => handleFilterChange('gluten')}>Sans Gluten</Button>
                    <Button variant={filters.antibiotique ? "contained" : "outlined"} onClick={() => handleFilterChange('antibiotique')}>Sans Antibiotique</Button>
                    <Button variant={filters.latex ? "contained" : "outlined"} onClick={() => handleFilterChange('latex')}>Sans Latex</Button>
                </Grid>
                {/* Product cards */}
                <Grid container justifyContent="center" spacing={2}>
                    {products.filter(filterProducts).map((product, index) => (
                        <Grid item key={index}>
                            <ProductCard
                                productName={product.productName}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Catalogue;
