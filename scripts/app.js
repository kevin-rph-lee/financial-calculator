$(function() {

 $('.submit').click(function(e){
  event.preventDefault();
  const marginal = $('#marginal').val();
  const income = $('#annual-income').val();
  const deposit = $('#deposit').val();
  const yearsInvested = $('#years-invested').val();
  const roi = $('#roi').val();
  const inflation = $('#inflation').val();
  console.log(marginal);
  console.log(income);
  console.log(deposit);
  console.log(yearsInvested);
  console.log(roi);
  console.log(inflation);

 });

});