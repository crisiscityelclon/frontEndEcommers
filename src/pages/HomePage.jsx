
import { getAllProducts } from "../api/products.api";
import { useEffect, useState } from "react";
import {Container, Grid} from '@mui/material';
import Feed from "../components/Feed";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (param) => {
    getAllProducts(param).then((res) => {
      setProducts(res.data);
    });
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product, idx) => (
          <Grid item key = {idx} xs={12} sm={6} md={4} lg={3}>
            <Feed product={product}/>
      </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
