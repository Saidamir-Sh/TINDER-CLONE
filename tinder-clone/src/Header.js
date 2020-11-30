import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header__back'></ArrowBackIosIcon>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon' />
                </IconButton>
            )}
            
            <Link to='/'>
                <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                    className='header__logo'
                    alt='Tinder Logo'>
                </img>
            </Link>

           <Link to='/chats'>
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
            </Link>
        </div>
    );
}

export default Header;
/*
<ArrowBackIosIcons fontSize='large' className='header__back'></ArrowBackIosIcons>
 */