var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


// Variables
var paleta = $('#paleta');
var grillaPix = $('#grilla-pixeles');
var indicadorColor = $("#indicador-de-color");
var pintarPixel = $("div.pixel");
var colorActual;
var indicador;
var borrarTodo = $("button, #borrar");
var batmanImg = $("img, #batman");
var wonderImg = $("#wonder");
var flashImg = $("#flash");
var invisibleImg = $("#invisible");
var guardarImg = $("#guardar");


// LLAMA A LAS FUNCIONES
$(document).ready(function(){
  paletaDeColores();
  creaGrillaPixel();
  leerColorDePaleta();

});

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

/********************* EVENTOS **************************/
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.css("background-color", colorActual);

  })
);

borrarTodo.click(function(){
  borrar();
});

function cargarImagen(elemento, superheroe){
  elemento.click(function(){
    cargarSuperheroe(superheroe);
  })
}





// EVENTO QUE LEE EL CLICK PRESIONADO EN EL MOUSE Y PINTA

$(document).on("click", ".pixel", function(){
  $(this).css("background-color", indicadorColor.css("background-color"));
}).on("mousedown", ".pixel", function(){
  indicador = 1;
}).on("mouseup", ".pixel", function(){
  indicador = 0;
}).on("mousemove", ".pixel", function() {
  if(indicador == 1) {
    $(this).css("background-color", indicadorColor.css("background-color"));
  }
}).on("drageleave", ".pixel", function(){
  indicador = 0;
});

/********************* FUNCIONES **************************/
// FUNCION QUE CREA DIV Y ASIGNA COLORES 
function paletaDeColores(){
  
  for(let color in nombreColores){
    paleta.append("<div class='color-paleta' id='color' style='background-color:"+nombreColores[color]+"'></div>");   
  }
}

// FUNCION QUE CREA GRILLAS
function creaGrillaPixel(){
  
  for(i = 0; i < 1750 ; i++){
    grillaPix.append("<div class='pixel'></div>");
  }
}

// FUNCION QUE ASIGNA COLOR AL INDICADOR

function leerColorDePaleta(){
   var seleccionarColor = $("div.color-paleta"); 
   seleccionarColor.click(function(){
     var colorSeleccionado = $(this).css('backgroundColor');
     console.log(colorSeleccionado);
     indicadorColor.css("background-color", colorSeleccionado);
  });
}

// FUNCION BORRAR TODO

function borrar() {
  $(".pixel").animate({"background-color":"#ffffff"}, 1000);
}

// Cargar imagen


cargarImagen(batmanImg, batman);
cargarImagen(wonderImg, wonder);
cargarImagen(flashImg, flash);
cargarImagen(invisibleImg, invisible);
guardarImg.click(function () {
  guardarPixelArt()
});




