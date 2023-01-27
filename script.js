let num = 0;

const add = () => { num += 1; document.getElementById('counter').innerHTML = `${num}`}
const rem = () => { num -= 1; document.getElementById('counter').innerHTML = `${num}`}
function moreTen(){
    num += 10;
    document.getElementById('counter').innerHTML = `${num}`
}
function lessTen(){
    num -= 10;
    document.getElementById('counter').innerHTML = `${num}`
}
function reload(){
    num = 0;
    document.getElementById('counter').innerHTML = `${num}`
}