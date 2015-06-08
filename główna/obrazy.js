var obiekty = [ 
	'główna/title_1.jpg',
	'główna/title_2.jpg',
	'główna/title_3.jpg',
	'główna/title_4.jpg',
	'główna/title_5.jpg',
	'główna/title_6.jpg',
	'główna/title_7.jpg',
	'główna/title_8.jpg',
	'główna/title_9.jpg'
	
	
	
	 
]
var licznik =1 ;
var canvas = document.getElementById('canvas').getContext('2d');
var obraz = new Image();
obraz.onload= function (){
canvas.drawImage(obraz,0,0,900,500);
	
}


obraz.src=obiekty[0]; 

var klik = document.getElementById('klik') ;
klik.onclick= function () {
	
	
	if(licznik == obiekty.length  ){
		licznik=0;
		
	}
	else {
		obraz.onload = function () {
			
			canvas.drawImage(obraz, 0,0, 900,500); 
			licznik++;
		}
		obraz.src=obiekty[licznik];
		
	}
	
	
	
}