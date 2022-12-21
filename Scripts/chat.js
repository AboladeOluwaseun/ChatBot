const toggler = document.querySelector(".toggler");
const content = document.getElementsByClassName("content")[0];
const userInput = document.getElementById("textInput");
const chatBox = document.getElementById("chatbox");
const chatContainer = document.getElementsByClassName("chat-container")[0];

//Toggle chatbox
toggler.addEventListener("click", () => {
  if (content.style.display === "" || content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

const updateChat = (message, type) => {
  const chats = JSON.parse(localStorage.getItem("chats")) || [];
  const newChat = { message, type };
  chats.push(newChat);
  localStorage.setItem("chats", JSON.stringify(chats));
};

//get a response from ChatBot
const getBotMessage = (userInputValue) => {
  return responses[userInputValue] === undefined
    ? "I have no response to this"
    : responses[userInputValue];
};

const renderMessage = () => {
  const chats = JSON.parse(localStorage.getItem("chats"));
  if (!chats || chats === undefined) return;
  chatBox.innerHTML = "";
  chats.forEach((chat) => {
    const newChat = `
      <p class=${chat.type}><span>${chat.message}</span></p>
    `;
    chatBox.innerHTML += newChat;
  });
};

const sendButton = () => {
  updateChat(userInput.value, "userText");
  renderMessage();
  const botResponse = getBotMessage(userInput.value);
  setTimeout(() => {
    updateChat(botResponse, "botText");
    renderMessage();
  }, 600);
  userInput.value = "";
};

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") return sendButton();
});
renderMessage();
