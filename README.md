# Pasos para la construcción de una aplicación híbrida
Hangman game for mobile, was developed using web tools like html, css and javascript. This project wants to show how to develope, improve and publish the aplication like an andorid app using cordova.

## Pasos para la creación de una aplicación híbrida  

1. Creación de la estructura básica de un proyecto web. (commit 2)  

 > /--|  
 >  &nbsp;&nbsp;&nbsp;&nbsp;|--/imgs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a)  
 >  &nbsp;&nbsp;&nbsp;&nbsp;|--/js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b)  
 >  &nbsp;&nbsp;&nbsp;&nbsp;|--/css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c)  
 >  &nbsp;&nbsp;&nbsp;&nbsp;index.html (d)  

   - (a) Carpeta donde se guardaran los insumos gráficos (jpg, gif, png, svg)  
   - (b) Carpeta donde se guardaran los archivos de javascript, el archivo base se recomienda llamarlo main.js  
   - (c) Carpeta donde se guardan los archivos para manipular las reglas gráficas, nombre sugerido main.css  
   - (d) Archivo raíz de la aplicación  

2. Instalación ambiente de desarrollo, necesitamos las siguientes herramientas  

    + [Node js] + npm (Node js, lo necesitamos para editar el archivo package.json y npm para descargar paquetes)  
    + [Visual Studio Code] para editar los archivos  
    + [Cordova] Este es un paquete que se instala usando npm  
    + [Android Studio] No usarmeos directamente android studio, pero si muchas herramientas que se instalan cuando se configura esta aplicación. 

3. Instalación de cordova

    ```sh
    npm install -g cordova
    ```

[Node js]:https://nodejs.org/es/
[Visual Studio Code]:https://code.visualstudio.com/
[Cordova]:https://cordova.apache.org/
