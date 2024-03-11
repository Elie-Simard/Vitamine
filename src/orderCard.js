import React from 'react';
import { Paper, Grid, Typography, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const OrderCard = ({ orderDate, orderNumber, totalAmount, products }) => {
    
    return (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                    {/* Title: Order Date and Order Number */}
                    <Grid container justifyContent="space-between" alignItems="center" style={{ marginBottom: '20px' }}>
                        <Typography variant="h6">{orderDate}</Typography>
                        <Typography variant="h6">Order #{orderNumber}</Typography>
                    </Grid>
                    {/* Total Amount */}
                    <Typography variant="h6" style={{ marginBottom: '20px' }}>Total: ${totalAmount}</Typography>
                    {/* Order Details */}
                    {products.map((product, index) => (
                        <Grid container key={index} justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
                            <Grid item xs={8}>
                                <Typography variant="body1">{product.name}</Typography>
                                <Typography variant="body2">{product.quantity} x ${product.price}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">${product.quantity * product.price}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                    {/* Reorder Button */}
                    <Grid container justifyContent="flex-end">
                    <Button variant="contained" color="primary" aria-label="view-details" style={{marginRight:'5px', marginBottom:'5px', marginTop:'5px' }}>
                    <IconButton color="primary" aria-label="view-details">
                                <SearchIcon style={{color:'white'}}/>
                            </IconButton>
                            </Button>
                        <Button variant="contained" color="primary" style={{marginLeft:'5px', marginBottom:'5px', marginTop:'5px' }}>Acheter à nouveau</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default OrderCard;
