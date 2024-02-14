import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Pharmacien-logo-867FAF3378-seeklogo.com.png';
import {
    TableRow,
    TableCell,
    TableBody,
    Divider,
    Header,
    Icon,
    Table,
} from 'semantic-ui-react';
import './infosCompte.css';

const InfosCompte = ({ userInfo }) => {
    const TableauInfos = () => (
        <>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
                    Description
                </Header>
            </Divider>

            <p>
                Doggie treats are good for all times of the year. Proven to be eaten by
                99.9% of all dogs worldwide.
            </p>

            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='bar chart' />
                    Specifications
                </Header>
            </Divider>

            <Table definition>
                <TableBody>
                    <TableRow>
                        <TableCell width={2}>Nom</TableCell>
                        <TableCell>{userInfo.name}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Courriel</TableCell>
                        <TableCell>{userInfo.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mot de passe</TableCell>
                        <TableCell>{userInfo.password}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );

    return (
        <div className='infosCompte-body-container'>
            <Link to="/">
                <img className="minilogo" src={logo} alt="Pharmacie Logo" />
            </Link>
            <h1 className='infosCompte-title'>Pharmacie BonLeBon </h1>

            <h1>Voici vos infos de compte</h1>

            {userInfo ? (
                <TableauInfos />
            ) : (
                <p>Vous n'avez pas de compte</p>
            )}

            <button type="button" className="infosCompte-button">Modifier</button>

            <Link to="/listeCommandes">
                <button type="button" className="infosCompte-button">Commandes</button>
            </Link>

            <Link to="/">
                <button type="button" className="infosCompte-button">Déconnexion</button>
            </Link>

            <Link to="/catalogue">
                <button type="button" className="infosCompte-button">Allez au catalogue</button>
            </Link>
        </div>
    );
};

export default InfosCompte;
