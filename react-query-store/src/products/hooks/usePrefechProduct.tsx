import { useQueryClient } from "@tanstack/react-query"
import { productActions } from "..";

export const usePrefechProduct = () => {

    const queryClient = useQueryClient();


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const preFechProduct = (id: number) => {

        queryClient.prefetchQuery({
            queryKey: ['product', id],
            queryFn: () => productActions.getProductId(id)
        })

    }
    return preFechProduct

}

