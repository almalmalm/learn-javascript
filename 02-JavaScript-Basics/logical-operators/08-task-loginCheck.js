// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

const login = prompt('Who is there?', '');

if (login == 'Admin') {
   const password = prompt('Enter password','');

   if (password == `I'm chief`){
       alert('Hello there!');
   }else if (password == null){
       alert('Canceled');
   }else {
       alert('Incorrect password');
   }
}else if (login == '' || login == null) {
    alert('Canceled');
}else {
    alert(`I don't know you, ${login}`);
}
