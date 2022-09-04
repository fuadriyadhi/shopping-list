//tangkap element html
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

//tambahkan data ke subtitle

subtitle.innerHTML = new Date().toLocaleDateString();

//data list belanja
let data_list_belanja = [];

floating_button.addEventListener('click', function () {
  if (modal.style.display == 'none') {
    showModal();
    return;
  }

  //sembunyikan modal
  hideModal();
});

//menambahkan event listener pada modalbg
modal_bg.addEventListener('click', function () {
  hideModal();
});

//tambahkan listener submit ke addlist form
addlist_form.addEventListener('submit', function (event) {
  //stop reload page
  event.preventDefault();

  //tangkap value dari masing2 input field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  //push data ke list belanja
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  //clear input field
  event.target.barang.value = '';
  event.target.harga.value = '';

  hideModal();

  renderToHTML();
});

//show modal
function showModal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
  floating_button.style.transitionDuration = '1s';
}

function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#f280b6';
  floating_button.style.transform = 'rotate(0deg)';
}

//function delete pada array atau datalist belanja
function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHTML();
}

//render to html
function renderToHTML() {
  root.innerHTML = '';

  //perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
    <small>${e.tanggal}</small>
    <div>${e.nama_barang} <span>Rp. ${e.harga_barang}</span> </div>
    <button onclick="handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
}
