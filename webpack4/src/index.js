import _ from "lodash"
import printMe from "./print.js"
import "./style.css"
import strawberry from "./strawberry.png"
import data from "./data.xml"

function component() {
	const element = document.createElement("div")
	element.innerHTML = _.join(['my','name','is','yvonne'], ' ')
	element.classList.add("name")

	const img = new Image()
	img.src = strawberry
	element.appendChild(img)

	const button = document.createElement("button")
	button.innerHTML = "click me!"
	button.onclick = printMe
	element.appendChild(button)

	console.log(data)
	return element
}
document.body.appendChild(component())

if (module.hot) {
	module.hot.accept("./print.js", function(){
		console.log('Accepting the updated printMe module!')
		printMe()
	})
}