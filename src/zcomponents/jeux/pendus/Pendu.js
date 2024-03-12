import React, { useState, useEffect } from "react";
import { Button, Container, Form, Grid, Header, Segment, Input } from "semantic-ui-react";

import bonhomme0 from './bonhomme0.jpeg';
import bonhomme1 from './bonhomme1.jpeg';
import bonhomme2 from './bonhomme2.jpeg';
import bonhomme3 from './bonhomme3.jpeg';
import bonhomme4 from './bonhomme4.jpeg';
import bonhomme5 from './bonhomme5.jpeg';
import bonhomme6 from './bonhomme6.jpeg';

// Mettre toutes les images importées dans un tableau
const bonhommes = [bonhomme0, bonhomme1, bonhomme2, bonhomme3, bonhomme4, bonhomme5, bonhomme6];

function Pendu() {
    const [mot, setMot] = useState("bonjour");
    const [lettresDevinees, setLettresDevinees] = useState([]);
    const [bonhomme, setBonhomme] = useState(0);
    const [lettre, setLettre] = useState("");

    useEffect(() => {
        document.title = "Pendu";
        const mots = ["bonjour", "soleil", "plage", "voiture", "ordinateur"];
        const motAleatoire = mots[Math.floor(Math.random() * mots.length)];
        setMot(motAleatoire);
    }, []);

    const handleChange = (e) => {
        setLettre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mot.includes(lettre)) {
            if (!lettresDevinees.includes(lettre)) {
                setLettresDevinees([...lettresDevinees, lettre]);
            }
        } else {
            setBonhomme(bonhomme + 1);
        }
        setLettre("");
    }

    const motAffiche = mot.split('').map(char => (
        lettresDevinees.includes(char) ? char : "_"
    )).join(' ');

    return (
        <Container>
            <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment>
                        <Header as='h2' textAlign='center'>Pendu</Header>
                        <p>{motAffiche}</p>
                        {/* Utiliser l'index bonhomme pour choisir l'image correspondante */}
                        <img src={bonhommes[bonhomme]} alt="Progression du pendu" />
                        <Form onSubmit={handleSubmit}>
                            <Form.Field>
                                <label>Entrez une lettre</label>
                                <Input type="text" value={lettre} onChange={handleChange} maxLength="1" autoFocus />
                            </Form.Field>
                            <Button type="submit" fluid primary>Valider</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Pendu;
