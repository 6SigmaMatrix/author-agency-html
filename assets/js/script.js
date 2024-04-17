

/*var nav = document.getElementById("nav");
function showmenu(){
	nav.style.right= "0";
}
function hideMenu(){
	nav.style.right= "-100%";
}*/


$('#line').click(function(){
	$('#nav').addClass('open');

})
$('#cros').click(function(){
	$('#nav').removeClass('open');
	
})



//Start cart javascript...




var cartpanel= document.querySelector('.cart-wrapper').querySelectorAll('.cart-inner-wrapper');

cartpanel.forEach(e=>{
	e.addEventListener('mouseover' , function(){
		cartpanel.forEach(box=> box.classList.remove("cart-active"))
		this.classList.add("cart-active")
	})
})