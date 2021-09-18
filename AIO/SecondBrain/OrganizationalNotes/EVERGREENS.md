---
creation date: 2021-07-05
parent: [[Dataview]]
note-type:
- organizational-note
---
```dataviewjs
const thisFile = dv.pages().where(f => f.file.path == dv.current().file.path)[0]
function formatDate(date){
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [month, day, year].join('-');
}

function wrap(name) {
	return '[[' + name + ']]'
}

function getEmbeds(name){
	const file = dv.pages().where(f => f.file.name === name)[0]
	if (file == undefined) {
		return [null]
	}
	let embeds = file.embedded
	if (embeds == undefined) {
		return [file]
	}
	// prevent infinite loops if currentNote is included in embeds
	embeds = embeds.filter(l => l !== null && name !== l.path )
	return embeds.map((l) => getEmbeds(l.path)).concat([file]).flat().filter(el => el != null)
}

function getIO(page) {
	let embeds = 0
	if (page.embedded){
		embeds = getEmbeds(page.file.name).length 
	}
	return `${page.file.inlinks.length}/${page.file.outlinks.length + embeds - 1}`
}
function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

function lastEdited (page) {
	let days = datediff(new Date(page.file.mtime), new Date())
	if (days === 0) {
		return "Today"
	} 
	return `${days} days ago`
	
}
function table(tag) {
	dv.table([tag, "I/O", "Last Edited", "Created"], 
		dv.pages(tag)
		.where(p => p.status === tag)
		.sort(p => p.file.inlinks.length + p.file.outlinks.length, 'desc')
		.map(p => [p.file.link, getIO(p), lastEdited(p), formatDate(p["creation date"]) ])
	)
}
["/PRUNE", "/GROWING", ""].forEach(t => table("#EVER/GREEN" + t))
```

