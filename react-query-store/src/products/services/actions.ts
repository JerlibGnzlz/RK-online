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


    const { data } = await productApi.get<Product>(`/products/${id}`);

    return data;
};

export interface ProductLike {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const createProduct = async (product: ProductLike) => {

    await sleep(2);
    const { data } = await productApi.post<Product>('/product', product);

    return data;
};

