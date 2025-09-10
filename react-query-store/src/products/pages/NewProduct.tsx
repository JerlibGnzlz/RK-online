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
  const productMutation = useProductMutation();

  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      title: "Jean Jacket",
      price: 109.95,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...",
      category: "men's clothing",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    productMutation.mutate(data);
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex justify-around items-start">

          <div className="flex-col w-[500px] space-y-4">

            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  data-testid="product-title"
                  value={field.value}
                  onChange={field.onChange}
                  type="text"
                  label="Titulo del producto"
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  data-testid="product-category"
                  value={field.value}
                  onChange={field.onChange}
                  type="text"
                  label="Categoria del producto"
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  data-testid="product-price"
                  value={field.value?.toString()}
                  onChange={(ev) => field.onChange(+ev.target.value)}
                  type="number"
                  label="Precio del producto"
                />
              )}
            />

            <Controller
              name="image"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  data-testid="product-image"
                  value={field.value}
                  onChange={field.onChange}
                  type="url"
                  label="Url del producto"
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  data-testid="product-description"
                  value={field.value}
                  onChange={field.onChange}
                  label="Descripcion del producto"
                />
              )}
            />

            <Button
              type="submit"
              color="primary"
              data-testid="submit-btn"
              isDisabled={productMutation.isPending}
            >
              {productMutation.isPending ? "Cargando..." : "Crear Producto"}
            </Button>
          </div>

          <div
            className="bg-white rounded-2xl p-10 flex items-center justify-center"
            style={{ width: "500px", height: "600px" }}
          >
            <Image
              src={getValues().image}
              alt="Producto"
              width={500}
              height={600}
              className="rounded-xl bg-white"
            />
          </div>

        </div>
      </form>
    </div>
  );
};
