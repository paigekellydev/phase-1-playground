console.log('eooo')


fetch('https://rickandmortyapi.com/api/character?page=2')
    .then  (function(response) {//chained promise, occurs after fetch. so fetch then do this
        return response.json() // response is the response of fetch// response is placeholder
    })                          // for whatever is being returned, can be named anything
                                // .json puts the data in our actual file, api served up json, then need to parse to js
    .then(data => {
        data.results.forEach(function(character){ // char represents element
            const img = document.createElement('img')
            img.src = character.image
            document.body.append(img)
        })
    })

console.log('WHEN IS THIS HAPPENING')
    
// promises take time, so if it's still fetching, then 
// it will run other chained data, until fetch is complete
// then runs .then function
//
// promises are asyncronist - will take how ever long to finish
// 
// 2 inputs, first where do you want to send
// special type of func called promise
//promise is func that will eventually return a value