const generate_button = document.querySelector('#generate_btn');
let color_text = document.querySelector('#color-show')

const generateHEX = () => {
    let res = ""
    const char = "ABCDEFabcdef0123456789";
    const charLength = char.length;

    for (let i = 0; i < 6; i++) {
        res += char.charAt(Math.floor(Math.random() * charLength));
    }

    const finished = '#' + res;

    document.body.style.backgroundColor = finished;
    color_text.textContent = finished;
}

generate_button.addEventListener('click', generateHEX);