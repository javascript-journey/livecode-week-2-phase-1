function Journal(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this._totalPages = obj._totalPages;
  this.readingDays = obj.readingDays;
  this.isAvail = true;
}

function Biography(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this._totalPages = obj._totalPages;
  this.readingDays = obj.readingDays;
  this.figure = obj.figure;
  this.isAvail = true;
}

function History(obj) {
  this.title = obj.title;
  this.author = obj.author;
  this._totalPages = obj._totalPages;
  this.readingDays = obj.readingDays;
  this.century = obj.century;
  this.isAvail = true;
}

function dataBuku(){
   this.arrayOfBook = []; 
}

dataBuku.prototype = {
  save:function(personBook){
    this.arrayOfBook.push(personBook);
  },
  getAll:function(){
    return this.arrayOfBook;
  }
};


 
Journal.prototype.toString = function(){
  return "["+this.title+"] author: " + this.author + ", _totalPages: " + this._totalPages + ", readingDays: " + this.readingDays+ ", figure: " + this.figure+ ", isAvail: " + this.isAvail + ", century: " + this.century;
};

Biography.prototype.toString = function(){
  return "["+this.title+"] author: " + this.author + ", _totalPages: " + this._totalPages + ", readingDays: " + this.readingDays+ ", figure: " + this.figure+ ", isAvail: " + this.isAvail + ", century: " + this.century;
};

History.prototype.toString = function(){
  return "["+this.title+"] author: " + this.author + ", _totalPages: " + this._totalPages + ", readingDays: " + this.readingDays+ ", figure: " + this.figure+ ", isAvail: " + this.isAvail + ", century: " + this.century;
};

var Journal = new Journal({
  title: "Jatuh Bangung Seorang Fullstack",
  author: "Kang Udin",
  _totalPages: 89,
  readingDays: Math.ceil(89 / 100),
});

var Biography = new Biography({
  title: "Orang Dibalik Apple",
  author: "Mas Bejo",
  _totalPages: 327,
  readingDays: Math.ceil(327 / 100),
  figure : "Steve Wozniak",
});

var History = new History({
  title: "Awal Peradaban Callback",
  author: "Bang Togar",
  _totalPages: 127,
  readingDays: Math.ceil(127 / 100),
  century : "Middle Earth",
});


var buku = new dataBuku();
buku.save(Journal);
buku.save(Biography);
buku.save(History);

console.log(buku.getAll());
