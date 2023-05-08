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


