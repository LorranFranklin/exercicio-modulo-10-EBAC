$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinity: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(DDD) 12345-6789",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "123.456.789-00",
  });

  $("#cep").mask("00000-000", {
    placeholder: "012345-678",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    messages: {
      nome: {
        required: "Por favor, insira seu nome!",
      },
      email: {
        required: "Por favor, insira seu e-mail!",
        email: "Por favor, insira um e-mail válido!",
      },
      telefone: {
        required: "Por favor, insira seu telefone!",
      },
      endereco: {
        required: "Por favor, insira seu endereço!",
      },
      cep: {
        required: "Por favor, insira seu CEP!",
      },
      cpf: {
        required: "Por favor, insira seu CPF!",
      },
    },
    submitHandler: function (form) {
      alert("Sua requisição foi enviada para analise, parabéns pela aquisição!");
      form.reset();
    },
    invalidHandler: function (evento, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert(camposIncorretos + " campos incorretos, por favor, corrija-os!");
      }
    },
  });
});
