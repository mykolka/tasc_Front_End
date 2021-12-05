
//ховаємо/показуємо пошук
let serchBtn = document.querySelector(".search"),
	closeInput = document.querySelector('.close__input'),
	serchArea = document.querySelector(".input__area");

serchBtn.onclick = function() {
	serchBtn.style.display = "none";
	serchArea.style.display = "block";
}

closeInput.onclick = function() {
	serchArea.style.display = "none";
	serchBtn.style.display = "block";
}


//ховаємо/показуємо менюшку
let hideMenu = document.querySelector('.hide__menu'),
	menuBtn = document.querySelector('.menu__btn'),
	closeMenu = document.querySelector('.close__menu');

	menuBtn.onclick = function() {		
		hideMenu.style.display = "block";
	}
	closeMenu.onclick = function() {
		hideMenu.style.display = "none";
		mobiMenu.style.display = "none";
	}



//мобільна кнопка меню
let mobiMenuBtn = document.querySelector('.mobile__menu'),
	mobiMenu = document.querySelector('.mobileMenu'),
	closeMobileMenu = document.querySelector('.coseMobiMenu');


	mobiMenuBtn.onclick = function() {
		mobiMenu.style.display = "block";		
	}

	closeMobileMenu.onclick = function() {
		mobiMenu.style.display = "none";
	}


//слайдер
let items = document.querySelectorAll('.slider__item');
let indecators = document.querySelectorAll('.indecator__item');
let photos = document.querySelectorAll('.slider-item');
let infos = document.querySelectorAll('.more__info');
let currentIndecator = 0;
let currentItem = 0;
let currentFotoItem = 0;
let currentinfo = 0;
let itemInterval = setTimeout(nextItem,100);

function nextItem() {
	goToItem(currentItem+1);
}

function previousItem() {
	goToItem(currentItem-1);
}

function goToItem(n) {
    items[currentItem].className = 'slider__item';
    currentItem = (n+items.length)%items.length;
    items[currentItem].className = 'elect';

	indecators[currentIndecator].className = "indecator__item";
	currentIndecator = (n+indecators.length)%indecators.length;
	indecators[currentIndecator].className = "active";

   	photos[currentFotoItem].className = 'slider-item';
   	currentFotoItem = (n+photos.length)%photos.length;
   	photos[currentFotoItem].className = 'actuale';

   	infos[currentinfo].className = 'more__info';
   	currentinfo = (n+infos.length)%infos.length;
   	infos[currentinfo].className = 'current';
}

let right = document.getElementById('right');
let left = document.getElementById('left');

right.onclick = function() {
nextItem();
};
left.onclick = function() {
previousItem();
};





//кнопка детальніше
btn.onclick = function() {
	var infowindow = document.querySelector('.current');
	infowindow.style.display = "block";
}
//мобільна кнопка детальніше
let moreInfoBtn = document.querySelector('.mobile__btn-deploy');
	
	moreInfoBtn.onclick = function() {
		let carousel = document.createElement("carousel");
		carousel.innerHTML = ` 

		<style>
			.sliderControls{
				position: absolute;
				top: 50vh;
				left: 5vw;
				width: 80vw;
			}
			.current{
				display: block;
			}

		</style>


		<div class="carousel__style">
			<div class="sliderControls">
				<div class="prev" id="left" onclick="previousItem();">
					<div class="prev1"></div>
					<div class="prev2"></div>			
				</div>
				<div class="next" id="right" onclick="nextItem();">
					<div class="next2"></div>
					<div class="next1"></div>
				</div>
			</div>
		</div>
		`;

		document.body.append(carousel);		
	}

function x() {	
	let activated = document.querySelector('.current');
	let controls = document.querySelector(".carousel__style");
	activated.style.display = "none";
	controls.style.display = "none";
}
	
	window.onclick = function(e) {
		let targ = e.target;

		 if(targ !== mobiMenuBtn){
		 	mobiMenu.style.display = "none";		 
		 }		
		 if(targ !== menuBtn){
		 	hideMenu.style.display = "none";
		 }
	}


