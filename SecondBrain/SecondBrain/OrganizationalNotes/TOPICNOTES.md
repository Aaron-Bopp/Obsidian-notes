---
creation date: 2021-07-29
note-type: 
- organizational-note
aliases:
- 
embedded:
- 
---

```dataviewjs
const thisFile = dv.pages().where(f => f.file.path == 'SecondBrain/INDEX.md')[0]
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
const statusDict = {
	"GREEN":0,
	"SPROUT":1,
	"SEED":2
}
const statusLevel = (status) => {
	if (!status) {return 0}
	try {
		let [_, growth, state] = status.split("/")
		return statusDict[growth]
	} catch (TypeError){
		return 0
	}
	return 0
}
//includes first called file as last element
function getEmbeds(name){
	const file = dv.pages().where(f => f.file.name === name)[0]
	let embeds = file.embedded
	if (embeds == undefined) {
		return [file]
	}
	// prevent infinite loops if currentNote is included in embeds
	embeds = embeds.filter(l => l !== null && name !== l.path )
	return embeds.map((l) => getEmbeds(l.path)).concat([file]).flat()
}
const allEmbeds = getEmbeds(thisFile.file.name)
const allOutlinks = allEmbeds.map(f => f.file.outlinks).flat()
const allPaths = allOutlinks.map(l => l.path)
function notLinkedPages(folder) {
	return dv.pages()
			.where(p => {
				return !allPaths.contains(p.file.path) && 
				p.file.path.contains(folder) 
			})
			.sort(p => p.file.inlinks.length + p.file.outlinks.length, 'desc')
}

let pages = dv.array(notLinkedPages('TopicNotes'))
if (pages.length > 0) {
	dv.table(['Topic Seeds', "I/O", "Status", "Edited", "Created"], 
		pages
		.where(p => p.file.outlinks.length <= 1)
		.sort(p => p.file.name)
		.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
	dv.table(['Growing Topics', "I/O", "Status", "Edited", "Created"], 
		pages
		.where(p => p.file.outlinks.length > 1)
		.sort(p => p.file.name)
		.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
	

}
```


