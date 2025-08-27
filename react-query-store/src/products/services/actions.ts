import { productApi } from "../api/productsApi";
import { Product } from "../interfaces/productos";



interface GetProductsOptions {
    filterKey?: string
}


const sleep = (seconds: number) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {

    await sleep(2);

    const filteredUrl = filterKey ? `category=${filterKey}` : '';

    const { data } = await productApi.get<Product[]>(filteredUrl ? `/products?${filteredUrl}` : '/products');

    return data;
};



export const getProductId = async (id: number): Promise<Product> => {

    // await sleep(2);

    const { data } = await productApi.get<Product>(`/products/${id}`);

    return data;
};