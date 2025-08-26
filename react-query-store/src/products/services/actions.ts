import { productApi } from "../api/productsApi";
import { type Products } from "../interfaces/productos";



interface GetProductsOptions {
    filterKey?: string

}


export const getProducts = async ({ filterKey }: GetProductsOptions) => {


    const { data } = await productApi.get<Products[]>('/products');

    return data;
};