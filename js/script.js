$(function(){
	console.log('DOM loaded - you can have fun');
	var carouselList = $('#carousel ul');
	setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide

		function changeSlide(){
			carouselList.animate({'marginLeft':-500}, 800, moveFirstSlide);

			function moveFirstSlide(){
				var firstItem = carouselList.find('li:first');
				var lastItem = carouselList.find('li:last');
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});
			}
		}
});
