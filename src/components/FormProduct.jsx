import { useEffect, useState } from 'react';
import { Skeleton, Box } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { createProduct } from '../api/products.api';

function FormProduct(props) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        catalog: '',
        image: '',
        description: '',
        price: 0,
        stock: 0
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product).then((response) => {
            if (response.data) {
                setOpen(false);
                props.fetchData()
            }
        }).catch((error) => {
            alert(error);
            setOpen(false);
        });  
      
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };


    return (
        <Box>
            <Button variant="outlined" onClick={handleClickOpen}>
                Nuevo Producto
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="alert-dialog-title">
                        {"Crear nuevo Producto"}
                    </DialogTitle>
                    <DialogContent>

                        <TextField fullWidth
                            label="Nombre"
                            margin="normal"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField fullWidth
                            label="Descripción"
                            margin="normal"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                        <TextField fullWidth
                            label="Imagen URL"
                            margin="normal"
                            name="image"
                            value={product.image}
                            onChange={handleChange}

                        />
                        <TextField fullWidth
                            label="Precio"
                            margin="normal"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                            type={'number'}
                        />
                        <TextField fullWidth
                            label="Stock"
                            margin="normal"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            type={'number'}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type='submit' autoFocus>
                            Guardar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
}

export default FormProduct;