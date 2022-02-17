var h=document.getElementById("but")
function shyam(){
if(h="checkbox"){
	// var e=document.querySelectorAll("input")
	var e=document.getElementsByName("the")
	var y=e.length
	for(var i=0;i<y;i++)
	{
		e[i].checked=true;
	}

	}
	only2()
	

}
function box(){
if(h="checkbox"){
	var e=document.querySelectorAll("input")
	var y=e.length
	for(var i=0;i<y;i++)
	{
		e[i].checked=false;
	}

	}
	else("error")

}





/*this is the second part sytem*/

var j=document.getElementById("but1")
function se(){
if(j="checkbox"){	
	var f=document.getElementsByName("the1")
	var g=f.length
	for(var i=0;i<g;i++)
	{
		f[i].checked=true;
	}

	}
	else{
		alert("hi")
	}
	only()

}

var j=document.getElementById("but1")
function rie(){
if(j="checkbox"){	
	var f=document.getElementsByName("the1")
	var g=f.length
	for(var i=0;i<g;i++)
	{
		f[i].checked=false;
	}

	}
	else{
		alert("hi")
	}

}



/*this is check only one*/




   function only(){
   	alert("only check one")
// 	let suno=document.getElementsByName("the")
// 	var ko=0
// 	for(var k=0;k<suno.length;k++)
// 	{
// 		if(suno[k].checked==true){
// 			ko=ko+1
// 		}

	}
// 	if(ko>4){
// 		alert("enter only one")
// 	}
// }
// function only2(){
// 	let suno=document.getElementsByName("the")
// 	var ko=0
// 	for(var k=0;k<suno.length;k++)
// 	{
// 		if(suno[k].checked==true){
// 			ko=ko+1
// 		}

// 	}
// 	if(ko>4){
// 		alert("enter only one")
// 	}
// }
