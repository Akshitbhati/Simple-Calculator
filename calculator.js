const dataCell = document.querySelectorAll('.data-cell')
const result = document.getElementById('result')
const clear = document.getElementById('clear')

let string = ""
dataCell.forEach(data=> {
    data.addEventListener('click', function(){
        result.innerText = data.innerHTML
    })
})
Array.from(dataCell).forEach((data) => {
data.addEventListener('click', function(e){
    if(e.target.innerHTML == '='){
    string = eval(string)
    result.innerText = string
    }   
    else{
string = string + e.target.innerText
 result.innerText = string
    }
})
})
//clear Text
clear.addEventListener('click', function(){
    string = ""
    result.innerHTML = string
})
