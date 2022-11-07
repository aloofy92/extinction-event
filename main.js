// querySelectorAll

let dinoList1 = document.querySelectorAll("#ordered-dinos li");

function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
 dinoList1[i].addEventListener('click', function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = "line-through solid blue";
        })
    }
}
olStrike();


//#unordered-dinos - parent div

let dinoList2 = document.querySelector("#unordered-dinos");

dinoList2.addEventListener('click', function(event){
        let listItem = event.target;
        console.log(listItem.innerText);
        listItem.style.opacity = '0';
})



let dinoRow = document.querySelector("#row");

dinoRow.addEventListener("click", function(event){
    let dinoItem = event.target;
    dinoItem.style.width = "0px";
})



let destroyAll = document.querySelector("#destroy-all");
destroyAll.addEventListener("click", function(){
    meteorAll(dinoList1,dinoList2,dinoRow);

})


function meteorAll(dinoList1, dinoList2, dinoRow){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].style.textDecoration = "line-through solid blue"
    }
  // a bit confused as how to loop through the last 2 items to get them
  // all to meteor. The first one works.
}

