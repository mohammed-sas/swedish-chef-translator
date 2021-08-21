var text = document.querySelector(".text-area");
var btnTranslate = document.querySelector(".btn-translate");
var outputDiv = document.querySelector(".div-output");

let serverURL = "https://api.funtranslations.com/translate/chef.json";

function getURL(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error",error);
    alert("something wrong with the server");
}

function clickHandler(){

    fetch(getURL(text.value)).then(response => response.json()).then(json => outputDiv.innerText = json.contents.translated).catch(errorHandler);

}



btnTranslate.addEventListener("click",clickHandler);