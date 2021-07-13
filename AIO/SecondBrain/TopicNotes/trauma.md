---
creation date: 2021-06-12
modification date: Saturday 12th June 2021 23:07:02
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[mental health]]
embedded:
- [[religious trauma]]
---
 
###### [[trauma]]


**Status**:: #EVER/SEED
###### [[trauma]] `=length([[trauma]].file.inlinks)` 
- [[early childhood]]
- ![[religious trauma#religious trauma length religious trauma file inlinks]]
- Defense mechanisms
	- [[Explaining emotion can just be a way of escaping the situation]]

#### Notes not yet in outline
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

	return [year, month, day].join('-');
}

function wrap(name) {
	return '[[' + name + ']]'
}
function getIO(file) {
	return `${file.inlinks.length}/${file.outlinks.length}`
}
//includes first called file as last element
function getEmbeds(name){
	const file = dv.pages().where(f => f.file.name === name)[0]
	let embeds = file.embedded
	console.log(embeds)
	if (embeds == undefined) {
		return [file]
	}
	// prevent infinite loops if currentNote is included in embeds
	embeds = embeds.filter(l => name !== l.path)
	return embeds.map((l) => getEmbeds(l.path)).concat([file]).flat()
}
const allEmbeds = getEmbeds(thisFile.file.name)
const allOutlinks = allEmbeds.map(f => f.file.outlinks).flat()
const allPaths = allOutlinks.map(l => l.path)
function defaultTable(folder) {
	dv.table([folder, "I/O", "Edited", "Created"], 
		dv.pages(wrap(thisFile.file.name))
		.where(p => {
			return !allPaths.contains(p.file.path) && p.file.path.contains(folder)
		})
		.map(p => [p.file.link, getIO(p.file), p.file.mtime, formatDate(p["creation date"])]))
}
function statusTable(folder) {
	dv.table([folder, "I/O", "Status", "Edited", "Created"], 
		dv.pages(wrap(thisFile.file.name))
		.where(p => {
			return !allPaths.contains(p.file.path) && p.file.path.contains(folder)
		})
		.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
}
statusTable("EvergreenNotes")
defaultTable("ContentNotes")
```