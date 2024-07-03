//establecer conteo inicial
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (i) {
        const styles = i.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = '#5D3FD3';
        } else if (count < 0) {
            value.style.color = '#800020';
        } else {
            value.style.color = '#7DF9FF';
        }
        value.textContent = count;
    });
});