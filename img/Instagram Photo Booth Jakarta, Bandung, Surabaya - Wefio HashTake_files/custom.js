$(function(){$('#btn-subscribe').click(function(){var fname=$('input#fname').val();var lname=$('input#lname').val();var email=$('input#email').val();console.log(fname)
$.ajax({type:'POST',url:'/subscribe-newsletter.php',data:{fname:fname,lname:lname,email:email}}).done(function(response){console.log(response);}).error(function(err){console.log(err)})
return false;})})