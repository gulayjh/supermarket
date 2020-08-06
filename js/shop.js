

function setValue(price) {
	document.getElementById('price_input').value = price;
	
}

function addtocart() {
	var count = document.getElementById('number').value;
	var cartcount = document.getElementById('cart_count').innerHTML;
	var cart = document.getElementById('cart_count');
	cart.innerHTML = parseInt(cartcount) + parseInt(count);
}

function calculate() {
	var count = document.getElementById('number').value;
	var price = document.getElementById('price_input').value;
	document.getElementById('price').innerHTML = parseFloat(price) * parseFloat(count);
}

jQuery(function ($) {
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});

	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');

		if (winWidth >= 768) {
			dropdown.on('mouseenter', function () {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});

			dropdown.on('mouseleave', function () {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}

	$(window).on('resize', adjustNav);

	adjustNav();
});



