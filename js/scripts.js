

//Page Preloader
var pagePreloader = document.querySelector('.preloader');
pagePreloader.classList.add('heart_out');

var helloWord = document.querySelector('.topb');

setTimeout(function() {
    pagePreloader.style.display = 'none';
    helloWord.style.display = 'revert';

}, 4000);

