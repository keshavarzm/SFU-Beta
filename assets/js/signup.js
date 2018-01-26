// Avoid `console` errors in browsers that lack a console.
function pwd_show() {
  if(document.getElementById('sh').value=='1'){
  document.getElementById('showhide').src='assets/images/show_password.png';
  document.getElementById('sh').value='2';
  document.getElementById('u_pwd').type='text';

} else {
  document.getElementById('sh').value='1';
  document.getElementById('showhide').src='assets/images/hide_password.png';
  document.getElementById('u_pwd').type='password';
}
}

function validatePassword(pwd) {
    var reg = new RegExp(/^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=]).*$/);
    return(reg.test(pwd));
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
  var re = /^[a-z][a-z\s]*$/;
  return re.test(name);
}

function validateEmail_chg(emailurl) {
    var email = emailurl.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      document.getElementById('email_valid').style='display:none';
      document.getElementById('emailInput').style='border-bottom: 1px solid #bdbdbd';
    } else {
      document.getElementById('email_valid').style='display:block';
      document.getElementById('emailInput').style='border-bottom: 1px solid #E35A66';
    }
}

function validatePwd_chg(pwd) {
  var p = pwd.value;
  var reg = new RegExp(/^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=]).*$/);
  if(reg.test(p)) {
    document.getElementById('pw_valid').style='color: #5F6E80';
    document.getElementById('u_pwd').style='border-bottom: 1px solid #bdbdbd';
  } else {
    document.getElementById('pw_valid').style='color: #E35A66';
    document.getElementById('u_pwd').style='border-bottom: 1px solid #E35A66';
  }
}

function validateName_chg(name) {
  var nm = name.value;
  var reg = new RegExp(/^[a-z][a-z\s]*$/);
  if(reg.test(nm)) {
    document.getElementById('name_valid').style='display:none';
    document.getElementById('fullName').style='border-bottom: 1px solid #bdbdbd';
  } else {
    document.getElementById('name_valid').style='display:block';
    document.getElementById('fullName').style='border-bottom: 1px solid #E35A66';
  }
}

function register_btn() {
  var email = document.getElementById("emailInput").value;
  var name  = document.getElementById("fullName").value;
  var pwd   = document.getElementById("u_pwd").value;
  validateEmail_chg(document.getElementById("emailInput"));
  validatePwd_chg(document.getElementById("u_pwd"));
  validateName_chg(document.getElementById("fullName"));
  if(validateEmail(email) && validateName(name) && validatePassword(pwd)) {
    alert('Success');
  } else {
    //alert('Invalid');
  }
}
//test mk
