import { ProductList } from ".."
import { useProducts } from "../hooks/useProducts"


// export const CompleteListPage = (): Products => {
export const CompleteListPage = (): JSX.Element => {

  const { products, isLoading } = useProducts({})


  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && <p>Cargando...</p>}

      <ProductList products={products} />
    </div>
  )
}