import _ from "lodash"
import printMe from "./print.js"
import "./style.css"
import strawberry from "./strawberry.png"
import data from "./data.xml"
import { cube } from "./shaking.js"

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!',process.env.NODE_ENV)
}

function component() {
	const element = document.createElement("div")
	element.innerHTML = _.join(['my','name','is','yvonne',cube(5)], ' ')
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
let element = component()
document.body.appendChild(element)

if (module.hot) {
	module.hot.accept("./print.js", function(){
		console.log('Accepting the updated printMe module!')
		printMe()
		document.body.removeChild(element)
		element = component()
		document.body.appendChild(element)
	})
}