// your code goes here

const answbut = document.GetElementById("enterbutton")
answbut.addEventListener('click', function(){
    const login = document.GetElementById("login")
    const password = document.GetElementById("password")
    const loginanswer = "taburetka"
    const passwordanswer = "goida"
    const messageP = document.GetElementById("message")
    
    if (login.value === loginanswer&& password.value===passwordanswer){
        messageP.textContent = "успешно"
    }else (login.value === loginanswer&& password.value===passwordanswer){
        messageP.textContent = "неверный логин или пароль"
    }
});
