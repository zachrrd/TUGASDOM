const namaInput = document.getElementById('namaInput');
const tambahButton = document.getElementById('tambahButton');
const daftarNama = document.getElementById('daftarNama');

let daftarNamaArray = [];

tambahButton.addEventListener('click', () => {
  const namaBaru = namaInput.value;
  if (namaBaru !== '') {
    daftarNamaArray.push(namaBaru);
    namaInput.value = '';

   
    const li = document.createElement('li');
    li.textContent = namaBaru;
    daftarNama.appendChild(li);
  }
});