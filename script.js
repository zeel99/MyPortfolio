var item = document.getElementById("bgimg");
console.log(item);
item.onmouseover = function() {
    item.setAttribute('style', 'display: none')
}
item.onmouseout = function() {
    item.setAttribute('style', 'display: block')
}