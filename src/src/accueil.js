import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Message, MessageHeader, Segment, Grid, GridColumn, FormInput, Form, Divider } from 'semantic-ui-react';
import logo from './Pharmacien-logo-867FAF3378-seeklogo.com.png';
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
                    <Button content="Inscription" icon="signup" size="big" />
                </Link>
            </GridColumn>
        </Grid>
        <Divider vertical>Ou</Divider>
    </Segment>
);

const Accueil = () => {
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
                <img className="miniLogo" src={logo} alt="Pharmacie Logo" />
                <h1 className="accueil-title">Pharmacie BonLeBon</h1>
                <br />
                <br />
                <div>
                    <Message style={{ textAlign: 'center' }}>
                        <MessageHeader>Bienvenue à la Pharmacie BonLeBon</MessageHeader>
                        <p>Découvrez une large sélection de produits de qualité.</p>
                    </Message>
                    <ConnexionOuInscription />

                    <br />
                    <br />
                    <ContactInfo onClose={handleContactInfoClick} />
                    <Link to="/catalogue">
                        <button className="accueil-button">Voir le catalogue</button>
                    </Link>

                    {/* Ajouter par moi */}
                    <Link to="/concours">
                        <button className="accueil-button">Concours</button>
                    </Link>
                    
                    <Link to="/jeux">
                        <button className="accueil-button">Jeux</button>
                    </Link>
                    {/* Ajouter par moi */}

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

                        <a href="https://plus.google.com/">
                            <Button color="google plus">
                                <Icon name="google plus" /> Google Plus
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

                        <a href="https://www.youtube.com/">
                            <Button color="youtube">
                                <Icon name="youtube" /> YouTube
                            </Button>
                        </a>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <br />


                        © 2024 Pharmacie BonLeBon
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
