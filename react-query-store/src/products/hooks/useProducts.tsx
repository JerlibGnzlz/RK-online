import { useQuery } from "@tanstack/react-query"
import { productActions } from ".."


interface OPtions {
    filterKey?: string
}


export const useProducts = ({ filterKey }: OPtions) => {

    const { data: products = [], isLoading, isError, error, isFetching } = useQuery({
        queryKey: ['products', { filterKey }],
        queryFn: () => productActions.getProducts({ filterKey }),
        staleTime: 1000 * 60 * 60,
    })


    return {
        error,
        products,
        isLoading,
        isError,
        isFetching
    }


}
