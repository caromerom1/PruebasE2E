# Cypress

## Aplicación Objetivo de pruebas

- Ghost version: 3.41.1

## Tecnologías utilizadas

- Node v14.21.3 & Node v18.16.0

- cypress v12.11.0

## Funcionalidades probadas

- Crear cuenta nueva

- Inicio de sesión

- Crear Post nuevo

- Editar Post

- Editar información del usuario

- Modal de búsqueda

## Guía para la ejecución de pruebas con Cypress

1. En la raíz del repositorio correr ```npm install```

1. Correr el comando ```npm run cypress:open``` el cual abrirá un navegador de chrome.

1. Dar click en el menú E2E testing

1. Dar click en Start E2E Testing in Chrome (esto abrirá cypress en el proyecto)

1. En el menú de Specs se encuentran las funcionalidades con sus pruebas correspondientes (cada escenario de prueba está definido por separado en el código)

1. Ejecutar ghost de forma local en el puerto 2368 (si se quiere otro puerto o la url de ghost es distinta, modificar el valor en el archivo ```cypress.config.js```)

1. Es importante tener en cuenta que, para el correcto funcionamiento de las pruebas, no se debe tener creado ningún usuario. Para esto, se puede ejecutar el siguiente comando desde el directorio de la aplicación ghost ```rm content/data/ghost-local.db```

1. Por último, es importante seleccionar primero los escenarios de pruebas de creación (create) para que los demás escenarios se ejecuten de forma exitosa, de lo contrario, es necesario ejecutar el comando del punto anterior seguido del comando ```ghost restart```
