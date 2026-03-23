window.onload = function () {

    // ===== КАРТА =====
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.6173, 55.7558]), // Москва
            zoom: 10
        })
    });

    // ВАЖНО: принудительное обновление карты
    setTimeout(() => {
        map.updateSize();
    }, 100);


    // ===== ЧАТ =====
    const chatBox = document.getElementById("chatBox");
    const input = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const voiceBtn = document.getElementById("voiceBtn");

    function addMessage(text, user = "Вы") {
        const div = document.createElement("div");
        div.textContent = user + ": " + text;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botReply(message) {
        let responses = ["Интересно!", "Расскажи подробнее", "Я понял", "Хорошо"];

        if (message.toLowerCase().includes("привет")) return "Привет!";
        if (message.toLowerCase().includes("как дела")) return "Отлично 😎";

        return responses[Math.floor(Math.random() * responses.length)];
    }

    sendBtn.onclick = function () {
        const text = input.value;
        if (!text) return;

        addMessage(text);
        addMessage(botReply(text), "Бот");

        input.value = "";
    };

    voiceBtn.onclick = function () {
        addMessage("🎤 Голосовое сообщение (имитация)");
        addMessage("Я получил голосовое сообщение!", "Бот");
    };

};