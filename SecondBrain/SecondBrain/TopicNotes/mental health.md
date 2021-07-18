---
creation date: 2021-05-29
modification date: Saturday 29th May 2021 05:01:37
embedded: 
- [[anxiety]]
- [[ADHD]]
- [[trauma]]
- [[my emotions]]
- [[yoga]]
- [[self-improvement]]
note-type: 
- evergreen-note
- topic-note
---

##### [[mental health]] `=length([[mental health]].file.inlinks) + length([[mental health]].file.outlinks)`

[[mental health]] covers concepts that vary from [[mental disorders]] to [[neurodivergency]] to [[spirituality]] and how it effects us. 

**Status**:: #EVER/GREEN/GROWING 
**Related-Topics**:: [[INDEX]], [[Neuroscience]]
**Last Edited**:: *`=[[mental health]].file.mtime`*
##### [[mental health]] `=length([[mental health]].file.inlinks)` 

^79d947

- [[mental disorders]]
	- ![[anxiety#this file link length this file inlinks]]
	- ![[ADHD#ADHD length ADHD file inlinks]]
	- ![[trauma#trauma length trauma file inlinks]]
- ![[self-improvement#self-improvement length this file inlinks]]
- Techniques to improve mental health
	- [[Tips for concentration]]
	- [[mindfullness]]
	- ![[yoga#yoga length this file inlinks]]
- [[Sadness is enlightenment and happiness is delusion]]
- ![[my emotions#my emotions length this file inlinks]]

### <hr class="dataviews"/>
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
const statusDict = {
	"GREEN":0,
	"SPROUT":1,
	"SEED":2
}
const statusLevel = (status) => {
	const [_, growth, state] = status.split("/")
	return statusDict[growth]
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
	embeds = embeds.filter(l => l !== null && name !== l.path )
	return embeds.map((l) => getEmbeds(l.path)).concat([file]).flat()
}
const allEmbeds = getEmbeds(thisFile.file.name)
const allOutlinks = allEmbeds.map(f => f.file.outlinks).flat()
const allPaths = allOutlinks.map(l => l.path)
function notLinkedPages(folder) {
	return dv.pages(wrap(thisFile.file.name))
			.where(p => {
				return !allPaths.contains(p.file.path) && 
				p.file.path.contains(folder) 
			})
			.sort(p => p.file.inlinks.length + p.file.outlinks.length, 'desc')
}
function contentNotesTable(folder) {
	let pages = notLinkedPages(folder)
	if (pages.length > 0) {
		dv.table([folder, "i/o", "edited", "created"], 
			pages
			.map(p => [p.file.link, getIO(p.file), p.file.mtime, formatDate(p["creation date"])]))
	}
}
function statusTable(folder) {
	let pages = notLinkedPages(folder)
	if (pages.length > 0) {
		dv.table([folder, "I/O", "Status", "Edited", "Created"], 
			pages
			.sort(p => statusLevel(p.status))
			.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
	}
}
statusTable("TopicNotes")
statusTable("EvergreenNotes")
contentNotesTable("ContentNotes")
```
