import { productApi } from "../api/productsApi";
import { type Products } from "../interfaces/productos";



interface GetProductsOptions {
    filterKey?: string
}


const sleep = (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: GetProductsOptions) => {

    await sleep(2);

    const filteredUrl = filterKey ? `category=${filterKey}` : '';

    const { data } = await productApi.get<Products[]>(filteredUrl ? `/products?${filteredUrl}` : '/products');

    return data;
};