import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ABOUT_US_ROUTE } from "../utils/consts";

const Admin = () => {
    const history = useNavigate()
    return(
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-success"} 
                className="mt-4 p-2" 
                onClick={() => history(ABOUT_US_ROUTE)}
            >
                Обратная связь
            </Button>
        </Container>
    )
}

export default Admin;