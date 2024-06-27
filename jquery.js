<<<<<<< HEAD
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
});


=======
//function ocultarForm() {
 /* $(document).ready(function(){
    $("entrar").click(function(){
      $("container").hide();
    });
  });*/
//}
<script>$("entrar").click(function(){
  $("div.container").toggle();
});
</script>
>>>>>>> 96fd8083ea63bb0be7bed277c5d8c247ad1098a0
