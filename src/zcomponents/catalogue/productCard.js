import React from 'react';
import { Paper, Grid, Typography, TextField, IconButton, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const ProductCard = ({ productName, description, price, imageUrl }) => {
    
    const handleIngredientsClick = () => {
        alert("Afficher les ingrédients");
    };
    
    return (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <img src={imageUrl} alt="Product" style={{ width: '100px', height: '100px' }} />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6">{productName}</Typography>
                            <Typography variant="body1">{description}</Typography>
                            <Typography variant="h6">{price}</Typography>
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-number" label="Quantité" type="number" InputLabelProps={{ shrink: true }} variant="outlined" style={{margin:'5px'}}/>
                            <Button variant="contained" color="primary" aria-label="add-to-cart" style={{margin:'5px'}}>
                                <IconButton color="primary" aria-label="add-to-cart">
                                    <AddShoppingCartIcon style={{color:'white'}}/>
                                </IconButton>
                            </Button>
                            <Button variant="contained" color="primary" aria-label="view-details" style={{marginLeft:'5px', marginBottom:'5px', marginTop:'5px' }}>
                                <IconButton color="primary" aria-label="view-details">
                                    <SearchIcon style={{color:'white'}}/>
                                </IconButton>
                            </Button>
                            {/* Bouton Ingrédients */}
                            <Button variant="contained" color="primary" aria-label="view-ingredients" onClick={handleIngredientsClick} style={{marginLeft:'5px', marginBottom:'5px', marginTop:'5px' }}>
                                Ingrédients
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ProductCard;
