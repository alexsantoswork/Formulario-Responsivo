const form = document.querySelector("#form")
const nome = document.querySelector("#nome")
const sobrenome = document.querySelector("#sobrenome")
const email = document.querySelector("#email")
const type1 = document.querySelector("#selecionar")
const type2 = document.querySelector("#selecionar")
const message = document.querySelector("#message")
const checkbox = document.querySelector("#checkbox")

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    checkInputs()
})

function checkInputs() {

    //NOME
    if (nome.value === "") {
        setErrorFor(nome, 'This field is requerid')
        return;
    } else {
        setSuccessFor(nome)
    }

    //SOBRENOME
    if (sobrenome.value === "") {
        setErrorFor(sobrenome, 'This field is requerid')
        return;
    } else {
        setSuccessFor(sobrenome)
    }

    //EMAIL
    if (email.value === "" || !isEmailValid(email.value)) {
        setErrorFor(email, 'Please enter a valid email address')
        return;
    } else {
        setSuccessFor(email)
    }

    //CHECKBOX RADIO
    const radios = document.querySelectorAll('input[name = "selecionar"]');   

    let algumRadioSelecionado = false;
    radios.forEach(radio => {
        if (radio.checked) {
            algumRadioSelecionado = true;
        }
    });

    if (!algumRadioSelecionado) {
        setErrorFor(aperte, "Please a select query type")
        return;
    } else {
        setSuccessFor(aperte,)
    }

    //MENSSAGEM
    if (message.value === "") {
        setErrorFor(message, 'This field is requerid')
        return;
    } else {
        setSuccessFor(message)
    }

    //CHECKBOX
    const termos = document.getElementById('checkbox');

    if (!termos.checked) {
        setErrorFor(termos, 'To submit this form, please concent to being contacted')
        return;
    } else {
        setSuccessFor(termos)
    }

    //SUBMETER FORMULARIO
    form.submit();
    alert("Obrigado por preencher o formulário. Entraremos em contato em breve!")
};

function setErrorFor(input, message,) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input,) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

// ESSA FUNÇÃO É PRA FAZER A VALIDAÇÃO DO EMAIL CHAMADA DE REGEX

function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}



