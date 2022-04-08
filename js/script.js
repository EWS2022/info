let navLinks = document.querySelector('.nav__links');
let hamburger = document.querySelector('.hamburger');
let navLinksA = document.querySelectorAll('.nav__links_a');
let navLinks1 = document.querySelector('#one');
let navLinks2 = document.querySelector('#two');
console.log(navLinksA);
hamburger.onclick = function(){
	hamburger.classList.toggle('hamburger_active');
	navLinks.classList.toggle('nav__links_active');
}

navLinks1.onclick = function(){
	hamburger.classList.remove('hamburger_active');
	navLinks.classList.remove('nav__links_active');
}



for (let i = 0; i < navLinksA.length;i++) {
	navLinksA[i].onclick = function(){
		hamburger.classList.remove('hamburger_active');
		navLinks.classList.remove('nav__links_active');
	}
}

let formIframe = document.querySelector('iframe');
let formWrapper = document.querySelector('.form__wrapper');
formIframe.onload = function(){
	formWrapper.classList.add('form__wrapper_active');
	setTimeout(()=> {
		document.forms.order.reset();
		formWrapper.classList.remove('form__wrapper_active');
	}, 3000);
}
