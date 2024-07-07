const addText = document.getElementById('text');
const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    setTimeout(() => {
        addText.textContent = 'ボタンをクリックしました';
    }, 2000);
});