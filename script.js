var i = '500px';

document.onmousemove = function (e) {
    let card = document.querySelector('.card');
    var x = e.clientX;
    var y = e.clientY;
    if (x > 250 && x < 400 && y > 250 && y < 400) {
        card.style.transform = 'perspective(' + i + ') rotateY(' + (x / 10) + 'deg) rotateX(' + (-y / 10) + 'deg)';
    }
    else if (x > 250 && x < 400 && y > 100 && y < 250) {
        card.style.transform = 'perspective(' + i + ') rotateY(' + (x / 10) + 'deg) rotateX(' + (-y / 10) + 'deg)';
    }
    else if (x > 100 && x < 250 && y > 100 && y < 250) {
        card.style.transform = 'perspective(' + i + ') rotateY(' + (x / 10) + 'deg) rotateX(' + (-y / 10) + 'deg)';
    }
    else if (x > 100 && x < 250 && y > 250 && y < 400) {
        card.style.transform = 'perspective(' + i + ') rotateY(' + (x / 10) + 'deg) rotateX(' + (-y / 10) + 'deg)';
    }
    else {
        card.style.transform = 'perspective(' + i + ') rotateY(0deg) rotateX(0deg)';
    }
}