const gameBanner = document.querySelector('.gameBanner');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');

leftBtn.style.visibility = "hidden";

leftBtn.addEventListener("click", () => {
    let num = +gameBanner.dataset.num;
    num = num + -100;

    if (num === 0) {      
        leftBtn.style.visibility = "hidden";                
    } else {
        rightBtn.style.visibility = "";
    }

    gameBanner.dataset.num = num;
    gameBanner.style.transform = `translateX(${-num}vw)`;
});

rightBtn.addEventListener("click", () => {
    let num = +gameBanner.dataset.num;
    num = num + 100;

    if (num === 400) {
        rightBtn.style.visibility = "hidden";
    } else {
        leftBtn.style.visibility = "";
    }

    gameBanner.dataset.num = num;
    gameBanner.style.transform = `translateX(${-num}vw)`;
})

const pushGameImgsItem = document.querySelector('.pushGameImgsItem');
const pushGameLeftBtn = document.querySelector('.pushGameLeftBtn');
const pushGameRightBtn = document.querySelector('.pushGameRightBtn');

pushGameLeftBtn.style.visibility = "hidden";

pushGameLeftBtn.addEventListener("click", () => {
    let num = +pushGameImgsItem.dataset.add;
    num = num + -155;

    if (num === 0) {
        pushGameLeftBtn.style.visibility = "hidden";
    } else {
        pushGameRightBtn.style.visibility = "";
    }

    pushGameImgsItem.dataset.add = num;
    pushGameImgsItem.style.transform = `translateX(${-num}px)`;
})

pushGameRightBtn.addEventListener("click", () => {
    let num = +pushGameImgsItem.dataset.add;
    num = num + 155;

    if (num === 620) {
        pushGameRightBtn.style.visibility = "hidden";
    } else {
        pushGameLeftBtn.style.visibility = "";
    }

    pushGameImgsItem.dataset.add = num;
    pushGameImgsItem.style.transform = `translateX(${-num}px)`;
})

const loginPageMove = document.querySelector('.headerTopJoin > div:last-child');
const loginPageMove2 = document.querySelector('.login');

loginPageMove.addEventListener("click", () => {
    window.location.href = 'login.html';
});
loginPageMove2.addEventListener("click", () => {
    window.location.href = 'login.html';
});

const menu = document.querySelector('.headerTopMenu');
const gameList = document.querySelector('.gameList')
const CloseBtn = document.querySelector('.fa-x');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');

const HIDDEN = "hidden";
const OPEN = "open";

menu.addEventListener("click", () => {
    gameList.classList.add(OPEN);
    body.classList.add(HIDDEN);
    overlay.style.display = 'block';
})

CloseBtn.addEventListener("click", () => {
    gameList.classList.remove(OPEN);
    body.classList.remove(HIDDEN);
    overlay.style.display = 'none';
})

overlay.addEventListener("click", () => {
    gameList.classList.remove(OPEN);
    body.classList.remove(HIDDEN);
    overlay.style.display = 'none';
})

const bigIconBtn = document.querySelector('.fa-border-all');
const bigIcons = document.querySelector('.gameLink');
const smallIconBtn = document.querySelector('.smallIconsBtn');
const smallIcons = document.querySelector('.smallIconGameLink');

bigIconBtn.addEventListener("click", () => {
    bigIcons.style.display = 'flex';
    smallIcons.style.display = 'none';
})

smallIconBtn.addEventListener("click", () => {
    bigIcons.style.display = 'none';
    smallIcons.style.display = 'flex';
})
