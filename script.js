//launch vr
const scrLaunchVR = document.querySelector('.screen_launch-vr');
const logo = document.querySelector('.logo');
function hideLaunchScr() {
    scrLaunchVR.classList.add('hidden');
    setTimeout(() => {
        logo.classList.add('visible');
        //progress fake
        let progressCount = 0;
        let interval = setInterval(() => {
            if (progressCount >= 100) {
                clearInterval(interval);
                hidePreloaderScr();
                showGameScr();
            }
            setProgress(progressCount);
            progressCount += 10;
        }, 200)
    }, 200);
};

//preloader
const scrPreloader = document.querySelector('.screen_preloader');
function hidePreloaderScr() {
    scrPreloader.classList.add('hidden')
};

//progress
const progressLine = document.querySelector('.preloader-bar__line');
function setProgress(progress) {
    progressLine.setAttribute('style', `width:${progress}%`);
}

//game
const scrGame = document.querySelector('.screen__game');
function hideGameScr() {
    scrGame.classList.add('hidden');
};
function showGameScr() {
    scrGame.classList.remove('hidden')
};
//promo screen 
const scrPromo = document.querySelector('.screen__promo');
function showPromoScr() {
    scrPromo.classList.remove('hidden');
};
function hidePromoScr() {
    scrPromo.classList.add('hidden');
};
//promocode copy
const btnPromo = document.querySelector('.btn_promo')
function copy(el) {
    navigator.clipboard.writeText(`${el.textContent}`)
    .then(()=> {
        btnPromo.classList.add('promo-ok');
        el.textContent = 'Промокод скопирован'
    })
}


