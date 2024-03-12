import React, { useState } from 'react';
import { Grid, Button, Header, Segment } from 'semantic-ui-react';



import '../../style/catalogue.css';
import ProductCard from './productCard';
import NavBar from '../navBar';

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
            <NavBar />
            <Segment style={{ backgroundColor: 'white', padding: '10px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
                <Grid centered style={{ marginTop: '20px' }}>
                    <Header as='h1' style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>CATALOGUE</Header>
                </Grid>

                <Grid centered style={{ margin: '20px 0' }}>
                    <Header as='h4' style={{ marginRight: '10px' }}>Filtres:</Header>
                    <Button toggle active={filters.noix} onClick={() => handleFilterChange('noix')}>Sans Noix</Button>
                    <Button toggle active={filters.gluten} onClick={() => handleFilterChange('gluten')}>Sans Gluten</Button>
                    <Button toggle active={filters.antibiotique} onClick={() => handleFilterChange('antibiotique')}>Sans Antibiotique</Button>
                    <Button toggle active={filters.latex} onClick={() => handleFilterChange('latex')}>Sans Latex</Button>
                </Grid>

                <Grid centered>
                    <Grid.Column style={{ maxWidth: 900 }}>
                        {products.filter(filterProducts).map((product, index) => (
                            <div key={index} style={{ marginBottom: 20 }}>
                                <ProductCard
                                    productName={product.productName}
                                    description={product.description}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                />
                            </div>
                        ))}
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};


export default Catalogue;
