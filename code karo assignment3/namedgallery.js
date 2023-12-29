const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let namedarray = document.getElementById('namedarray')
let i = 0;
namedarray.innertext = names[i]
function nextbtn(){
    i++
    if(i>=names.length){
        i=0
    }
    namedarray.innerText = names[i]
}
function prevbtn(){
    i--
    if(i<0){
        i=9
    }
    namedarray.innerText = names[i]
}