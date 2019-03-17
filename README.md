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
    + [Git bash] Para usar git y poder escribir comandos básicos de unix en linux
    + [Genymotion] emulador para probar las aplicaciones en el escritorio, esta optimizado y funciona mejor que el que trae android studio

3. Instalación de cordova

    ```sh
    npm install -g cordova
    ```
4. Crear el archivo .gitignore e inserta la siguiente línea

    > /node_modules

5. Mover el proyecto a una carpeta temporal para instalar el sistemas de directorios base de cordova

    ```sh
    mkdir temp
    mv css temp
    mv js temp
    mv imgs temp
    mv index.html temp
    ```
6. Crear proyecto de cordova



[Node js]:https://nodejs.org/es/
[Visual Studio Code]:https://code.visualstudio.com/
[Cordova]:https://cordova.apache.org/
[Android Studio]:https://developer.android.com/studio/?hl=es-419
[Git bash]:https://git-scm.com/downloads
[Genymotion]:https://www.genymotion.com/fun-zone/
