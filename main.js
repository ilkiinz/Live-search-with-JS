document.querySelector("#txt").oninput = function () {
    const p = document.querySelector(".parag");
    const r = new RegExp(`${this.value}`, 'gi');
    p.innerHTML = p.textContent.replace(r, match => `<mark>${match}</mark>`);
};