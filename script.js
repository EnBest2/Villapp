
const canvas = document.getElementById("rajzvaszon");
const ctx = canvas.getContext("2d");

function addSymbol(type) {
    ctx.fillStyle = "black";
    switch(type) {
        case 'kapcsolo':
            ctx.fillRect(100, 100, 40, 10);
            break;
        case 'dugalj':
            ctx.beginPath();
            ctx.arc(200, 100, 15, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'lampa':
            ctx.beginPath();
            ctx.moveTo(300, 100);
            ctx.lineTo(310, 120);
            ctx.lineTo(290, 120);
            ctx.closePath();
            ctx.fill();
            break;
    }
}

function drawLine() {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.lineTo(500, 100);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage() {
    const link = document.createElement('a');
    link.download = 'kapcsolasi_rajz.png';
    link.href = canvas.toDataURL();
    link.click();
}
