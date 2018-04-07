// DAFTAR BUKU
class DaftarBuku {

  constructor(title, author, total_page, reading_days){
    this.title = title;
    this.author = author;
    this._totalPages = total_page;
    this.reading_days = reading_days;
    this.isAvail = true;
  }

  get jumlahHalaman (){
    var jumlah = "";

    this._totalPages < 200 ? jumlah = this._totalPages : jumlah = "Banyak halamannya capek ngitungnya"
    return jumlah;
  }

}

class Biography extends DaftarBuku{

  constructor(title, author, total_page, reading_days, figure){
    super(title, author, total_page, reading_days)
    this.figure = figure;
  }

}

class History extends DaftarBuku{

  constructor(title, author, total_page, reading_days, century){
    super(title, author, total_page, reading_days)
    this.century = century;
  }

}

class Journal extends DaftarBuku{

  constructor(title, author, total_page, reading_days){
    super(title, author, total_page, reading_days)
  }

}


// PERPUSTAKAAN
class Perpustakaan {

  constructor(nama, alamat, daftarBuku) {
    this.nama = nama;
    this.alamat = alamat;
    this.book = daftarBuku;
    this.pembaca = [];
  }

}

class Readers{

  constructor(nama, alamat, notelp){
    this.nama = nama;
    this.alamat = alamat;
    this.notelp = notelp;
  }

}

var readingBiography = Math.ceil(327 / 100);
var readingHistory = Math.ceil(127 / 100);
var readingJournal = Math.ceil(89 / 100);

var biography = new Biography('Orang dibalik Apple','Mas Bejo',327,`${readingBiography}`,'Steve Wozniak');
var history = new History('Awal Peradaban Callback','Bang Togar',127,`${readingHistory}`,'Middle Earth');
var journal = new Journal('Jatuh Bangun Seorang Fullstack','Kang Udin',89,`${readingJournal}`);
var daftarBuku = [journal, biography, history];

var perpustakaan = new Perpustakaan('Perpustakaan Javascript','Pondok Indah',daftarBuku);

console.log("===> RELEASE 0 \n");
console.log(biography.jumlahHalaman +"\n") // 'Banyak halamannya capek ngitungnya'
console.log(journal.jumlahHalaman +"\n") // 89

console.log(perpustakaan.book)
