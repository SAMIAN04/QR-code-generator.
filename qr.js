const btn = document.getElementById(`btn`);
const qr = document.getElementById(`qr`);
const input = document.getElementById(`input`).value;
const qrImg = document.getElementById(`qrimg`);
const hy = document.getElementById(`hy`)
btn.addEventListener(`click`, generate);

function generate() {
    if (input != ``) {
       hy.innerHTML =  ''
      qrImg.src= `https://quickchart.io/qr?text=${input}`
      console.log(qrImg.src);
    }
    else{
        hy.innerHTML = `enter some text` 
        qrImg.src = ``
    }
   
}
console.log(input.value);
