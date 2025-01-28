//Descrizione:
//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
let listaEmail = document.getElementById ("lista")
let button = document.getElementById ("btn")


function generatoreEmail(){
    for (i = 0; i < 10; i++){
fetch ( "https://flynn.boolean.careers/exercises/api/random/mail" , {method: "GET"} )
.then(response => response.json())
.then(email => {
    
    
        console.log(email.response)
        listaEmail.innerHTML +=
    `
     <li>
     ${email.response}
     </li>
    ` 
    
})

.catch(error => {
    console.error(error)
})

}
}
generatoreEmail()

button.addEventListener("click", function(){
    listaEmail.innerHTML =""
    generatoreEmail()
})

