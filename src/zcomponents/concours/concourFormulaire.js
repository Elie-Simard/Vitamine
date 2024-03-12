import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ConcourFormulaire = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Formulaire d'inscription</h2>
      <form>
        <TextField
          label="Nom complet"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Téléphone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Adresse"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Numéro de client"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>Envoyer</Button>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inscription envoyé!</DialogTitle>
        <DialogContent>
          Merci pour votre inscription!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Fermer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConcourFormulaire;
