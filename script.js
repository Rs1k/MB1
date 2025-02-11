document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Останавливаем стандартное поведение формы

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch("send.php", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        const messageBox = document.getElementById("responseMessage");

        // Показать сообщение
        messageBox.style.display = "block";
        messageBox.innerText = result.message;
        messageBox.style.color = result.status === "success" ? "green" : "red";

        if (result.status === "success") {
            form.reset(); // Очистить форму, если всё прошло успешно
        }
    } catch (error) {
        alert("Произошла ошибка. Попробуйте снова.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});