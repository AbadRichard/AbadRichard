//para el menu del navegador
   $('.item').hover(
                function(){
                    var $this = $(this);
                    expand($this);
                },
                function(){
                    var $this = $(this);
                    collapse($this);
                }
            );
            function expand($elem){
                var angle = 0;
                var t = setInterval(function () {
                    if(angle == 1440){
                        clearInterval(t);
                        return;
                    }
                    angle += 40;
                    $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);
                },10);
                $elem.stop().animate({width:'268px'}, 1000)
                .find('.item_content').fadeIn(400,function(){
                    $(this).find('p').stop(true,true).fadeIn(600);
                });
            }
            function collapse($elem){
                var angle = 1440;
                var t = setInterval(function () {
                    if(angle == 0){
                        clearInterval(t);
                        return;
                    }
                    angle -= 40;
                    $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);
                },10);
                $elem.stop().animate({width:'52px'}, 1000)
                .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
            }
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
