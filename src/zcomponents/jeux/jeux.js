import React from "react";
import { Button, Icon, Container } from "semantic-ui-react";
import NavBar from "../navBar";
import { Link } from "react-router-dom";


const Jeux = () => {
    return (
        <Container textAlign="center" style={{ marginTop: '20px' }}>
            <br />
            <NavBar />
            <br />
            <br />
            <Link to="/jeu1">
                <Button icon labelPosition='left' color="green" style={{ margin: '10px' }}>
                    <Icon name="chess" />
                    Connect
                </Button>
            </Link>


            <Link to="/pendu">   
            <Button icon labelPosition='left' color="red" style={{ margin: '10px' }}>
                <Icon name="puzzle" />
                Le Pendu
            </Button>
            </Link>

        </Container>
    );
}

export default Jeux;
