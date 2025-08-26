import { ProductList } from ".."
import { useProducts } from "../hooks/useProducts"
import { Products } from '../interfaces/productos';


export const CompleteListPage = () => {

  const { products, isLoading } = useProducts({})


  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && <p>Cargando...</p>}

      <ProductList products={products} />

    </div>
  )
}