import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useProductMutation } from "..";



interface FormInputs {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}



export const NewProduct = () => {

  const productMutation = useProductMutation()

  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      title: "Jean Jacket",
      price: 109.95,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, ",
      category: "men's clothing",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
    productMutation.mutate(data)
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <div className="flex justify-around items-center">

          <div className="flex-col w-[500px]">

            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" type="text" label="Titulo del producto" />
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" type="text" label="Categoria del producto" />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value?.toString()}
                  onChange={(ev) => field.onChange(+ev.target.value)}
                  className="mt-2" type="number" label="Precio del producto" />
              )}
            />

            <Controller
              name="image"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" type="url" label="Url del producto" />
              )}
            />


            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" label="Descripcion del producto" />
              )}
            />


            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="rounded-md p-3 mt-2 bg-gray-800 w-full"
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />


            <br />
            <Button type="submit"
              className="mt-2"
              color="primary"
              isDisabled={productMutation.isPending}
            >
              {productMutation.isPending ? 'Cargando...' : 'Crear Producto'}
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={getValues().image}
              alt="tailwind logo"
              width={500}
              height={600}
              className="rounded-xl p-5 sm:p-0 bg-white"
            />
          </div>

        </div>


      </form>

    </div>
  )
}