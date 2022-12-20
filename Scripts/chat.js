const toggler = document.querySelector('.toggler')
const content =document.getElementsByClassName('content')[0]
const userInput = document.getElementById('textInput')
const chatBox= document.getElementById('chatbox')
//Toggle chatbox
toggler.addEventListener('click', ()=>{
    if(content.style.display === ''|| content.style.display === 'none'){
        content.style.display = 'block'
    }else { content.style.display = 'none'}
})

const getBotResponse= (userInputValue)=>{
    if(userInputValue==='hello'){
    const botChatHtml= document.createElement('p')
    const span = document.createElement('span')
    botChatHtml.classList.add('botText')
    span.innerText=`${'hi seun'}`
    botChatHtml.appendChild(span)
    chatBox.appendChild(botChatHtml)
    }
    
}
//renderUserMessage
const renderUserMessage =(userInputValue)=>{
    const userChatHtml= document.createElement('p')
    const span = document.createElement('span')
    userChatHtml.classList.add('userText')
    span.innerText=`${userInputValue}`
    userChatHtml.appendChild(span)
    chatBox.appendChild(userChatHtml)
    getBotResponse(userInputValue)
    
    // document.getElementById('chat-bar-bottom').scrollIntoView(true)
}

const sendButton=()=>{
    renderUserMessage(userInput.value)
    userInput.value=''
}

