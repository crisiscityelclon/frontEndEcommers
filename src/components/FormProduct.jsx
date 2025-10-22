import { useEffect, useState } from "react";
import { Skeleton, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  TextField,
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { createProduct, updateProduct } from "../api/products.api";

function FormProduct(props) {
  const [product, setProduct] = useState({
    name: "",
    catalog: "",
    image: "",
    description: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product._id !== undefined) {
        updateProduct(product._id, product).then((response) => {
          if (response.data) {
            props.handleClose();
            props.fetchData();
          }
        }).catch((error) => {
          alert(error);
          props.handleClose();
        });
    } else {
      createProduct(product)
        .then((response) => {
          if (response.data) {
            props.handleClose();
            props.fetchData();
          }
        })
        .catch((error) => {
          alert(error);
          props.handleClose();
        });
    }
  };

  return (
    <Box>
      <Button variant="outlined" onClick={props.handleClickOpen}>
        Nuevo Producto
      </Button>
      <Dialog open={props.open} onClose={props.handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            {"Crear nuevo Producto"}
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Nombre"
              margin="normal"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Descripción"
              margin="normal"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Imagen URL"
              margin="normal"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Precio"
              margin="normal"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              type={"number"}
            />
            <TextField
              fullWidth
              label="Stock"
              margin="normal"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              type={"number"}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>Cancelar</Button>
            <Button type="submit" autoFocus>
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default FormProduct;
