// expres server
// 1 page: homepage with question
// grading happens with a scale useing radiobuttons 
// post request send to json file
// once post is done remove the send button from the page
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs')

// get request for homepage
// send back index page
app.get('/', (req, res) => {
	res.render('index')
})

app.post('/submit', (req, res) => {
	console.log(req.body)
	let userData = req.body
	//read file
	fs.readFile('data.json', (err,data) => {
		if(err) { console.log(err)}
		let item = JSON.parse(data)
		console.log(item)
		item.push(userData)
		console.log(item)
		item = JSON.stringify(item)
		fs.writeFile('data.json', (err,data) => {
			if(err){console.log(err)}
			console.log('file written!')
		})
	})
	
	
	//stringify
	//write
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// post request to recieve the data
// fs append to store the data
// res.send data recieve