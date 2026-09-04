function mostrarSenha() {
    const senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function criarConta() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const usuario = document.getElementById("usuario").value;

    if (email === "" || senha === "" || usuario === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.");
        return;
    }
    if (senha.length < 8 || senha.length > 12) {
        alert("A senha tem que ter entre 8 e 12 caracteres.");
        return;
    }
    
    console.log("pronto")
   
    const conta = {
        email: email,
        senha: senha,
        usuario: usuario
    };

    localStorage.setItem("conta", JSON.stringify(conta));
    email.value = "";
    usuario.value = "";
    senha.value = "";

    console.log("pronto");
}