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

    function formulario() {

    
    const cpfsCadastrados = ["12345678900", "11122233344", "99988877766"];

    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value.trim();
    let horas = parseInt(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value.trim().toLowerCase();
    let termo = document.getElementById("termo").checked;

    let moradia = document.querySelector('input[name="moradia"]:checked');
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');

   

    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }

    if (telefone.length < 8) {
        alert("Telefone inválido");
        return;
    }

    if (!cpf) {
        alert("CPF é obrigatório");
        return;
    }

    if (cpfsCadastrados.includes(cpf)) {
        alert("CPF já cadastrado");
        return;
    }

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais");
        return;
    }

    if (!cidade) {
        alert("Cidade é obrigatória");
        return;
    }

    if (!moradia) {
        alert("Selecione o tipo de moradia");
        return;
    }

    if (!quintal) {
        alert("Informe se possui quintal");
        return;
    }

    if (!pet) {
        alert("Informe se já teve pet");
        return;
    }

    if (isNaN(horas)) {
        alert("Informe um número válido de horas");
        return;
    }

    if (motivo.length < 10) {
        alert("Motivo deve ter pelo menos 10 caracteres");
        return;
    }

    if (!termo) {
        alert("Você deve aceitar o termo de responsabilidade");
        return;
    }

   
    if (moradia.value === "apartamento" && quintal.value === "sim") {
        alert("Quem mora em apartamento não pode ter quintal");
        return;
    }

   
    if (horas > 8) {
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if (!justificativa || justificativa.length < 5) {
            alert("Justificativa obrigatória");
            return;
        }
    }

   
    if (pet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet");
    }

    let motivosInvalidos = ["quero", "porque sim", "sim"];
    if (motivosInvalidos.includes(motivo)) {
        alert("Motivo inválido ou muito genérico");
        return;
    }

    if (motivo.includes("hoje") || motivo.includes("agora")) {
        alert("Atenção: adoção por impulso detectada");
    }

    
    if (motivo.includes("não tenho dinheiro") || motivo.includes("sem dinheiro")) {
        alert("Adoção não permitida sem condições financeiras");
        return;
    }

   
    alert("Cadastro enviado com sucesso!");
}
}