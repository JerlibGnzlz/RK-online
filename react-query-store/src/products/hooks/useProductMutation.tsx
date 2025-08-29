import { useMutation } from "@tanstack/react-query";
import { productActions } from "..";

export const useProductMutation = () => {

    const mutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: () => {
            console.log("prducto creado");
        },
        onSettled: () => {
            console.log("producto creado");
        }
    });

    return mutation
}

