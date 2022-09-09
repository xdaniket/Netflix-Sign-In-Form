function validateForm() {
  var title = "Netflix";
  icon = "";
  var body = "Netflix - Watch TV Shows Online, Watch Movies OnlineNetflix ";
  var notification = new Notification(title, { body, icon });
  var uname, pwd, s1, s2, z;
  uname = document.getElementById("uname");
  pwd = document.getElementById("pwd");

  s1 = document.getElementById("s1");
  s2 = document.getElementById("s2");

  if (uname.value == "") {
    s1.innerHTML = "*Must be fill.";
    uname.style.border = "1px solid red";
  } else if (uname.value === "string") {
    z = true;
  } else {
    s1.innerHTML = "";
  }
  if (pwd.value == "") {
    s2.innerHTML = "*Must be fill.";
    pwd.style.border = "1px solid red";
  } else if (pwd.value === "number") {
    z = true;
  } else {
    s2.innerHTML = "";
  }

  if (uname.value == "" || pwd.value == "") {
    z = false;
  } else {
    z = true;
  }
  return z;
}

Notification.requestPermission().then(function (permission) {
  console.log(permission);
});
