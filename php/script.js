$(document).ready(function() {
$('.ajax_menu a').click(function(){
	var url=$(this).attr("href");
      $('.contenedor_java').load(url+" .llevar_contenido_al_contenedor");
return false;
});

});
   //diguja texto en la cabezera
  window.onload= function ()  {
		
		var c = document.getElementById("canvas_body");
		var ctx = c.getContext("2d");

		c.height = window.innerHeight;
		c.width = window.innerWidth;
		var texto_mostrar = "ABAD MAYTA JUAN RICHARD 1994"; //poner texto
		
		texto_mostrar = texto_mostrar.split("");

		var font_size = 13;
		var columns = c.width/font_size; 
		
		var drops = [];
		
		for(var x = 0; x < columns; x++)
			drops[x] = 1; 

		
		function digujar(){
			
			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
			ctx.fillRect(0, 0, c.width, c.height);
			
			ctx.fillStyle = "green"; 
			ctx.font = font_size + "px arial";
			
			for(var i = 0; i < drops.length; i++){
				
				var text = texto_mostrar[Math.floor(Math.random()*texto_mostrar.length)];
				
				ctx.fillText(text, i*font_size, drops[i]*font_size);
				
				
				if(drops[i]*font_size > c.height && Math.random() > 0.975)
					drops[i] = 0;
				    drops[i]++;
			}
		}

		setInterval(digujar, 33);
}
