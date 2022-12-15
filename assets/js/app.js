// alert(`hello`);

const cl = console.log;

let info = document.getElementById("info");

let arr = info.innerText.split(" ");
cl(arr);

let infoText = document.getElementById("info1");

let result = ``;

arr.forEach(function(site){
	if(site.indexOf("https://") > -1){
		result += `
		<div class="sites">
			<a href="${site}" target="_blank" class="links">${site}</a>
		</div>
		`;
	}else{
		result += `${site}` + " ";
	};
});

infoText.innerHTML = result;

/*......................................................................................................*/

function linksTask(p1,p2){
	let text1 = document.getElementById(p1);

	let text2 = document.getElementById(p2);

	let arr1 = text1.innerText.split(" ");
	cl(arr1);

	let result = ``;

	arr1.forEach(function(site){
		if(site.includes("http")){
			result += `
			<div class="sites">
				<a href="${site}" target="_blank" class="links">${site}</a>
			</div>
			`;
		}else{
			result += `${site}` + " ";
		};
	});

	text2.innerHTML = result;
};

linksTask(info2,info3);

/*......................................................................................................*/