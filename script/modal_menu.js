setTimeout(function () {
    let overlay = document.getElementById('overlay');
    let modalwin = document.getElementById('modal-content');

    overlay.style.display = "block"; // Показывает затемнение
    modalwin.style.display = "block"; // Показывает окно

    // Используем setTimeout для плавного появления
    setTimeout(() => {
        overlay.style.opacity = "1"; // Устанавливаем непрозрачность
        modalwin.style.opacity = "1"; // Устанавливаем непрозрачность
    }, 100); // Небольшая задержка для активации перехода
}, 1000); // Открытие через 10 секунд

document.getElementById("modal-close").addEventListener("click", function () {
    let overlay = document.getElementById('overlay');
    let modalwin = document.getElementById('modal-content');

    overlay.style.opacity = "0"; // Уменьшаем непрозрачность
    modalwin.style.opacity = "0"; // Уменьшаем непрозрачность

    // Скрываем элементы после завершения анимации
    setTimeout(() => {
        overlay.style.display = "none"; // Скрывает затемнение
        modalwin.style.display = "none"; // Скрывает окно
    }, 500); // Задержка должна совпадать с длительностью перехода
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    let formData = new FormData(this); // Собираем данные формы
    let successMessage = document.getElementById('successMessage');

    fetch('mail.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.textContent = data.message; // Успешное сообщение
                successMessage.style.display = "block"; // Показываем сообщение
                this.reset(); // Очищаем форму
            } else {
                successMessage.textContent = "Ошибка: " + data.message; // Сообщение об ошибке
                successMessage.style.display = "block"; // Показываем сообщение
            }
        })
        .catch(error => {
            successMessage.textContent = "Ошибка: " + error.message; // Сообщение об ошибке
            successMessage.style.display = "block"; // Показываем сообщение
        });
});