// Инициализация анимаций появления
AOS.init({ duration: 800, once: true });

// Легкие частицы на фоне
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 30 },
    "color": { "value": "#ffffff" },
    "opacity": { "value": 0.1 },
    "size": { "value": 1 },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1 }
  }
});

function onCaptchaSuccess() {
    console.log("Капча пройдена");
    // Выводим сообщение на экран
    alert("Капча успешно пройдена!");
    // Здесь можно включить кнопки, если добавишь их
}
