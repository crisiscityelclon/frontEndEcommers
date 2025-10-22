import React from 'react';
import { Card, CardContent, CardHeader,IconButton, Typography,Tooltip, CardMedia } from '@mui/material';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Feed(props) {
    const { addToCart } = useCart();

    return (
        <div style={style.feed}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={props.product.name}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.product.image ? props.product.image : 'https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg'}
                    alt=""
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.product.description}
                    </Typography>
                    <p>$ {props.product.price}</p>
                    <p>{props.product.catalog ? props.product.catalog : 'Sin categoría'}</p>
                    <Tooltip title="Agregar al carrito" arrow>
                        <IconButton onClick={() => addToCart(props.product)} color="primary" aria-label="Agregar al carrito">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                </CardContent>
            </Card>
        </div>
    );
}
const style = {
    feed: {
    }
}
export default Feed;