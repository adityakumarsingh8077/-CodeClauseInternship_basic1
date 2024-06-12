const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth:true
});

function filter(category) {
    const pics = document.querySelectorAll('.pic');
    pics.forEach(pic => {
        if (category === 'all') {
            pic.style.display = 'block';
        } else {
            if (pic.classList.contains(category)) {
                pic.style.display = 'block';
            } else {
                pic.style.display = 'none';
            }
        }
    });
}

// var fullImgBox = document.getElementById("fullImgBox");
// var fullImg = document.getElementById("fullImg");
function openFullImg(src) {
    const fullImgBox = document.getElementById('fullImgBox');
    const fullImg = document.getElementById('fullImg');
    fullImgBox.style.display = 'flex';
    fullImg.src = src;
}

function closeFullImg() {
    document.getElementById('fullImgBox').style.display = 'none';
}


 