import React from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ConcourCard = ({ nomConcour, date, prix, imageUrl, concourUrl }) => {

    return (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <img src={imageUrl} alt="Product" style={{ width: '100px', height: '100px' }} />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{nomConcour}</Typography>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>{date}</Typography>
                            <Typography variant="body1">{prix}</Typography>
                        </Grid>

                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                        <Link to={concourUrl}>
                            <Button variant="contained" color="primary">Détails</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ConcourCard;
