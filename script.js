// Smooth Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    function animateOnScroll() {
        elements.forEach((element) => {
            if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                element.classList.add("fadeIn");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});


document.getElementById("sendChat").addEventListener("click", function () {
    let userMsg = document.getElementById("chatInput").value.trim();
    if (userMsg === "") return;

    let chatBody = document.getElementById("chatBody");
    chatBody.innerHTML += <p class="user-message">${userMsg}</p>;
    document.getElementById("chatInput").value = "";

    // Send message to PHP server via AJAX
    fetch("chatbot.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "message=" + encodeURIComponent(userMsg),
    })
    .then(response => response.json())
    .then(data => {
        chatBody.innerHTML += <p class="bot-message">${data.response}</p>;
        chatBody.scrollTop = chatBody.scrollHeight;
    })
    .catch(error => console.error("Error:", error));
});


// // AI Chatbot Logic
// const aiBotBtn = document.getElementById("aiBotBtn");
// const chatbot = document.getElementById("chatbot");
// const closeChat = document.getElementById("closeChat");
// const chatBody = document.getElementById("chatBody");
// const chatInput = document.getElementById("chatInput");
// const sendChat = document.getElementById("sendChat");

// const responses = {
//     "hello": "Hello! How can I assist you?",
//     "courses": "We offer BCA, BCA with AI, and BCA in Cyber Security.",
//     "admission": "Admissions open in May-June. Visit our admission page for details.",
//     "faculty": "Our department has expert faculty in AI, Cyber Security, and Software Development.",
//     "events": "Upcoming events include a Hackathon and AI Seminar.",
//     "default": "I'm not sure about that. Please visit our official website for more details."
// };

// // Show Chatbot
// aiBotBtn.addEventListener("click", () => {
//     chatbot.style.display = "flex";
// });

// // Close Chatbot
// closeChat.addEventListener("click", () => {
//     chatbot.style.display = "none";
// });

// // Send Chat Message
// sendChat.addEventListener("click", () => {
//     let userMsg = chatInput.value.toLowerCase();
//     if (userMsg.trim() === "") return;

//     chatBody.innerHTML += <p class="user-message">${chatInput.value}</p>;
//     chatInput.value = "";

//     setTimeout(() => {
//         let botReply = responses[userMsg] || responses["default"];
//         chatBody.innerHTML += <p class="bot-message">${botReply}</p>;
//         chatBody.scrollTop = chatBody.scrollHeight;
//     }, 1000);
// });