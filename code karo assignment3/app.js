function changeBackgroundColor(){
    let bgchanges = document.getElementById('bgchanges')
    bgchanges.style.backgroundColor = getRandomColor();
}
function getRandomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = 'rgb(' + red + ', ' + green + ','+ blue + ')';
    return color
}