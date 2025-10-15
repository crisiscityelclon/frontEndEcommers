import { getAllProducts } from "../api/products.api";
import { useEffect, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Loader from "../components/Loader";
import Feed from "../components/Feed";



function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

const handlerFilter = () => {
  searchTerm ? fetchData(searchTerm) : fetchData();
}

  const fetchData = (param) => {
    setLoad(true);
    getAllProducts(param).then((res) => {
      setProducts(res.data);
      setLoad(false);
    });
  };

  return (
    <Container >
      <TextField 
          placeholder="Buscar..."
          value={searchTerm}
          variant="standard"
          onChange={(e)=>setSearchTerm(e.target.value)}
      ></TextField>
      <Button onClick={handlerFilter} variant="outlined" startIcon={<SearchIcon/>}> Buscar </Button>
     {load?
          <Loader/> :
          <Grid container spacing={2}>
            {products.map((product, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                <Feed product={product} />
              </Grid>
          ))}
        </Grid>}
      <div style={{ marginBottom: 100 }}></div>
    </Container>
  );
}

export default HomePage;
