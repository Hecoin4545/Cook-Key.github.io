const redBtn = document.querySelector("#color-scheme-1");
const backgroundOfWebsite = document.querySelector('.body');
const blackBtn = document.querySelector('#color-scheme-2');
const greenBtn = document.querySelector('#color-scheme-3');
const purpleBtn = document.querySelector('#color-scheme-4');

const img = document.querySelector('.illust')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')
const img5 = document.querySelector('#img5')

const links = document.querySelector('.head')

const changingBgColor = (bg1, bg2, bg3, bg4) => {
    backgroundOfWebsite.classList.remove(bg1)
    backgroundOfWebsite.classList.remove(bg2)
    backgroundOfWebsite.classList.remove(bg3)
    backgroundOfWebsite.classList.add(bg4)
}

const changingImageLogo = (logo, logo1, logo2, logo3, logo4) => {
    logo.classList.remove('illust')
    logo1.classList.add('illust')
    logo2.classList.add('illust')
    logo3.classList.add('illust')
    logo4.classList.add('illust')
}

redBtn.addEventListener('click', () => {
    changingBgColor('blackColor', 'greenColor', 'purpleColor', 'redColor')
    links.style.color = 'black'
    changingImageLogo(img2, img1, img3, img4, img5)
})

blackBtn.addEventListener('click', () => {
    changingBgColor('greenColor', 'purpleColor', 'redColor', 'blackColor')
    changingImageLogo(img3, img2, img1, img4, img5)
    links.style.color = 'white'
})

greenBtn.addEventListener('click', () => {
   changingBgColor('purpleColor' , 'redColor' , 'blackColor' , 'greenColor')
    links.style.color = 'black'
    changingImageLogo(img4 , img3 , img2 , img1 , img5)

})

purpleBtn.addEventListener('click', () => {
    changingBgColor('redColor' , 'blackColor' , 'greenColor' , 'purpleColor' )
    changingImageLogo(img5 , img3 , img2 , img1 , img4)
    links.style.color = 'black'
})