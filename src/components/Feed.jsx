import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";

const Feed = (props) => {
  return (
    <div style={style.feed}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={props.product.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.product.image ? props.product.name: 'https://i.pinimg.com/736x/d5/c7/2c/d5c72cb18497d1ea65f29f0857a8c760.jpg'}
          alt=""
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
           {props.product.description}
          </Typography>
           <p>{props.product.price}</p>
           <p>{props.product.catalog}</p>
        </CardContent>
      </Card>
    </div>
  );
};
const style = {
  feed: {},
};
export default Feed;
