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
    + [SDK platform tools] Herramientas adicionales para publicar y probar la aplicación. Asigne la carpeta a las variables de entorno *[Pendiente de realizar manual]* 
    + [Git bash] Para usar git y poder escribir comandos básicos de unix en linux  
    + [Genymotion] emulador para probar las aplicaciones en el escritorio, esta optimizado y funciona mejor que el que trae android studio  
    + Driver del telefono celular andorid que va a usar (Ej. kies de samsung)

3. Instalación de cordova

    ```sh
    npm install -g cordova
    ```
4. Crear el archivo .gitignore e inserta la siguiente línea (No tiene mucha utilidad por el momento pero es una buena practica)

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

    ```sh
    cordova create aplicacion co.edu.proyecto Aplicacion
    ```

7. Mueva el proyecto de cordova a la raíz del proyecto y borre la carpeta aplicacion

    ```sh
    mv aplicacion/* ./
    rm -rf aplicacion
    ```
8. Borre el contenido de la carpeta www

    ```sh
    rm -rf ./www/*
    ```

9. Mueva los archivos de temp para la carpeta www de la nueva estructura de archivos creada y borre la carpeta temp

    ```sh
    mv ./temp/* ./www/
    rm -rf temp
    ```
10. Agregar la plataforma de prueba de android, esto sirve para crear el archivo ejecutable apk.

    ```sh 
    cordova platform add android
    ```

11. Crear el build o sea el ejecutable de android apk

    ```sh 
    cordova build android
    ```

12. Conectar el celular en modo desarrollador y con la opción de USB activada o lanzar el emulador desde genymotion.

13. Validar con la herramienta [adb], si el dispositivo esta en la lista de elementos reconocidos

    ```sh 
    adb devices
    ```

    Cuando el dispositivo esta conectado aparece algo similar a esto:

    #### List od devices attached   
    |           ||                          
    |------------------------------|------------------------------|  
    |192.168.50.101:5555      |      device                       |   

14. Si no aparece el dispositivo en la lista, probar conectando y desconectando el celular o reiniciando el adb

    ```sh 
    adb kill-server
    adb start-server
    ```

## Firma de la aplicación para subirla a google pla developer console

Recuerde que la llave con la cual se firma la aplicación debe ser la misma con la cual se firma siempre durante la vida útil de la aplicación, por tanto debe cuidar muy bien la llave, para poder actualizar la aplicación.

1. Crear la llave para firmar la aplicación, tener en cuenta los siguientes datos:  

> **nombre_almacenamiento_llave.keystore** Nombre del archivo que guardará las llaves  
**alias_de_la_aplicacion** Nombre corto o apodo de la aplicación  
**clave_almacenamiento_llave** Clave del almacen  
**clave_llave** Clave de la llave  

```sh
keytool -genkey -v -keystore nombre_almacenamiento_llave.keystore -alias aplicacion_hibrida -keyalg RSA -keysize 2048 -validity 10000
```

>Recomiendo crear el archivo script.sh y luego ejecutarlo en gitbash asi ./script.sh

 ```sh
    keytool -genkey -v -noprompt \
    -alias alias_de_la_aplicacion \
    -dname "CN=Nombre, OU=Ocupacion, O=Empresa, L=Ciudad, S=Departamento, C=Codigo Zip" \
    -keystore nombre_almacenamiento_llave.keystore \
    -storepass clave_almacenamiento_llave \
    -keypass clave_llave \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000
 ```

2. Crear en la ruta  

> *[ruta projecto]*/platforms/android  

El archivo **release-signing.properties**  

Incluir la siguiente configuración:

    storeFile=ruta_almacen_llaves.keystore  
    storeType=jks  
    keyAlias=alias_de_la_aplicacion  
    keyPassword=clave_llave  
    storePassword=lave_almacenamiento_llave  

3. Crear el apk usando el modo release, así:

```sh
cordova build android --release
```


[Node js]:https://nodejs.org/es/
[Visual Studio Code]:https://code.visualstudio.com/
[Cordova]:https://cordova.apache.org/
[Android Studio]:https://developer.android.com/studio/?hl=es-419
[Git bash]:https://git-scm.com/downloads
[Genymotion]:https://www.genymotion.com/fun-zone/
[SDK platform tools]:https://developer.android.com/studio/releases/platform-tools
[Pendiente de realizar manual]:http://evothings.com/doc/build/cordova-install-windows.html
[adb]:https://www.howtogeek.com/125769/how-to-install-and-use-abd-the-android-debug-bridge-utility/
