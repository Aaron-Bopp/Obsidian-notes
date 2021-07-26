
---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[second brain]]
---
 
##### [[My Second Brain]] `=length(this.file.inlinks) + length(this.file.outlinks)`

Since March 2021 I have become very interested in [[personal knowledge management]] and the concept of a [[web of thought]] so intricate that it creates a [[second brain]]. This is my structure and [[philosophy]] of how I will construct [[My Second Brain]]

**Status**:: #EVER/GREEN 
**Related-Topics**:: [[second brain]]
**Last Edited**:: *`=this.file.mtime`*
##### [[My Second Brain]] `=length(this.file.inlinks)` 
- Driving principals
	- [[Write your notes like you're planting an evergreen forest]]
	- [[write what you think]]
- General [[Philosophy]]
	- What is a [[second brain]]?
		- [[Why note storage is important]]
	- How to use a [[web of thought]]
		- [[Webs of thought are densely linked]]
	- What is [[personal knowledge management]]?
	- Why write [[evergreen notes]]?
	- How is this different than a [[Zettlekassen]]?
- Organization
	- [[Capture your fleeting thoughts]]
	- What is a [[content note]]?
	- What is a [[permanent note]]?
	- What is a [[topic note]]?
	- [[organizational notes]]
		- A [[Todo]] list
			- [[How to represent a todo list]]
		- [[index note]]
	- [[What is the difference between a evergreen note and a topic note]]
	- [[Note structures should be loosely defined]]
- Interacting with your [[second brain]]
	- [[Make your inbox into an entry point]]
	- [[my TO(DO) and EVER(GREEN) structure]]
	- Curation
		- [[How to title your notes]]
		- [[How to write atomically]]
	- Tags
		- [[how I use Obsidian tags]]
		- [[Tags should be general]]

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
		dv.table([folder, "I/O", "Edited", "Created"], 
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
