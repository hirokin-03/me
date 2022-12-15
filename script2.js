

const d = new Date();
document.getElementById("date").innerHTML = d;

let day = d.getDay();
//let day = 0;
document.getElementById("day").innerHTML = day;

const pics = ['sunday.jpg','monday.jpg','tuesday.jpg','wednesday.jpg','thursday.jpg','friday.jpg','saturday.jpg'];　

document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';



document.getElementById("day_test_button").addEventListener("click", myFunction);

function myFunction (){

	day++;
	console.log(day);
	document.getElementById("day").innerHTML = day;
	//document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';
	if(day >= 7){

		day = -1;


	}
	if(day == 0){
	document.getElementById("calendar_image").innerHTML = '<img src="' + pics[0] +'">';
}
else if(day == 1){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[1] +'">';
}
else if(day == 2){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[2] +'">';
}
else if(day == 3){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[3] +'">';
}
else if(day == 4){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[4] +'">';
}
else if(day == 5){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[5] +'">';
}
else if(day == 6){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[6] +'">';
}
}
