import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Product, productActions } from "..";

export const useProductMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: (data) => {
            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: data.category }],
                (oldData) => [...(oldData || []), data]
            )
        },
        onError: (error) => {
            console.log(error.message)

        },

    });

    return mutation
}

