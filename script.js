
const messages = document.getElementById("messages");
const input = document.getElementById("userInput");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const question = input.value.trim();

    if (!question) return;

    addMessage(question, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(getHealthResponse(question), "bot");
    }, 500);
}

function getHealthResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("headache")) {
        return "Headaches can have several causes, including dehydration, illness and stress. If the headache is severe, sudden or accompanied by concerning symptoms, seek medical care.";
    }

    if (q.includes("fever")) {
        return "Fever can occur when the body responds to an infection. Monitor symptoms and seek medical advice, especially if the person is very unwell or the fever is persistent.";
    }

    if (q.includes("sleep")) {
        return "Sleep supports learning, growth and general wellbeing. Maintaining a regular sleep schedule can help.";
    }

    if (q.includes("water") || q.includes("hydration")) {
        return "Water helps the body regulate temperature and maintain normal functions. Drink regularly throughout the day.";
    }

    if (q.includes("emergency")) {
        return "If someone may be experiencing a medical emergency, contact local emergency services or go to the nearest emergency department immediately.";
    }

    return "Thanks for your health question. I can provide general health education, but I cannot diagnose conditions or recommend individual treatment. Please consult a qualified healthcare professional for personal medical advice.";
}

function newChat() {
    messages.innerHTML = "";
    addMessage("Hello! I'm MediGenius AI. What health topic would you like to explore?", "bot");
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") sendMessage();
});
