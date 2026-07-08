const API_URL = "https://bread-backend.up.railway.app";

async function loadComments() {
    const commentSection = document.getElementById("comment-section");
    commentSection.innerHTML = "";
    
    let messages = [];

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        messages = data.messages.reverse();
        
        messages.forEach(message => {
        const html = `
            <h1 class="message-owner">${message.owner}</h1>
            <p class="message-content">${message.content}</p>
        `;
        const messageElement = document.createElement("div");
        messageElement.innerHTML = html;

        commentSection.appendChild(messageElement);
        });
    } catch (err) {
        console.error("Error fetching messages:", err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComments();
});

async function Comment() {
    const username = document.getElementById("username-input").value.trim();
    const content  = document.getElementById("comment-content").value.trim();

    const response = await fetch(API_URL+"/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            owner: username,
            content: content,
        }),
    });

    const data = await response.json();
    if (data.status == "success") {
        await loadComments();
        document.getElementById("comment-content").value = "";
    } else {
        console.log(data);
    }
}