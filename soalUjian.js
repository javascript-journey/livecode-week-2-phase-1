class Journal{
	constructor(title,author,totalPage){		
		this.title = title
		this.author = author
		this._totalPage = totalPage
		this._readingDays = 0
		this.isAvail = true
	}
	get totalPage () {
		if (this._totalPage > 200) {
			return `Banyak halamannya capek ngitungnya`
		}else{
			return this._totalPage
		}
	}
	set readingDays(readingDays){
		this.readingDays = Math.ceil(this._totalPage / 100) 
	}

	
}
class Biography{
	constructor(title,author,totalPage,figure){		
		this.title = title
		this.author = author
		this._totalPage = totalPage
		this.figure = figure
		this._readingDays = 0
		this.isAvail = true
	}
	get totalPage () {
		if (this._totalPage > 200) {
			return `Banyak halamannya capek ngitungnya`
		}else{
			return this._totalPage
		}
	}
	set readingDays(readingDays){
		this.readingDays = Math.ceil(this._totalPage / 100) 
	}
}
class History{
	constructor(title,author,totalPage,figure){		
		this.title = title
		this.author = author
		this._totalPage = totalPage
		this.figure = figure
		this._readingDays = 0
		this.isAvail = true
	}
	get totalPage () {
		if (this._totalPage > 200) {
			return `Banyak halamannya capek ngitungnya`
		}else{
			return this._totalPage
		}
	}	
	set readingDays(readingDays){
		this.readingDays = Math.ceil(this._totalPage / 100) 
	}
	
}

class perpustakaan {
	constructor(nama,alamat,book){		
		this.nama = nama
		this.alamat = alamat
		this.book = book
	}
}
var newJurnal = new Journal(
	'Jatuh Bangung Seorang Fullstack', 
	'Kang Udin', 
	89)

var newBiography = new Biography(
	'Orang Dibalik Apple', 
	'Mas Bejo', 
	327, 
	'Steve Wozniak')

var newHistory = new History(
	'Awal Peradaban Callback', 
	'Bang Togar', 
	127, 
	'Middle Earth')

let book = [newJurnal,newBiography,newHistory]

var perpus = new perpustakaan(
	'Perpustakaan Javascript', 
	'Pondok Indah', book)

'use strict';

const fs = require('fs')



let data = JSON.stringify(perpus.book, null, 2);  
fs.writeFileSync('books.json', data);  


let rawData = fs.readFileSync('books.json')
let newbook = JSON.parse(rawData)
console.log(newbook)












