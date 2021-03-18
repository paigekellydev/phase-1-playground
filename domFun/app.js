let h1 = document.getElementById('first');

let pTags = document.getElementsByClassName('ptag');

let pTagsByTagName = document.getElementsByTagName('p');

const students = [
    {name: "Paige"},
    {name: "Josh"},
    {name: "Hayley"}
]


students.forEach(student => {
    let h2 = document.createElement('h2')

    h2.textContent = student.name

    document.body.append(h2)
})