import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Message, MessageHeader, Segment, Grid, GridColumn, Divider, Form, FormInput } from 'semantic-ui-react';
import logo from '../../images/logoVit.webp';
import '../../style/accueil.css';
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
                <img style={
                    {
                        width: '120px',
                        height: '120px'
                    }}
                    src={logo} alt="Pharmacie Logo" />
                <h1 className="accueil-title">Vitamine BonLeBon</h1>
                <br />
                <br />

                <div>
                    <Message style={{ textAlign: 'center' }}>
                        <MessageHeader>Bienvenue Chez Vitamine BonLeBon</MessageHeader>
                        <p>Découvrez une large sélection de produits de qualité.</p>
                    </Message>
                    <ConnexionOuInscription />

                    <br />
                    <br />
                    <Link to="/jeux">
                        <button className="accueil-button">
                            <Icon name="game" />

                            Jeux</button>
                    </Link>
                    <ContactInfo onClose={handleContactInfoClick} />
                    <Link to="/catalogue">
                        <button className="accueil-button">Catalogue</button>
                    </Link>

                    <Link to="/concours">
                        <button className="accueil-button">Concours</button>
                    </Link>

                    <Link to="/AccueilSpanish">

                        <button className="accueil-button">Español</button>
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
                    <br />

                    <div style={{ textAlign: 'center' }}>
                        © 2024 Vitamine BonLeBon
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
