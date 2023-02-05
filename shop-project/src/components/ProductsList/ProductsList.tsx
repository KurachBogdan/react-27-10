import { Grid, Typography } from '@mui/material'
import ProductsListItem from 'components/ProductsList/ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                ProductsList
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList