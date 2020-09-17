const inputField = document.getElementById("b");
const button = document.getElementById("x");
const link = document.getElementById("d");
let url, shorty;

// Event handlers
const clicker = () => {
	axios
		.post("/", {
			url: url,
			shortUrl: Number(Math.floor(Math.random() * 400 + 1)),
		})
		.then((res) => {
			shorty = res.data.shortUrl;
			link.setAttribute("href", "/" + shorty.toString());
			link.style.visibility = "visible";
			link.innerHTML = "[thisProjectURL]/" + shorty.toString();
			console.log("Posted To Database!" + shorty);
			inputField.style.borderColor = "initial";
		})
		.catch((e) => {
			inputField.style.borderColor = "red";
			console.log("Err: " + e);
		});
};
const input = () => {
	url = inputField.value;
};

//Assign each handler to their respective elements
inputField.oninput = input;
button.onclick = clicker;
