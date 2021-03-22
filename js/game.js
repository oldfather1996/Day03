var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var speed = prompt('vui lòng nhập speed mà bạn muốn ')
user = {
    x: 100,
    y: 300,
}

setInterval(start, speed);

function start() {
    context.clearRect(0, 0, 300, 600)
    context.fillStyle = 'red';
    context.fillRect(user.x, user.y, 25, 25);
    keepmoving();
}
function keepmoving() {
    if (user.x <= 0 || user.x + 25 >= 300 || user.y <= 0 || user.y + 25 >= 600) {
        console.log('U lose');
        context.clearRect(0, 0, 300, 600)
        context.fillStyle = 'red';
        context.fillRect(user.x, user.y, 25, 25);
    }
}

document.addEventListener("keydown", key => {
    switch (key.keyCode) {
        case 37:
            if (user.x > 0)
                user.x -= 5;
            break;
        case 38:
            if (user.y > 0)
                user.y -= 5;
            break;
        case 39:
            if (user.x + 25 < 300)
                user.x += 5;
            break;
        case 40:
            if (user.y + 25 < 600)
                user.y += 5;
            break
    }
});