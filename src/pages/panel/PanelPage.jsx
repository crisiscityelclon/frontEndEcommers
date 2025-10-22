import { getAllProducts } from "../../api/products.api";
import { useEffect, useState } from "react";
import {
  Container,
  TableRow,
  Avatar,
  Classes,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import Loader from "../../components/Loader";
import FormProduct from "../../components/FormProduct";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Edit";
import { removeProduct } from "../../api/products.api";

function HomePagePanel() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false); //controlar el popup del formulario

  const [product, setProduct] = useState({
    name: "",
    catalog: "",
    image: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleClickOpen = () => {
    setProduct({
            name: '',
            catalog: '',
            image: '',
            description: '',
            price: 0,
            stock: 0
        })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (param) => {
    setLoad(true);
    getAllProducts(param).then((response) => {
      setProducts(response.data);
      setLoad(false);
    });
  };

  const handleRemoveItem = (id) => {
    removeProduct(id)
      .then((response) => {
        if (response) {
           handleClose();
          fetchData();
        }
      })
      .catch((error) => {
        alert(error);
         handleClose();
      });
  };

  const handleUpdateItem = (item) => {
setProduct(item);
        setOpen(true);
  };

  return (
    <Container>
      <FormProduct
        product={product}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        open={open}
        fetchData={fetchData}
      ></FormProduct>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Catalogo</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {" "}
                  <Avatar alt="Product Image" src={row.image} />
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "800" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.catalog}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="inherit"
                    aria-label="Editar"
                    onClick={() => handleUpdateItem(row)}
                  >
                    <UpdateIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Eliminar"
                    onClick={() => handleRemoveItem(row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <br />
        <br />
      </TableContainer>
    </Container>
  );
}

export default HomePagePanel;
