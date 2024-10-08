// Checamos se o modo escuro foi ativado anteriormente e aplica a classe
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Adicionamos um evento ao botão para alternar entre os modos claro e escuro
document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salvamos a preferência no localStorage
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

function setThemeByTime() {
    const currentHour = new Date().getHours(); 
    const bodyElement = document.body;

    
    if (currentHour >= 18 || currentHour < 6) {
        bodyElement.classList.add('dark-mode');
        
    } else {
      
        bodyElement.classList.remove('');
    }
}


window.onload = setThemeByTime;