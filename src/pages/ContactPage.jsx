import { useEffect, useState } from 'react';
import { TextField, Button, AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';

const ContactPage = () => {
    const [contact, setContact] = useState({
        name: '',
        lastanme: '',
        email: '',
        message: ''
    });


    const handleSubmit = () => {
      
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <h4>Complete su información y envíe su consulta</h4>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth
                    label="Nombre"
                    margin="normal"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Apellido"
                    margin="normal"
                    name="lastanme"
                    value={contact.lastanme}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                />
                <TextField fullWidth
                    label="Mensaje"
                    margin="normal"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                />
                <Button variant='contained' type="submit" sx={{ mt: 2 }}>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default ContactPage;