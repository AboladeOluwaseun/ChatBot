const toggler = document.querySelector(".toggler");
const content = document.getElementsByClassName("content")[0];
const userInput = document.getElementById("textInput");
const chatBox = document.getElementById("chatbox");

//Toggle chatbox
toggler.addEventListener("click", () => {
  if (content.style.display === "" || content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

//renderUserMessage
const renderUserMessage = (userInputValue) => {
  renderMessage(userInputValue, "userText");
  setTimeout(() => {
    renderBotMessage(userInputValue);
  }, 600);
};

//get a response from ChatBot
const getBotMessage = (userInputValue) => {
  return responses[userInputValue] === undefined
    ? "I have no response to this"
    : responses[userInputValue];
};
// render message from bot
const renderBotMessage = (userMessage) => {
  const res = getBotMessage(userMessage);
  renderMessage(res, "botText");
};

// logic for rendering messages
const renderMessage = (message, className) => {
  const response = getBotMessage(userInput.value);
  const botChatHtml = document.createElement("p");
  const span = document.createElement("span");
  botChatHtml.classList.add(className);
  span.innerText = `${message}`;
  botChatHtml.appendChild(span);
  chatBox.appendChild(botChatHtml);
};

const sendButton = () => {
  renderUserMessage(userInput.value);
  userInput.value = "";
};
