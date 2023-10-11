let wheel = document.getElementById('wheel');
let spinning = false;

function spinWheel() {
    if (!spinning) {
        spinning = true;
        let deg = Math.floor(Math.random() * 360) + 720;
        wheel.style.transition = 'transform 3s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;

        setTimeout(() => {
            wheel.style.transition = 'none';
            let actualDeg = deg % 360;
            alert(`You landed on ${getSegment(actualDeg)}`);
            spinning = false;
        }, 3000);
    }
}

function getSegment(degrees) {
    let segments = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    let segmentSize = 360 / segments.length;
    let segmentIndex = Math.floor((degrees % 360) / segmentSize);
    return segments[segmentIndex];
}
