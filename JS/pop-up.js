const loginBtn = document.getElementById('loginBtn')
const popUp = document.querySelector('.pop-up')
const popUpWindow = document.querySelector('.pop-up__window')
const reg = document.querySelector('.pop-up__window__reg')
const windowTitle = document.querySelector('.pop-up__window__title')
const socialBtn = document.querySelector('.pop-up__window__sign-via-btn')
const windowHr = document.querySelector('.pop-up__window__hr')
const signBtn = document.getElementById('sign-in')
const lastParagraph = document.querySelector('.pop-up__window__reg_text')
const lastParagraphLink = document.querySelector('.pop-up__window__reg_link')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')


loginBtn.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
    popUpWindow.style.top = 165 + 'px'
})

popUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('pop-up')) {
        popUp.classList.toggle('hidden')
        popUpWindow.style.top = -665 + 'px'
    }
})

reg.addEventListener('click', () => {
    toggleTitle();
    socialBtn.classList.toggle('hidden');
    socialBtn.classList.toggle('h0');
    windowHr.classList.toggle('hidden');
    windowHr.classList.toggle('h0');
    toggleBtnValue();
    document.querySelector('.form_link').classList.toggle('hidden');
    document.querySelector('.form_link').classList.toggle('h0');
    toggleLastParagraph();
})
signBtn.addEventListener('click', () => {
    alert(`Your email:${email.value} and password:${passwordInput.value}`)
})


function toggleTitle() {
    if (windowTitle.innerHTML === 'Log in to your account') {
        windowTitle.innerHTML = 'Create account';
    } else {
        windowTitle.innerHTML = 'Log in to your account';
    }
}

function toggleBtnValue() {
    if (signBtn.value === 'Sign In') {
        signBtn.value = 'Sign Up'
    } else {
        signBtn.value = 'Sign In'
    }
}

function toggleLastParagraph() {
    if (lastParagraph.innerHTML === 'Don’t have an account?') {
        lastParagraph.innerHTML = 'Already have an account?'
        lastParagraphLink.innerHTML = 'Log in'
    } else {
        lastParagraph.innerHTML = 'Don’t have an account?'
        lastParagraphLink.innerHTML = 'Register'
    }
}