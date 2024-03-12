import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Image } from "semantic-ui-react";
import logo from "../images/logoVit.webp";


const NavBar = () => {
    return (
        <Menu secondary style={{
            backgroundColor: '#F5F5F5', // Remplacez '#white' par 'white' ou '#ffffff'
        }}>            <Menu.Item>
                <Link to="/">
                    <Image src={logo} size="tiny" />
                </Link>
                <span style={{ color: '#2e70c6', fontSize: '20px', fontWeight: 'bold', marginLeft: '15px' }}>Vitamine BonLeBon</span>
            </Menu.Item>


            <Menu.Menu position="right">
                <Menu.Item>
                    <Link to="/catalogue" style={{ fontSize: '16px' }}>
                        <Icon name="pills" style={{ marginRight: '5px' }} />
                        Catalogue
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/panier" style={{ fontSize: '16px' }}>
                        <Icon name="shopping cart" style={{ marginRight: '5px' }} />
                        Panier
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/infosCompte" style={{ fontSize: '16px' }}>
                        <Icon name="user" style={{ marginRight: '5px' }} />
                        Mon compte
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default NavBar;
