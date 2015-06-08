 //wartosci stale wykorzystywane w programie
 var c_dlugosc = 600;
 var c_szerokosc = 1050 ;
 var interval;
 
 
 
 
	//uruchomienie animacji przy kliknieciu start 
document.getElementById('start').onclick=inicjalizacja ;



 //inicjalizująca pobieranie canvasu 
 
 function inicjalizacja (){
	student=null;

	//liczymy czas 
	
	var  data = new Date () ;
	

	
	 canvas = document.getElementById('canvas').getContext('2d');
	

	 student = new Student ( 50,550, 7);
		var ileObiektow = document.getElementById('num').value; //liczba obiektow  do animowania   
		console.log(ileObiektow);
		obiekty = []; //tablica przechowująca obiekty
		 	
		
	//tworzymy nowe obiekty
	for (i=0; i<ileObiektow; i++) {
  
    obiekty.push(new Obiekty( 20 + Math.random()*160,  20 + Math.random()*160,Math.round(1 + Math.random()*7),canvas));
	}


	//rozpoczynamy animacje 
	if(interval){
		clearInterval(interval);
		}
	interval = setInterval(function  ( ){
			canvas.clearRect(0,0,c_szerokosc,c_dlugosc);
			student.rys();
			for(i=0; i<obiekty.length;i++ ){
				obiekty[i].ruszaj();
		
				if ( kolizja(student,obiekty[i])){
					console.log  (" kolizja ");
					stop (interval, obiekty, student ,data ); 
			
				};
		
			}
	
		}
	, 50); 
	}

 
 
 //funckja zatrzymujaca grę 
 
 function stop ( interval, obiekty, student  ,data) {
	
	 
	 var data2= new Date ( );
	 var czas = data2-data ;
	 var s = (" Jestes w stanie  uczyć się bez przerwy przed : " + czas/1000 + " sekund. Popraw się ! " );
	 document.getElementById("czas").innerHTML=s;
	 
	 clearInterval(interval); 
	 canvas.clearRect(0,0,c_szerokosc,c_dlugosc);
	var koniec = new Image();
	
	koniec.src = "koniec.jpg";
	koniec.onload = function () { 	canvas.drawImage(koniec, 0,0,c_szerokosc,c_dlugosc);
				
	};

 }
 
 


//klasa obiekty ktore się pojawiają

function Obiekty (x,y,predkosc,canvas){
	this.x = x;
    this.y = y;
    this.predkosc = predkosc;
    this.przesuniecieX = this.predkosc;
    this.przesuniecieY = this.predkosc;
	this.canvas=canvas; 
	//tworzymy tablice sciezek do obrazkow :
	this.tablica_nazw = [
    'obiekty/title_1.png',
    'obiekty/title_2.png',
    'obiekty/title_3.png',
    'obiekty/title_4.png',
    'obiekty/title_5.png',
    'obiekty/title_6.png',
    'obiekty/title_7.png',
    'obiekty/title_8.png',
    'obiekty/title_9.png',
    'obiekty/title_10.png'
		
		
		
		
	]
	
	this.obr= new Image();
	this.obr.src=this.tablica_nazw[Math.floor((Math.random() * 10) )]; 
	
	//funkcja rysująca obiekty 
	this.rysuj= function (){
		canvas.drawImage(this.obr,this.x,this.y,50,50);
		
		
	}
	 //funkcja poruszająca obiektami 
	 this.ruszaj = function() {
        if (this.x<0 || this.x>c_szerokosc-50) {
            this.przesuniecieX = -this.przesuniecieX;
        }
        if (this.y<0 || this.y>c_dlugosc-50) {
            this.przesuniecieY = -this.przesuniecieY;
        }       
        this.x = this.x + this.przesuniecieX;
        this.y = this.y + this.przesuniecieY;
 
        this.rysuj();
    }
	
	
	
}


	// obiekt : student 
	function Student(x,y,predkosc){
		this.x = x;
		this.y = y;
		this.predkosc = predkosc;
  

		this.obr = new Image ();
		this.obr.src = './student/student.png';
		var self = this ; 
		this.rys= function (){
			
		canvas.drawImage(this.obr,this.x,this.y,50,50);
		
	}
	

		
			
		
		
	
}

		//funkcja sprawdzajaca kolizje

	function kolizja ( student, obiekt ){
	
		if(Math.abs(student.x - obiekt.x) < 30 && Math.abs(student.y - obiekt.y) < 30 ){
			console.log("KOLIZJA");
			return true ; 
		}
	
	}
	// odczyt i obsluga klawiatury 
	document.addEventListener('keydown', function(event) {
			switch (event.keyCode) {
			case 65: // Left
			console.log(event.keyCode);
			if(student.x-student.predkosc >0 ){
				student.x -= student.predkosc; 
			
			
			}
			
			break;
			case 87 :// góra
			if(student.y - student.predkosc > 0 ){
				student.y -= student.predkosc; 
			}
			break;
			case 83 ://dół
			if(student.y + student.predkosc  < 600 ){
				student.y += student.predkosc ; 
			}
			break ; 
			case 68: // Right
			if(student.x + student.predkosc < 1000){
				
				 student.x +=  student.predkosc; 
				 	
				
			}
      
			break;
 
    
			}
		}, false);
