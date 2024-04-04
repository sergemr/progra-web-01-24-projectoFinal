import React, { useState } from 'react';
import Card from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = async () => {
        console.log("handleSumbit");
        console.log(user);
        console.log(password);

        try{
            const response  = await axios.post("http://localhost:3001/api/v1/login", {
                email: user,
                password: password,
            });
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data));
            //utilizar navigate para redirigir al usuario una vez logeado
        } catch (error) {
            console.error("Login error", error);
            alert("Credenciales invalidas o error de servidor");
        }        
        
    };
    
    return (
        <div>
            <Card sx={{ maxWidth: 375 , margin: "auto"}}>
                <CardContent>
                    <h1>Login</h1>

                    <TextField
                    id="outlined-user-input"
                    onChange={(e) => {setUser(e.target.value)}}
                    label="Correo electronico"
                    variant="outlined"
                    /><br/><br/>

                    <TextField
                    id="outlined-password-input"
                    type="password"
                    onChange={(e) =>  {setPassword(e.target.value)}}
                    label="Contraseña"
                    variant="outlined"
                    /><br/><br/>

                    <Button onClick={handleSumbit} variant="contained">Ingresar</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
