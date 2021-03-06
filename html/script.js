//para el menu del navegador
$(function() {
                $('#navigation a').stop().animate({'marginLeft':'-85px'},1000);

                $('#navigation > li').hover(
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
                    },
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
                    }
                );
            });
 $(document).ready(function() {
	$('ul li:has(ul)').hover(function(e) {
 		$(this).find('ul').css({display: "block"});
	 },
 	function(e) {
 		$(this).find('ul').css({display: "none"});
 	});
});  
   //diguja texto en la cabezera
 function diguja_texto_cabezera()  {
		
		var c = document.getElementById("canvas_cabezera");
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
			
			ctx.fillStyle = "white"; 
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
