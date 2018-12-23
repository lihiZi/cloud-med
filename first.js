



window.setInterval( changeProduct, 5000);
var i = 1 ; 
console.log(i);

function changeProduct () {

}



function changeProduct () {

	if (i ==1) {
		document.getElementById("product-img").className="product-img-1";
		document.getElementById("product-name").innerHTML = "Cloud-med SW"
		document.getElementById("product-spec").innerHTML = " A SaaS desktop and mobile application <br> that process and connect patients with pediatric services";
		i++;
		console.log(i);
	} else if (i==2) {
		document.getElementById("product-img").className="product-img-2";
		document.getElementById("product-name").innerHTML = "Stetho-USB";
		document.getElementById("product-spec").innerHTML = " An IoT stethoscope that records digital measurements direclty to app "
		i++;	
	} else if (i==3){
		document.getElementById("product-img").className="product-img-3";
		document.getElementById("product-name").innerHTML = "Throught- Camera"
		document.getElementById("product-spec").innerHTML = " Smart Camera that process images of inner throught and saves them on app"
		i++;
	} else if (i==4) {
		document.getElementById("product-img").className="product-img-4";
		document.getElementById("product-name").innerHTML = "Thermo-USB"
		document.getElementById("product-spec").innerHTML = "An easy to use thermometer that records and stores measurements directly on app" 
		 i=1;
	}
	
/*	if (i ==2) {
			document.getElementById("product-img").className="product-img-2";
			i++;
			console.log(i);

		}
	if (i ==3) {
		document.getElementById("product-img").className="product-img-3";
		i++;
		console.log(i);
	}
	if (i ==4) {
		document.getElementById("product-img").className="product-img-4";
		i=1;
		console.log(i);
	}
*/


}