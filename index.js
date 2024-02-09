const BSi = document.querySelector('#BSi');

BSi.addEventListener('click',function () {
    alert('Hehehe Te amo Linda')
});

const BNo = document.querySelector('#BNo');

BNo.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    BNo.style.setProperty('top',randomY+'%');
    BNo.style.setProperty('left',randomX+'%');
    BNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})