# Kraken

Para llevar a cabo las pruebas en kraken, se reescribieron los features y escenarios en lenguaje Gherkin usando como guía los ejemplos dispuestos en https://thesoftwaredesignlab.github.io/Kraken/
Se tomó como ejemplo también los steps definitions en js.
Para las pruebas, se trabajó en la versión web.

## Aplicación Objetivo de pruebas

- Ghost version: 3.41.1

## Tecnologías utilizadas

- Node v18.15.0

- Kraken v1.0.24

- Cucumber v7.2.1

## Funcionalidades probadas

- Registro en la aplicación

- Búsqueda de publicaciones

- Crear una publicación

- Filtrar las publicaciones

- Crear miembros en la aplicación

## Guía para la ejecución de pruebas con Kraken

1. Primero, en el terminar lanzar el comando ```npm install kraken-node -g```

1. Verificar que todas las dependencias se hayan instalado.

1. Instalar appium con el comando ```npm install -g appium```

1. Instalar localmente kraken-node para que funcione con la versión de cucumber ```npm install kraken-node```

1. Correr los escenarios con ```kraken-node run```

## Listado de funcionalidades

| Funcionalidad | Escenario de Prueba |
| ------------- | ------------- |
| Registro de un usuario en la aplicación.  | Hacer click en Subscribe -> No introducir nada Name -> No introducir nada en Email -> Hacer click en Sign up -> Verificar que se haya enviado correo de registro |
|   | Hacer click en Subscribe -> No introducir nada Name -> Introducir en Email: juan.perez@prueba.com -> Hacer click en Sign up -> Verificar que se haya enviado correo de registro |
|   | Hacer click en Subscribe -> Introducir en Name: Juan Perez -> No introducir nada en Email -> Hacer click en Sign up -> Verificar que se haya enviado correo de registro |
|   | Hacer click en Subscribe -> Introducir en Name: Juan Perez -> Introducir en Email: juan.perez@prueba.com -> Hacer click en Sign up -> Verificar que se haya enviado correo de registro |
| Búsqueda de publciaciones, menciones o autores. | Hacer click en lupa -> Introducir palabra asociada con una publicación no existente -> Verificar que el filtro de la búsqueda se haya arrojado los resultados correspondientes |
|  | Hacer click en lupa -> Introducir palabra asociada con una mención existente -> Verificar que el filtro de la búsqueda se haya arrojado los resultados correspondientes |
|  | Hacer click en lupa -> Introducir palabra asociada con un autor no exsitente -> Verificar que el filtro de la búsqueda se haya arrojado los resultados correspondientes |
|  | Hacer click en lupa -> Introducir palabra asociada con un autor existente -> Verificar que el filtro de la búsqueda se haya arrojado los resultados correspondientes |
| Crear una publicación. | Hacer click en + al lado de Posts -> Introducir en Post title: Publicación Prueba -> Introducir en Begin writing your post... Publicación Prueba -> Hacer click en Publish -> Hacer click en Continue, final review -> Hacer click en Publish post, right now -> Verificar que la publicación se haya realizado |
|  | Hacer click en + al lado de Posts -> Introducir en Post title: Publicación Prueba -> Introducir en Begin writing your post... Publicación Prueba -> Hacer click en Settings -> Introducir palabra en Tags -> Hacer click en Publish -> Hacer click en Continue, final review -> Hacer click en Publish post, right now -> Verificar que la publicación se haya realizado |
|  | Hacer click en + al lado de Posts -> Introducir en Post title: Publicación Prueba -> Introducir en Begin writing your post... Publicación Prueba -> Hacer click en Settings -> Introducir en Post URL: ejemplo -> Hacer click en Publish -> Hacer click en Continue, final review -> Hacer click en Publish post, right now -> Verificar que la publicación se haya realizado |
|  | Hacer click en + al lado de Posts -> Introducir en Post title: Publicación Prueba -> Introducir en Begin writing your post... Publicación Prueba -> Hacer click en Settings -> Seleccionar Members only en Post access -> Hacer click en Publish -> Hacer click en Continue, final review -> Hacer click en Publish post, right now -> Verificar que la publicación se haya realizado |
| Filtrar las publicaciones. | Hacer click en Explore -> Introducir en Search levernews.com -> Verificar que las publicaciones se visualicen de acuerdo al criterio seleccionado |
|  | Hacer click en Explore -> Hacer click en Business -> Verificar que las publicaciones se visualicen de acuerdo al criterio seleccionado |
|  | Hacer click en Explore -> Hacer click en Language -> Seleccionar Español -> Verificar que las publicaciones se visualicen de acuerdo al criterio seleccionado |
|  | Hacer click en Explore -> Hacer click en Sort by -> Seleccionar A-Z -> Verificar que las publicaciones se visualicen de acuerdo al criterio seleccionado |
| Crear miembros de la aplicación. | Hacer click en Members -> Hacer click en New member -> Introducir en Name: Juan Perez -> Introducir en Email: juan.perez@prueba.com -> Hacer click en Save -> Verificar que el nuevo miembro haya sido creado |
|  | Hacer click en Members -> Hacer click en New member -> Introducir en Name: Juan Perez -> Introducir en Email: juan.perez@prueba.com -> Introducir en Labels: Prueba -> Hacer click en Save -> Verificar que el nuevo miembro haya sido creado |
|  | Hacer click en Members -> Hacer click en New member -> Introducir en Name: Juan Perez -> Introducir en Email: juan.perez@prueba.com -> Introducir en Note: Prueba -> Hacer click en Save -> Verificar que el nuevo miembro haya sido creado |
|  | Hacer click en Members -> Hacer click en New member -> Introducir en Name: Juan Perez -> Introducir en Email: juan.perez@prueba.com -> Introducir en Labels: Prueba -> Introducir en Note: Prueba -> Hacer click en Save -> Verificar que el nuevo miembro haya sido creado |
