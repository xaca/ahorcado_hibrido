$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
  
});

$(document).ready(function() {  
	 //setLogo();
	//crearLetras();
	//pintarLetras(seleccionarPalabra(5,categorias));
                
});

var letras = new Array();
var categoriaActual = 0;
var palabraActual = "";
var lnPalabraActual = 0;
var errores = 0;
var aciertos = 0;
var puntajeHumano = 0;
var puntajePC = 0;
var puntos = 1;
var nombreCategoria = "";
var hangman = new Array();//Información de las posiciones de la imagen del ahorcado
var catname = ["Deportes","Grupo de rock","Pa&iacute;s","Fruta","Pel&iacute;cula","Actor"];
var categorias = new Array();//Asociar una imagen a cada categoria
categorias[0] = ["futbol","baloncesto","natacion","boxeo","billar","tenis de mesa","ciclismo","balonmano","voleibol","lucha"];//Deportes
categorias[1] = ["blur","nirvana","metallica","cafe tacuba","soda estereo", "aterciopelados","molotov","dos minutos","caifanes","bajo fondo"];//Grupos de rock
categorias[2] = ["noruega","grecia","holanda","españa","nicaragua","honduras","rumania","kuwait","puerto rico","polonia"];//Paises//["colombia","peru","ecuador","argentina","brasil","francia","china","belgica","alemania","canada"];//Paises
categorias[3] = ["mango","papaya","cereza","fresa","sandia","granadilla","coco","guayaba","kiwi","uchuva"];//Frutas
categorias[4] = ["matrix","snatch","rambo","terminator","los increibles","dumbo","madmax","cobra","shrek","hercules"];//Peliculas
categorias[5] = ["al pacino","arnold schwarzenegger","sylvester stallone","adam sandler","uma thurman","monica bellucci","jim carrey","vincent cassel","brad pitt","angelina jolie"];//Actores

function seleccionarPalabra(cat,array){
	return array[cat][parseInt(Math.random()*array.length)];
}

function longitudPalabra(str){
	var cont = 0;
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)!=" ")
			cont++;
	}
	return cont;
}

function initGame(cat){
	setHangMan();//llamar solo una vez
	crearLetras();
	palabraActual = "";
	categoriaActual = cat;
	errores = aciertos = 0;
	nombreCategoria = catname[cat];
	pintarLetras(seleccionarPalabra(cat,categorias));
	location.href="#game";
	$("#hangman").css("background-position",hangman[0]+"px");
	$("#puntaje").html("<p>Jugador:"+puntajeHumano+" | PC:"+puntajePC+" <br>Categoria Actual:"+nombreCategoria+"<p>");
}

function setHangMan(){
	var ancho = 30;//120;
	var oportunidades = 7;
	for(var i=0;i<oportunidades;i++)
	{
		hangman[i] = -ancho*i;
	}
}

function pintarLetras(str){

	var temp = "";
	palabraActual = str;
	lnPalabraActual = longitudPalabra(str);
	
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)!=" ")
			temp += "<span id='letra"+i+"' class='letra' />";
		else
			temp += "&nbsp;";
	}
	//$("#palabra").html(temp+" <br /> "+palabraActual);
	$("#palabra").html(temp);
}

function validarLetra(letra){
	//alert(letra);
	var flag = false;
	for(var i=0;i<palabraActual.length;i++)
	{
		if(palabraActual.charAt(i)==letra.toLowerCase())
		{
			//Falta puntear
			flag = true;
			$("#letra"+i).css("background-position","-"+letras[letra.toUpperCase()]+"px -60px");
			$("#l"+letra).css("background-position","-"+letras[letra.toUpperCase()]+"px -20px");
			$("#l"+letra).css("cursor","auto");
			$("#l"+letra).prop("onclick", null);
			if(++aciertos == lnPalabraActual)
			{
				alert("Gan\u00f3");
				puntajeHumano+=puntos;
				initGame(categoriaActual);
			}
			
		}
	}
	if(!flag)
	{
		//Falta descontar puntos  y mostrar avance ahorcado
		
		$("#hangman").css("background-position",hangman[errores++]+"px");
		$("#l"+letra).css("background-position","-"+letras[letra.toUpperCase()]+"px -40px");
		$("#l"+letra).css("cursor","auto");
		$("#l"+letra).prop("onclick", null);
		if(errores==hangman.length)
		{
			alert("perdi\u00f3");
			puntajePC+=puntos;
			initGame(categoriaActual);
		}
	}

	$("#puntaje").html("<p>Jugador:"+puntajeHumano+" | PC:"+puntajePC+"<br> Categoria Actual:"+nombreCategoria+"<p>");
	//$("#debug").val(aciertos+" "+lnPalabraActual);
}

function cerrarVentana(){
	//alert("WTF!!!");
	$("#hangman").hide();

}

function abrirVentana(){
	//alert("WTF!!!");
	$("#hangman").slideDown();
}

function crearLetras(){
	var temp = "<table><tr>";
	var valor = "";
	var cont=1;
	var contletras = 0;
	var size = 20; //tamaño tile
	var cols = 9;
	
	for(var i=65;i<=90;i++)
	{
		valor = String.fromCharCode(i);	
		temp += "<td><span id='l"+valor+"' onClick='validarLetra(\""+valor+"\");' class='letra' style='background-position:-"+contletras*size+"px 0px"+"; cursor:pointer;' /></span><td/>";
		
		letras[valor] =contletras*size;
		contletras++;
		
		if(i==78)
		{
			valor = String.fromCharCode(209);	
			temp += "<td><span id='l"+valor+"' onClick='validarLetra(\""+valor+"\");' class='letra' style='background-position:-"+contletras*size+"px 0px"+"; cursor:pointer;' /></span><td/>";
			letras[valor] =contletras*size;
			contletras++;
			cont++;
		}
			
		if(cont++==cols)
		{
			temp += "</tr><tr>";
			cont = 1;
		}
		
		
	}
	temp +=  "</table>";
	$("#teclado").html(temp);
}

//setLogo();