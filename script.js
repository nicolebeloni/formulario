function formulario () {
    let nome= document.getElementById("nome").value;
    let email= document.getElementById("email").value;
    let telefone= document.getElementById("telefone").value;
    let cpf= document.getElementById("cpf").value;
    let idade= document.getElementById("idade").value;
    let cidade= document.getElementById("cidade").value;
    let moradia= document.getElementById("moradia").value;
    let quintal= document.getElementById("quintal").value;
    let pet= document.getElementById("pet").value;
    let horas= document.getElementById("horas").value;
    let motivo= document.getElementById("motivo").value;
    
    if(nome.length < 3) {
        alert("O nome deve ter no mínimo 3 caracteres");
    }
}