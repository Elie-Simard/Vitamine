// ContactInfo.js
import React from 'react';
import { Popup, Button, Icon } from 'semantic-ui-react';
import './accueil.css';

const ContactInfo = ({ onClose }) => (
    <Popup
        trigger={<Button className="accueil-button" content='Nous Contacter' />}
        content={<div><Icon name='phone' color='blue' /> +1-438-239-4256 <br /> N'hésitez-pas à nous appeler pour plus d'informations!</div>}
        on='click'
        pinned
        position='bottom right'
        onClose={onClose}
    />
);

export default ContactInfo;