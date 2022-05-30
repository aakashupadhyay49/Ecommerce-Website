// import React from 'react'
// import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core"
// import {AddShoppingCart} from "@material-ui/icons"
// import useStyles  from "./styles"

// const Product = ({product}) => {
//   const classes=useStyles()
//   return (
//     <Card className={classes.root}>
//       <CardMedia className={classes.media} image={product.image } title={product.name}/>
//       <CardContent>
//         <div className={classes.cardContent}>
//           <Typography  varient='h5' gutterBottom>
//             {product.name}
//           </Typography>

//           <Typography  varient='h5' >
//             {product.price}
//           </Typography>
//         </div>
//         <Typography varient='body2' color='textSecondary'>{product.description}</Typography>
//       </CardContent>

//       <CardActions disableSpacing className={classes.cardActions}>
//         <IconButton arial-label='Add-To-Cart'>
//           <AddShoppingCart/>
//         </IconButton>
//       </CardActions>
//     </Card>
//   )
// }

// export default Product





import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  // console.log(product.name)
  // return <div>Test</div>
  
  const handleAddToCart = () => onAddToCart(product.id, 1)
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"   onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
