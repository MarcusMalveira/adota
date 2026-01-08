// No seu arquivo JavaScript
window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY === 0) {
    backToTopButton.classList.remove('visible');
  } else {
    backToTopButton.classList.add('visible');
  }
});


 

document.addEventListener('DOMContentLoaded', function () {

  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;

  function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[n].classList.add('ativo');
  }

  nextBtn.addEventListener('click', function () {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  });

  prevBtn.addEventListener('click', function () {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  });

});

document.getElementById('cpf').addEventListener('input', function(e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
						.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
						.replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
						.replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});



 


document.addEventListener("DOMContentLoaded", function () {

  // Captura o formulário e o campo CPF
  const form = document.querySelector(".formulario");
  const cpfInput = document.getElementById("cpf");

  // Se não encontrar o formulário, para tudo
  if (!form || !cpfInput) {
    console.error("Formulário ou campo CPF não encontrado");
    return;
  }

  // Intercepta o envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // BLOQUEIA o envio SEMPRE primeiro

    const cpf = cpfInput.value;

    // Valida o CPF
    if (!validarCPF(cpf)) {
      alert("CPF inválido. Corrija antes de enviar.");
      cpfInput.focus();
      return; // não envia
    }

    // Se chegou aqui, CPF é válido
    alert("CPF válido! Formulário enviado com sucesso.");

    // 🔓 Libera o envio REAL do formulário
    form.submit();
  });

  // Função oficial de validação de CPF
  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;

    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  }

});



document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".formulario");
  const telInput = document.getElementById("telefone");

  if (!form || !telInput) {
    console.error("Formulário ou campo telefone não encontrado");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const telefone = telInput.value;

    if (!validarTelefoneBR(telefone)) {
      alert("Telefone inválido. Verifique e tente novamente.");
      telInput.focus();
      return;
    }

    alert("Telefone válido!");
    form.submit();
  });

  function validarTelefoneBR(telefone) {
    telefone = telefone.replace(/\D/g, '');

    // Deve ter DDD + número
    if (telefone.length !== 10 && telefone.length !== 11) return false;

    // DDD válido (11 a 99)
    const ddd = telefone.substring(0, 2);
    if (parseInt(ddd) < 11) return false;

    // Celular: 11 dígitos e começa com 9
    if (telefone.length === 11) {
      if (telefone.charAt(2) !== '9') return false;
    }

    // Fixo: 10 dígitos, não começa com 9
    if (telefone.length === 10) {
      if (telefone.charAt(2) === '9') return false;
    }

    return true;
  }

});

