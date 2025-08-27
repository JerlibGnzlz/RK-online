import { useParams } from "react-router-dom"
import { useProductId } from "../hooks/useProductId"
import { ProductCard } from "../components/ProductCard"



// export const CompleteListPage = (): Products => {
export const ProductById = () => {

    const { id } = useParams()

    const { product, isLoading } = useProductId({ id: +id! })

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Producto</h1>

            {isLoading && <p>Cargando...</p>}
            {
                product && !Array.isArray(product) && (<ProductCard product={product} fullDescripcion />)
            }
        </div>
    )
}