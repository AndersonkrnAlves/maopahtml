$(document).ready(function () {
  $("#btn_cadastro").click(function () {
    //alert("vc clicou");
    $("#div1").removeClass("none");
    $("#div2").addClass("none");
  });
  $("#btn_login").click(function () {
    //alert("vc ja tem cadastro");
   $("#div2").removeClass("none");
   $("#div1").addClass("none");
  });

  $("#formulariologin").submit(function (event) {
    event.preventDefault();
    if($("#campo1").val() && $("#campo2").val()) {
      alert("login feito com sucesso");
    } else {
      alert("preencha todos os campos");
    }
    //alert("cliquei e esta funcionando");
  });
  $("#formulariocadastro").submit(function(event){
    event.preventDefault();
    if ($("#cmp1").val() && $("#cmp2").val() && $("#cmp3").val() && $("#cmp4").val()) {
      alert("cadastro realizado com sucesso");
    } else {
      alert("preencha todos os campos");
    }
  });
});