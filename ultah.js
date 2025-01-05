document.addEventListener("DOMContentLoaded", function() {
    const birthdays = [
        { name: "Nabil Ariq", date: "04-12" },
        { name: "Bagus Shaputra", date: "01-02" },
        { name: "Yourva Liandra Andana", date: "13-07" },
        { name: "Tiara Rahmah", date: "29-05" },
        { name: "Raihan Fadhilah Faqih", date: "24-05" },
        { name: "Nesha Agustin", date: "29-08" },
        { name: "Nanda Zora Risqya", date: "16-02" },
        { name: "Nadila", date: "05-07" },
        { name: "Fitri Juniarti", date: "26-10" },
        { name: "Intan Rahmah Permata Sari", date: "11-11" },
        { name: "M. Arif Pratama", date: "29-07" },
        { name: "Wira Shaputra", date: "15-09" },
        { name: "Maulana Rosyid Hidayat", date: "18-05" },
        { name: "Mona Putri Sitanggang", date: "20-10" },
        { name: "Dinda Zhakira", date: "27-08" },
        { name: "Alya Yunita Sari", date: "05-01" },
        { name: "Trisya Wulandari", date: "05-07" },
        { name: "Dhea Novetri", date: "05-11" },
        { name: "Gacella Putri Ragellia", date: "02-11" },
        { name: "Ningrum Nurhayati", date: "24-11" },
        { name: "Reva Auliyah", date: "14-09" },
        { name: "Revi Auliyah", date: "14-09" },
        { name: "Febby Mutiara Putri", date: "22-01" },
        { name: "Livi Novika Sari", date: "21-04" },
        { name: "Muhammad Fadhil Ichsan", date: "26-04" },
        { name: "Ocha Fitri Mariza", date: "07-11" },
        { name: "Nadi Irawan", date: "03-04" }
    ];

    const today = new Date();
    const currentDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}`;

    const birthdayPerson = birthdays.find(birthday => birthday.date === currentDate);

    if (birthdayPerson) {
        const giftPopup = document.createElement('div');
        giftPopup.className = 'gift-popup';
        giftPopup.innerHTML = `
            <img src="img/gift.jpg" alt="Kado">
            <p>Klik untuk melihat ucapan selamat ulang tahun!</p>
            <button onclick="showBirthdayMessage('${birthdayPerson.name}')">Klik Saya!</button>
        `;
        document.body.appendChild(giftPopup);
        giftPopup.style.display = 'block';
    }
});

function showBirthdayMessage(name) {
    const messagePopup = document.createElement('div');
    messagePopup.className = 'birthday-message';
    messagePopup.innerHTML = `
        <h2>Selamat Ulang Tahun, ${name}!</h2>
        <p>Selamat ulang tahun! Semoga semua doa terbaik untukmu dikabulkan, hidupmu penuh warna kebahagiaan, dan setiap harimu membawa cerita yang indah dan berharga.</p>
        <button onclick="this.parentElement.style.display='none'; this.parentElement.previousElementSibling.style.display='none';">Tutup</button>
    `;
    document.body.appendChild(messagePopup);
    messagePopup.style.display = 'block';
}