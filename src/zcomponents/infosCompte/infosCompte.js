import React from 'react';
import { Link } from 'react-router-dom';
import {
    TableRow,
    TableCell,
    TableBody,
    Divider,
    Header,
    Icon,
    Table,
} from 'semantic-ui-react';

import logo from '../../images/logoVit.webp';
import '../../style/infosCompte.css';

const InfosCompte = ({ userInfo }) => { // va chercher userInfo dans App.js qui elle va chercher les infos dans creerCompte.js
    console.log(userInfo); // Pour déboguer et vérifier si userInfo se met à jour

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
                    <TableRow>
                        <TableCell>Allergies</TableCell>
                        <TableCell>{userInfo.allergies}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );

    return (
        <div className='infosCompte-body-container'>
            <Link to="/">
                <img style={{ width: '180px' }}
                    src={logo} alt="Pharmacie Logo" />
            </Link>
            <h1 className='infosCompte-title'>Vitamine BonLeBon </h1>

            <h1>Voici vos infos de compte</h1>

            {userInfo ? (
                <TableauInfos />
            ) : (
                <p>Vous n'avez pas de compte</p>
            )}
            <Link to="/listeCommandes">
                <button type="button" className="infosCompte-button">Liste de commandes</button>
            </Link>
            <Link to="/creerCompte">
                <button type="button" className="infosCompte-button">Modifier</button>
            </Link>

            <Link to="/allergiesInfos">
                <button type="button" className="infosCompte-button">Allergies</button>
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
