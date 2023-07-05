let saveEl= document.getElementById("save-el")
let countEl= document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}
function decrement(){
    count -= 1
    countEl.innerText = count
}
function save(){
    let countstr =  count + " , "
    saveEl.textContent+=countstr
    countEl.textContent = 0
    count=0
}