// saati gösteren fonksiyon
function showTime() {
    let now = new Date();   // şuanki zamanı alır.
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];  // gün isimlerini kaydeden dizi
    let dayName = days[now.getDay()];   // haftanın gününü alıp dizi kullanarak bulur.

    // Saati ve gün adını HTML'deki "myClock" id'li elemente yazar
    document.getElementById("myClock").innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;

    /// Fonksiyonu 1 saniye (1000 milisaniye) sonra tekrar çalıştırır, böylece saat sürekli güncellenir
    setTimeout(showTime, 1000);
}

// kullanıcıdan isim isteyen fonks.
function askName() {
    let name = prompt("Lütfen adınızı girin:");

    if (!name || name.trim() === "") {
        alert("Lütfen geçerli bir isim girin!");
        askName(); // Eğer boş bırakırsa tekrar sor
    } else {
        document.getElementById("myName").innerText = name; 

        // Sayfayı görünür yap
        // "content" id'li elementi görünür yapar (başlangıçta gizlidir)
        document.getElementById("content").style.display = "block";

        showTime(); // Saati başlat
    }
}

// **Sayfa açıldığında her şeyi gizle**
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("content").style.display = "none"; // İçeriği gizle
    askName(); // Kullanıcı adını iste
});
