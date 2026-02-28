document.addEventListener("DOMContentLoaded", function () {

    const welcomeText = document.getElementById("welcome-text");

    let userName = localStorage.getItem("userName");

    if (!userName) {
        userName = prompt("Masukkan Nama Anda:");

        if (userName && userName.trim() !== "") {
            localStorage.setItem("userName", userName);
        } else {
            userName = "Guest";
        }
    }

    welcomeText.innerHTML = `Hi ${userName}, Welcome To Website`;

    const form = document.getElementById("contact-form");
    const result = document.getElementById("form-result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("user-message").value;

        if (!name || !email || !phone || !gender || !message) {
            alert("Semua field wajib diisi!");
            return;
        }

        result.innerHTML = `
            <h3>Data Berhasil Dikirim!</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>No Telepon:</strong> ${phone}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;

        form.reset();
    });

});