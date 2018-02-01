/*
	La nav fonctionne sans JS (elle est juste moins sympa).
	Ce code contrôle l'url, va d'une section à une autre avec animation, ajoute un bouton "goTop".
	Ce code ne se sert que des éléments ayant un data-name. La valeur de data-name doit correspondre à l'identifiant de la section adéquate et au à href (moins le préfixe #). Le ul parent de la liste doit avoir l'id "topNav".
*/

//https://stackoverflow.com/a/26808520
window.requestAnimFrame = (function() {
	return  window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60)
		}
	}
)();

let transBox = ['.work-one', '.work-two', '.work-three'];

function scrollToY(scrollTargetY, speed, easing) {
	// scrollTargetY: the target scrollY property of the window
	// speed: time in pixels per second
	// easing: easing equation to use
	window.removeEventListener('scroll', myScroll)
	var
		scrollY = window.scrollY || document.documentElement.scrollTop,
		scrollTargetY = scrollTargetY || 0,
		speed = speed || 2000,
		easing = easing || 'easeInOutQuint',
		currentTime = 0

	// min time .1, max time .8 seconds
	let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8))

	// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	var easingEquations = {
			easeOutSine: function (pos) {
				return Math.sin(pos * (Math.PI / 2))
			},
			easeInOutSine: function (pos) {
				return (-0.5 * (Math.cos(Math.PI * pos) - 1))
			},
			easeInOutQuint: function (pos) {
				if ((pos /= 0.5) < 1) {
					return 0.5 * Math.pow(pos, 5)
				}
				return 0.5 * (Math.pow((pos - 2), 5) + 2)
			}
		}

	// add animation loop
	function tick() {
		currentTime += 1 / 60

		var p = currentTime / time;
		var t = easingEquations[easing](p)

		if (p < 1) {
			requestAnimFrame(tick);

			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
		} else {
			window.scrollTo(0, scrollTargetY)
			window.addEventListener('scroll', myScroll, false)
			myScroll()
		}
	}

	// call it once to get started
	tick()
}

function easeInOut(currentTime, start, change, duration) {
	currentTime /= duration / 2;
	if (currentTime < 1) {
		return change / 2 * currentTime * currentTime + start
	}
	currentTime --
	return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
}

function getScrollMaxY(){
	var innerh;
	if (window.innerHeight){
		innerh = window.innerHeight;
	}else{
		innerh = document.body.clientHeight;
	}
	if (window.innerHeight && window.scrollMaxY){
		// Firefox
		yWithScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){
		// all but Explorer Mac
		yWithScroll = document.body.scrollHeight;
	} else {
		// works in Explorer 6 Strict, Mozilla (not FF) and Safari
		yWithScroll = document.body.offsetHeight;
	}
	return yWithScroll-innerh;
}

function myScroll () {
	goTop.style.visibility = window.pageYOffset < 10 ? 'hidden' : 'visible'
	for (let elt of elts) { elt.a.classList.remove('active') }
	for (let elt of elts) {
		if (window.pageYOffset >= elt.y && window.pageYOffset !== getScrollMaxY()) {
			elt.a.classList.add('active')
			break
		}
	}
	if (window.pageYOffset === getScrollMaxY()) {
		elts[0].a.classList.add('active')
	}

	parallaxImg();
	showTransition();
}

function showTransition() {
	for (let t of transBox) {
		let elt = document.querySelector(t);

		var eltY = elt.offsetTop;
		var winY = document.documentElement.scrollTop;
		var winH = window.innerHeight;
		var winBottom = winY + winH;

		if (winBottom < eltY || winY > eltY) {
			elt.classList.remove('trans-hidden');
		}
	}
}

function parallaxImg() {
	let img = document.querySelector('.img-parallax');
	let parent = document.querySelector('#howItWorks');

	var imgY = parent.offsetTop;
	var winY = document.documentElement.scrollTop;
	var winH = window.innerHeight;
	var parentH = parent.clientHeight;

	var speed = 1;

	// The next pixel to show on screen
	var winBottom = winY + winH;

	// If block is shown on screen
	if (winBottom > imgY && winY < imgY + parentH) {
		// Number of pixels shown after block appear
		var imgBottom = ((winBottom - imgY) * speed);
		// Max number of pixels until block disappear
		var imgTop = winH + parentH;
		// Porcentage between start showing until disappearing
		var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
	}
	img.style.top = imgPercent + '%';
	img.style.transform = 'translate(-50%, -' + imgPercent + '%)';
}

function drawHome () {
	// DOMhome.style.height = `${window.innerHeight} px`
	// DOMhome.children[0].style.marginTop = ((window.innerHeight - DOMheader.offsetHeight)/5) - (DOMhome.children[0].offsetHeight/5) + DOMheader.offsetHeight + 'px'
	DOMhome.children[0].style.left = window.innerWidth/2 - (DOMhome.children[0].offsetWidth/2) - 7.5 + 'px'
}

function menu () {
	elts = []
	for (let a of [... document.querySelectorAll('[data-name]')]) {
		a.addEventListener('click', function (e) {
			e.preventDefault()
			for (let elt of elts) {
				if (elt.a === this) {
					scrollToY(elt.y, 1000)
					break
				}
			}
			myScroll()
		}, false)
		section = document.getElementById(a.getAttribute('data-name'))
		a.href = urlBase
		elts.push({a: a, y: parseInt(section.getBoundingClientRect().top) - DOMheader.offsetHeight})
	}
	elts.reverse()
	myScroll()
}

const
	// pour #home
	DOMheader = document.getElementById('header'),
	DOMhome = document.getElementById('home'),
	DOMshapes = document.getElementById('shapes'),
	// pour nav
	topNav = document.getElementById('topNav'),
	urlBase = window.location.href.replace(/^(.*?)#(.*?)$/g, '$1'),
	urlSection = window.location.href.replace(/^(.*?)#(.*?)$/g, '$2')
	goTop = document.createElement('div')

let elts = [], a, section

// bouton goTop
goTop.id = 'goTop'
goTop.className = 'goTop'
document.body.appendChild(goTop)
goTop.addEventListener('click', function () {
	scrollToY(0, 1000)
	myScroll()
}, false)

window.addEventListener('scroll', myScroll, false)

window.addEventListener('resize', function () {
	drawHome()
	location.reload(true)
}, false)

window.onbeforeunload = function () {
	window.scrollTo(0,0);
};
drawHome()
menu()
