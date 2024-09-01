const button = document.getElementById("button");
const input = document.querySelector(".input1");
var text = document.querySelector(".text");
var removes = document.querySelectorAll(".remove");

// Menambahkan elemen to do list dan remove button
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    tambahText();
  }
});
function tambahText(label) {
  var label = input.value;
  if (label) {
    const element = document.createElement("div");
    element.classList.add("text1");
    var removes = document.querySelector(".remove");
    text.appendChild(element);
    var html = `<div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1" id="label"
        >${label}</label>
      
      <i data-feather="trash-2" class="remove"></i>
    </div>`;
    element.innerHTML = html;
    feather.replace();
    Remove();
    check();
  }
}

function Remove() {
  var removes = document.querySelectorAll(".remove");
  for (let i = 0; i < removes.length; i++) {
    removeButton = removes[i];
    removeButton.addEventListener("click", hapusList);
  }
}
function hapusList(e) {
  var removeList = e.target.parentElement.parentElement;
  removeList.remove();
}
button.addEventListener("click", tambahText);
// Menambahkan coretan ketika ceklis di klik
const ceklis = document.getElementById("exampleCheck1");

function check() {
  const ceklis = document.querySelectorAll("#exampleCheck1");
  for (let i = 0; i < ceklis.length; i++) {
    ceklis[i].addEventListener("change", ngecek);
  }
}
function ngecek(e) {
  const nama = e.target.nextElementSibling;
  if (e.target.checked) {
    nama.style.textDecoration = "line-through";
  } else {
    nama.style.textDecoration = "none";
  }
}
// clear
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  var konfirmasi = confirm("Apakah anda mau membuang semua nya?");
  if (konfirmasi) {
    buang();
  } else {
  }
});

function buang() {
  var text1 = document.querySelectorAll(".text1");
  text1.forEach((element) => {
    element.remove();
  });
}
