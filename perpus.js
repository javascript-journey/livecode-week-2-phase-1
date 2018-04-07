class Perpus {
	getBook() {
		let fs = require('fs');

		this.book = fs.readFileSync('books.json', 'UTF-8');
	}
}

class Journal {
	getData() {
		let fs = require('fs');
		let data = fs.readFileSync('books.json', 'UTF-8');
		data = JSON.parse(data);

		this.title = data.Journal.title;
		this.author = data.Journal.author;
		this.totalPages = (data.Journal._totalPages > 200 ? 'Banyak halamannya capek ngitungnya' : data.Journal._totalPages);
		this.readingDays = data.Journal.readingDays;
	}
}

class Biography {
	getData() {
		let fs = require('fs');
		let data = fs.readFileSync('books.json', 'UTF-8');
		data = JSON.parse(data);

		this.title = data.Biography.title;
		this.author = data.Biography.author;
		this.totalPages = (data.Biography._totalPages > 200 ? 'Banyak halamannya capek ngitungnya' : data.Biography._totalPages);
		this.readingDays = data.Biography.readingDays;
		this.figure = data.Biography.figure;
	}
}

class History {
	getData() {	
		let fs = require('fs');
		let data = fs.readFileSync('books.json', 'UTF-8');
		data = JSON.parse(data);

		this.title = data.History.title;
		this.author = data.History.author;
		this.totalPages = (data.History._totalPages > 200 ? 'Banyak halamannya capek ngitungnya' : data.History._totalPages);
		this.readingDays = data.History.readingDays;
		this.century = data.History.century;
	}
}

let perpustakaan = new Perpus();
let journal = new Journal();
let biography = new Biography();
let history = new History();
journal.getData();
biography.getData();
history.getData();
console.log(biography.title)
console.log(biography.author)
console.log(biography.totalPages)
console.log(biography.readingDays)
