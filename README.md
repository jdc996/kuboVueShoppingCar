# kubo-front-vue
Front de la prueba practica carrito de compras de kubo 
## Requisitos

-Tener una pagina de listado de productos, donde cada ítem tiene como contenido, imagen, 
nombre del producto, descripción y precio. 
-En la pagina de listado de producto, debe existir una opción que permita filtrar los productos por categoría seguí el filtro aplicado recargando la lista y una opción para quitar los filtros.
-En cada item debe existir una opción de agregar el carrito indicando la cantidad del producto. 4. Debe existir una ventana de carro que muestre el carro, el cual debe mostrar los ítems agregados, cantidad agregada que puede ser modificada con un - y + en cada item. 
-Al modificar la cantidad de unidades de un producto, se debe modificar el total de la compra. 6. Hacer la compra, registra en base de datos los productos comprados y total de compra por 
cada orden. 


## Instalacion
Descargar el repositorio  e instalar los paquetes
```
npm install
```

### Despliegue en desarrollo o local

```
npm run serve
```

## Desarrollo
La aplicacion cuenta con una pagina principal donde se listan los productos del carrito de compras:
![Productos](https://kubo-shopping-car-assets.s3.amazonaws.com/images/Screenshot_2020-08-03+kubo-front-vue.png)
Cada producto cuenta con una imagen, un nombre, una descripcion, un precio, y un campo para añadir productos al carrito

En el lado lateral encontramos las categorias de los productos, donde podemos filtrarlos seleccionando una o mas categorias
![categorias](https://kubo-shopping-car-assets.s3.amazonaws.com/images/Screenshot_2020-08-03+kubo-front-vue(1).png)

En el carrito de compras apareceran los productos añadidos, con el subtotal, la cantidad y el precio total.
Cada producto tiene 2 botones para modificar la cantidad del producto
![carrito](https://kubo-shopping-car-assets.s3.amazonaws.com/images/Screenshot_2020-08-03+kubo-front-vue(2).png)

## Url de la aplicacion en Produccion
[Url Produccion](https://ddevkxccucj6t.cloudfront.net`)




