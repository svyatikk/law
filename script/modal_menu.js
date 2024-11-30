function openModal() {
    let modalwin = document.getElementById('modal-content');
    
    modalwin.style.display = "block"; 


    setTimeout(() => {
        modalwin.style.opacity = "1"; 
    }, 100); 
}

openModal()


document.getElementById("openModalButton").addEventListener("click", openModal);

document.getElementById("modal-close").addEventListener("click", function () {
    let modalwin = document.getElementById('modal-content');

    modalwin.style.opacity = "0"; 

    
    setTimeout(() => {
        modalwin.style.display = "none"; 
    }, 500); 
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let formData = new FormData(this); 
    let successMessage = document.getElementById('successMessage');

    fetch('mail.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.textContent = data.message; 
                successMessage.style.display = "block"; 
                this.reset(); 
            } else {
                successMessage.textContent = "Ошибка: " + data.message; 
                successMessage.style.display = "block"; 
            }
        })
        .catch(error => {
            successMessage.textContent = "Ошибка: " + error.message;
            successMessage.style.display = "block"; 
        });
});