//aumetar el largo de la imagen

$(document).ready(function() {
	var borde_es1,borde_es2,borde_es3,borde_es4;
	$('#range_ancho').click(function() { var aumentar_left = $("#range_ancho").val();   $("#img_mover").css({ "margin-left":aumentar_left+"px"});});
	$('#range_altura').click(function(){ var aumentar_top  = $("#range_altura").val();	$("#img_mover").css({ "margin-top":aumentar_top+"px"});});
	$('#range_borde').click(function() { var aumentar_borde= $("#range_borde").val();	$("#img_mover").css({ "border-radius":aumentar_borde+"px "+aumentar_borde+"px "+aumentar_borde+"px "+aumentar_borde+"px "});	});
    $('#range_color').click(function() { var aumentar_color= $("#range_color").val();	$("#img_mover").css({"opacity":aumentar_color});});
    //borde por cada uno
	$('#borde_esa').mousemove(function(){	 borde_es1= $("#borde_esa").val();	$("#img_mover").css({"border-radius":borde_es1+"px "+borde_es2+"px "+borde_es3+"px "+borde_es4+"px "});});
	$('#borde_esb').mousemove(function(){	 borde_es2= $("#borde_esb").val();	$("#img_mover").css({"border-radius":borde_es1+"px "+borde_es2+"px "+borde_es3+"px "+borde_es4+"px "});});	
	$('#borde_esc').mousemove(function(){	 borde_es3= $("#borde_esc").val();	$("#img_mover").css({"border-radius":borde_es1+"px "+borde_es2+"px "+borde_es3+"px "+borde_es4+"px "});});
	$('#borde_esd').mousemove(function(){	 borde_es4= $("#borde_esd").val();	$("#img_mover").css({"border-radius":borde_es1+"px "+borde_es2+"px "+borde_es3+"px "+borde_es4+"px "});});	
	//funciones que devuelven un solo valor
	$('#range_height').click(function() {	var aumentar_hei   = $("#range_height").val();	$("#img_mover").css({ "height":aumentar_hei+"px "});});
	$('#range_width').click(function()  {	var aumentar_wi    = $("#range_width").val();	$("#img_mover").css({ "width":aumentar_wi+"px "});	});
	$('#range_giro').click(function()   {	var aumentar_giro  = $("#range_giro").val();	$("#img_mover").css({ "transform":"rotate("+aumentar_giro+"deg) "});});
	$('#range_width_height').click(function(){var aumentar_giro= $("#range_width_height").val();		$("#img_mover").css({ "width":aumentar_giro+"px ","height":aumentar_giro+"px "});	});
});//fin del ready
$(document).ready(function() {
$('.ajax_menup a').click(function(){
	var url=$(this).attr("href");
      $('.contenedor_order_img').load(url+" .llevar_contenido");
return false;
});

});
//optener valor del range input
$(document).on('input change', '#range_ancho', function()   {   $('#pegar_left').html( $(this).val() );});
$(document).on('input change', '#range_altura', function()  {   $('#pegar_top').html( $(this).val() );});
$(document).on('input change', '#range_width', function()   {   $('.pbtnw').html( $(this).val() );});
$(document).on('input change', '#range_height', function()  {   $('.pbtnh').html( $(this).val() );});
$(document).on('input change', '#range_width_height', function(){$('.pbtnwh').html( $(this).val() );});
$(document).on('input change', '#range_borde', function()   {   $('.pbtnborde').html( $(this).val() );});
$(document).on('input change', '#range_giro', function()    {   $('.pbtnG').html( $(this).val() );});
$(document).on('input change', '#range_color', function()   {   $('#pbtnOp').html( $(this).val() );});

$(document).on('input change', '#borde_esa', function() { $('.pbtna').html( $(this).val() );});
$(document).on('input change', '#borde_esb', function() { $('.pbtnb').html( $(this).val() );});
$(document).on('input change', '#borde_esc', function() { $('.pbtnc').html( $(this).val() );});
$(document).on('input change', '#borde_esd', function() { $('.pbtnd').html( $(this).val() );});






