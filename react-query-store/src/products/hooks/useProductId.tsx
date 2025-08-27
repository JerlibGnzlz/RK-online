import { useQuery } from "@tanstack/react-query"
import { productActions } from ".."


interface OPtions {
    id: number
}


export const useProductId = ({ id }: OPtions) => {

    const { data: product = [], isLoading, isError, error, isFetching } = useQuery({
        queryKey: ['products', { id }],
        queryFn: () => productActions.getProductId(id),
        staleTime: 1000 * 60 * 60,
    })


    return {
        error,
        product,
        isLoading,
        isError,
        isFetching
    }


}
