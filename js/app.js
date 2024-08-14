function encrypt(text) {
    return text.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) + 3);
    }).join('');
}

function decrypt(text) {
    return text.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) - 3);
    }).join('');
}

const textField = document.getElementById("textField");
const actionBtn = document.getElementById("actionBtn");

// Inicializa o botão como desabilitado
actionBtn.disabled = true;

// Habilita/Desabilita o botão com base no conteúdo do campo de texto
textField.addEventListener("input", function() {
    if (textField.value.trim() !== "") {
        actionBtn.disabled = false;
    } else {
        actionBtn.disabled = true;
    }
});

actionBtn.addEventListener("click", function() {
    if (actionBtn.innerText === "Criptografar") {
        const encodedText = encrypt(textField.value);
        textField.value = encodedText;
        actionBtn.innerText = "Descriptografar";
    } else {
        const decodedText = decrypt(textField.value);
        textField.value = decodedText;
        actionBtn.innerText = "Criptografar";
    }
});
