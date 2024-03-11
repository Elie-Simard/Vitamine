import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Message, MessageHeader, Segment, Grid, GridColumn, Divider, Form, FormInput } from 'semantic-ui-react';
import logo from './logoVit.webp';
import './accueil.css';
import ContactInfo from './contactInfo';

const ConnexionOuInscription = () => (
    <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
            <GridColumn>
                <Form>
                    <FormInput icon="user" iconPosition="left" label="Courriel" placeholder="Courriel" />
                    <FormInput icon="lock" iconPosition="left" label="Mot de passe" type="password" />
                    <Link to="/infosCompte">
                        <Button content="Connexion" primary />
                    </Link>
                </Form>
            </GridColumn>
            <GridColumn verticalAlign="middle">
                <Link to="/creerCompte">
                    <Button content="Registrarse" icon="signup" size="big" />
                </Link>
            </GridColumn>
        </Grid>
        <Divider vertical>O</Divider>
    </Segment>
);

const AccueilSpanish = () => {
    document.body.classList.add('accueilBody');

    const [contactInfoVisible, setContactInfoVisible] = useState(false);

    const handleContactInfoClick = () => {
        setContactInfoVisible(!contactInfoVisible);
    };

    return (
        <div className="accueil-body-container">
            <div className="accueil-containerAccueil">
                <br />
                <br />
                <img className="miniLogo" src={logo} alt="Logo de la farmacia" />
                <h1 className="accueil-title">Vitamina BuenoElBueno</h1>
                <br />
                <br />
                <div>
                    <Message style={{ textAlign: 'center' }}>
                        <MessageHeader>Bienvenido a Vitamina BuenoElBueno</MessageHeader>
                        <p>Descubre una amplia selección de productos de calidad.</p>
                    </Message>
                    <ConnexionOuInscription />

                    <br />
                    <br />
                    <ContactInfo onClose={handleContactInfoClick} />
                    <Link to="/catalogue">
                        <button className="accueil-button">Ver el catálogo</button>
                    </Link>
                    <Link to="/">
                        <button className="accueil-button">Français</button>
                    </Link>  
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="accueil-footer">
                    <div className="accueil-social-buttons">
                        <a href="https://www.facebook.com/">
                            <Button color="facebook">
                                <Icon name="facebook" /> Facebook
                            </Button>
                        </a>

                        <a href="https://twitter.com/">
                            <Button color="twitter">
                                <Icon name="twitter" /> Twitter
                            </Button>
                        </a>



                        <a href="https://www.linkedin.com/">
                            <Button color="linkedin">
                                <Icon name="linkedin" /> LinkedIn
                            </Button>
                        </a>

                        <a href="https://www.instagram.com/">
                            <Button color="instagram">
                                <Icon name="instagram" /> Instagram
                            </Button>
                        </a>


                    </div>

                    <div style={{ textAlign: 'center' }}>
                        © 2024 Vitamina BuenoElBueno
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccueilSpanish;
