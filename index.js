let interval;
const input = document.getElementById('input');

function main() {
    document.addEventListener('mousedown', e => {
        if (e.target !== document.getElementById('input')) {
            resetTimer();
        }
    });
    input.addEventListener('input', () => {
        console.log(input.value);
        input.value = input.value.replaceAll(/[^0-9]/g, '');
    });
}

function resetTimer() {
    clearInterval(interval);
    let count = input.value;
    document.getElementById('timer').textContent = count--;
    interval = setInterval(() => {
        if (count <= 0) {
            clearInterval(interval);
        }
        document.getElementById('timer').textContent = count--;
    }, 1000);
}

main();