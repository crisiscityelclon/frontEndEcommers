import { getAllProducts } from '../../api/products.api';
import { useEffect, useState } from 'react';
import { Container, TableRow, Avatar, Classes, Table, TableBody, TableCell, TableHead, TableContainer, Paper } from '@mui/material';
import Loader from '../../components/Loader'
import FormProduct from '../../components/FormProduct';



function HomePagePanel() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data.map((element) => ({
                ...element,
                id: element._id
            }))) //agregamos un atributo nuevo, con el nombre ID
            setLoad(false)
        });
    }

    return (
        <Container>
            <FormProduct fetchData={fetchData}></FormProduct>
            <br/>
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>  <Avatar alt="Product Image" src={row.image} /></TableCell>
                                <TableCell sx={{fontWeight:'800'}} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">$ {row.price}</TableCell>
                                <TableCell align="right">{row.catalog}</TableCell>
                                <TableCell align="right">

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default HomePagePanel;