import React, { useContext } from 'react';
import { Context } from '../index';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { ABOUTAPPLICATION_ROUTE, ADMIN_ROUTE, UPDATES_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setUser(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        history('/')
    }
    return (
      <Navbar collapseOnSelect className="bg-white">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" style={{ marginRight: '5%', fontSize: '24px', color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }} to={MAIN_ROUTE}>
             FAMILYASSISTANT
            </NavLink>
            <NavLink className="nav-link" style={{ marginRight: '5%', fontSize: '22px' }} to={MAIN_ROUTE}>
              Главная
            </NavLink>
            <NavLink className="nav-link" style={{ marginRight: '5%', fontSize: '22px', whiteSpace: 'nowrap' }} to={ABOUTAPPLICATION_ROUTE}>
              О нас
            </NavLink>
            <NavLink className="nav-link" style={{ marginRight: '5%', fontSize: '22px', whiteSpace: 'nowrap' }} to={UPDATES_ROUTE}>
              О продукте
            </NavLink>
          </Nav>
          {!!localStorage.getItem('token') ? (
            <Nav style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
              {user.user.role === 'ADMIN' && (
                <Button
                  variant="outline-light"
                  className="mr-2"
                  style={{ borderRadius: '5px', border: '1px solid white', fontSize: '20px', whiteSpace: 'nowrap' }}
                  onClick={() => history(ADMIN_ROUTE)}
                >
                  Админ-панель
                </Button>
              )}
              <Button
                variant="outline-light"
                style={{ marginLeft: '2%', fontSize: '20px' }}
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
              <Button
                variant="outline-light"
                style={{ marginLeft: '2%', fontSize: '20px' }}
                onClick={() => history(LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
});

export default NavBar;
