window.onload = function () {
    // elements
    const canvas = document.getElementById('board');
    const clearBtn = document.getElementById('clear');
    const colorIpt = document.getElementById('color');
    const ctx = canvas.getContext('2d');

    let cw = canvas.width;
    let ch = canvas.height;

    let hold = false; // state

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000'; // set default 'black'
   
    canvas.addEventListener('mousedown', (e) => {
        hold = true;
        let pos = canvas.getBoundingClientRect();
        let x = e.clientX - pos.left;
        let y = e.clientY - pos.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
    });

    canvas.addEventListener('mousemove', function (e) {
        if (hold) {
            let pos = canvas.getBoundingClientRect();
            let x = e.clientX - pos.left;
            let y = e.clientY - pos.top;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', () => {
        hold = false;
    });

    // On Clear
    clearBtn.addEventListener('click', () => {
        if (confirm('Are you sure?')) {
            ctx.clearRect(0, 0, cw, ch);
        }
    });

    // Change color
    colorIpt.addEventListener('change', function () {
        ctx.strokeStyle = this.value;
    });
}