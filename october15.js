var dataP = d3.json("https://ghibliapi.herokuapp.com/films")
dataP.then(function(data)
{console.log("data", data)
var movieTitles = []

data.forEach(function(d){return movieTitles.push(d.title)})
console.log("movietitles", movieTitles) 
var listnames = document.getElementById("pTitle")
var movieList = d3.select("body")
.selectAll("li")
.data(data)
.enter()
.append("li")
.text(function(d){return d.title})
.on("click",function(d){listnames.innerHTML=d.description})

}          
           
           
           
           
           )