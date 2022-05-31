// run this function when the document is loaded
window.onload = function() {
    // window.alert('Welcome to my home page!');
    // this.adicionandoLista();
 }

 var adicionandoLista = function(){
    console.log()
    var elem  = document.createElement("li");
    var texto = document.createTextNode("mais um item");
    debugger;
    elem.appendChild(texto);
    var lista = document.getElementById('testando');
    // var lista = document.getElementsByTagName('ul')[0];
    lista.appendChild(elem);
    lista.push(elem)
 }

function salvandoDados() {
    alert('Salvando dados');
}

document.getElementById("buttonSaveChanges").addEventListener("click", function (event) {
    alert('Salvando dados')
}, false);