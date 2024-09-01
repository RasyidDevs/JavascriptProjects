
function hitung(){
    let pu = document.getElementById("pu").value
    let kbm = document.getElementById("kbm").value
    let ppu = document.getElementById("ppu").value
    let pk = document.getElementById("pk").value
    let lbi = document.getElementById("lbi").value
    let lbe = document.getElementById("lbe").value
    let pm = document.getElementById("pm").value
    let button = document.querySelector(".button")
    let result = document.querySelector(".result")
    var input = document.getElementsByTagName("input")
    if(
       isNaN(pu)  ||  pu.trim() == '' ||
       isNaN(kbm) || kbm.trim() == '' ||
       isNaN(ppu) || ppu.trim() == '' ||
       isNaN(pk)  || pk.trim()  == '' || 
       isNaN(lbi) || lbi.trim() == '' || 
       isNaN(lbe) || lbe.trim() == '' ||  
       isNaN(pm)  || pm.trim()  == '' 
    ){
        var errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = '<p>Anda memasukan bukan angka atau input kosong</p>';
        let button = document.querySelector('button'); // Adjust this selector as needed
        button.insertAdjacentElement('afterend', errorDiv);
        setTimeout(()=>{
            errorDiv.remove()
        },1500)
    }
    pu = parseFloat(pu);
    kbm = parseFloat(kbm);
    ppu = parseFloat(ppu);
    pk = parseFloat(pk);
    lbi = parseFloat(lbi);
    lbe = parseFloat(lbe);
    pm = parseFloat(pm);
    var hasil = (pu+kbm+ppu+pk+lbi+lbe+pm) / 7 
    result.innerHTML = hasil.toFixed(2)
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
function hitung2(){
    let pu = document.getElementById("pu").value
    let kbm = document.getElementById("kbm").value
    let ppu = document.getElementById("ppu").value
    let pk = document.getElementById("pk").value
    let lbi = document.getElementById("lbi").value
    let lbe = document.getElementById("lbe").value
    let pm = document.getElementById("pm").value
    let button = document.querySelector(".button")
    let result = document.querySelector(".result")
    var input = document.getElementsByTagName("input")
    if(
       isNaN(pu)  ||  pu.trim() == '' ||
       isNaN(kbm) || kbm.trim() == '' ||
       isNaN(ppu) || ppu.trim() == '' ||
       isNaN(pk)  || pk.trim()  == '' || 
       isNaN(lbi) || lbi.trim() == '' || 
       isNaN(lbe) || lbe.trim() == '' ||  
       isNaN(pm)  || pm.trim()  == '' 
    ){
        var errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = '<p>Anda memasukan bukan angka atau input kosong</p>';
        let button = document.querySelector('.button'); 
        button.insertAdjacentElement('afterend', errorDiv);
        setTimeout(()=>{
            errorDiv.remove()
        },1500)
    }
    pu = parseFloat(pu);
    kbm = parseFloat(kbm);
    ppu = parseFloat(ppu);
    pk = parseFloat(pk);
    lbi = parseFloat(lbi);
    lbe = parseFloat(lbe);
    pm = parseFloat(pm);
    var hasil = (((pu+kbm+ppu+pk)/4) + ((lbi+lbe)/2) + pm) / 3
    result.innerHTML = hasil.toFixed(2)
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}
