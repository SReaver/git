var age = 37;
var name = "Александр Козырев";
var distribution = true;

function verifyUser() {
 if (age >= 18) {
  if (distribution) {
   successAlert();
  } else {
   forbiddenAlert();
  }
 } else {
  forbiddenAlert();
 }

}

function successAlert() {
 alert(name + ", Вам предоставлен доступ к сайту");
 console.log("Пользователь " + name + " допущен к сайту");
}

function forbiddenAlert() {
 alert(name + ", Вам запрещён доступ к сайту!!!");
 console.log("Пользователю " + name + " доступ запрещён");
}

verifyUser();