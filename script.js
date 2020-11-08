const questionButton = document.querySelector('.Questionbutton')
const questionPopup = document.querySelector('.questionPop')
const close = document.querySelector('.close')

console.log(questionButton)
questionButton.addEventListener('click', () =>
{
    questionPopup.style.display = 'flex'
})

close.addEventListener('click',() =>
{
    questionPopup.style.display = 'none'
})