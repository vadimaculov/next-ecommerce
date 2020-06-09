import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Container,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const products = [
    {
        name: 'Product 1',
        price: '$20',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica',
    },
    {
        name: 'Product 2',
        price: '$20',
        description: 'Description',
    },
    {
        name: 'Product 3',
        price: '$20',
        description: 'Description',
    },
    {
        name: 'Product 4',
        price: '$20',
        description: 'Description',
    },
    {
        name: 'Product 5',
        price: '$20',
        description: 'Description',
    },
]

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });

export default () => {
    // const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <h1>Products</h1>

            <Grid container spacing={2}>
                
               
                {products.map((product, index) => {
                    return (
                        <Grid container item xs={12} md={6} lg={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {product.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to bag
                            </Button>
                                <Button size="small" color="primary">
                                    Add to favorites
                            </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};
