$(document).ready(function () {

	$('.feedback').click(function () {
		$('.popup-window').removeClass('hidden');
	});
	$('.close-popup').click(function () {
		$('.popup-window').addClass('hidden');
	});
	$('body').click(function (evt) {
		if ((!evt.target.closest('.popup-window')) && (!evt.target.closest('.feedback'))) {
			$('.popup-window').addClass('hidden');
		}
	});
	$('a').click(function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700);
		return false;
	});

	$('.reviews_slider').bxSlider({
		pager: false,
		adaptiveHeight: true,
		nextText: '',
		prevText: ''
	});
	ingredSlider = $('.slider_ingred').bxSlider();
	reviewSlider = $('.slider_review').bxSlider();
	var mobSliderConfig = {
		minSlides: 1,
		maxSlides: 1,
		adaptiveHeight: true,
		controls: true,
		pager: false,
		nextText: '',
		prevText: ''
	};

	function bxslider() {
		var width = window.innerWidth;
		if (width < 768) {
			ingredSlider.reloadSlider(mobSliderConfig);
			reviewSlider.reloadSlider(mobSliderConfig);
		} else {
			ingredSlider.destroySlider();
			reviewSlider.destroySlider();
		}
	}
	bxslider();
	var resizeId;
	$(window).on('load', function () {
		$(this).resize()
	});
	$(window).resize(function () {
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 300);
	});

	function doneResizing() {
		clearTimeout(resizeId);
		bxslider();
	}

	$('.accordion_container .accordion:first-child .accordion_title').toggleClass('active');
	$('.accordion_container .accordion:first-child .accordion_body').css("display", "block");

	$('.accordion_title').on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		if ($this.next().hasClass('show') || $this.hasClass('active')) {
			$this.next().removeClass('show');
			$this.removeClass('active');
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find('.accordion .accordion_body').removeClass('show');
			$this.parent().parent().find('.accordion .accordion_body').slideUp(350);
			$this.parent().parent().find('.accordion .accordion_title').removeClass('active');
			$this.toggleClass('active');
			$this.next().toggleClass('show');
			$this.next().slideToggle(350);
		}
	});

	(function (m, e, t, r, i, k, a) {
		m[i] = m[i] || function () {
			(m[i].a = m[i].a || []).push(arguments)
		};
		m[i].l = 1 * new Date();
		k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
	(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
	ym(69489529, "init", {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true,
		webvisor: true
	});

});