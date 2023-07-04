import { saveFeedback } from './feedbackModule.js'
const feedbackForm=document.getElementById('feedbackForm')
const successMessage=document.getElementById('successMessage')
feedbackForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const message=document.getElementById('message').value
    const feedback={
        name,
        email,
        message
    }
    saveFeedback(feedback)
    feedbackForm.reset()
    successMessage.classList.remove('hidden')
})