---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 15:25:40
note-type: 
  evergreen-note
  topic-note
embedded: 
- [[My Second Brain]]
---
###### [[second brain]] 

A second brain is a term that refers to a system of written thought that allows the writer to make permanent meaningful thought, access those thoughts in a meaningful way, and use as a conduit for new thought. 
#TO/DO/WRITE/LONGTERM Article with my flavor of [[personal knowledge management]]

**Status**:: #EVER/GREEN 
**Related-Topics**:: [[INDEX]], [[personal knowledge management]], [[web of thought]], [[Zettlekassen]]
**Last Edited**:: *`=this.file.mtime`*

###### [[second brain]] `=length([[second brain]].file.inlinks)`
- Why are you creating a Second Brain
	- Are you taking notes to collect content or to create content
		- [[Creating Thought with a Second Brain]]
		- [[Collecting Thought with a Second Brain]]
	- Starting your [[second brain]]
		- [[Write your notes like you're planting an evergreen forest]]
		- [[write what you think]]
		- [[Learning systems can be a gateway to creating thought]]
- Methods of Constructing a Second Brain
	- [[Zettlekassen]]
	- Notational Velocity
	- [[evergreen notes]]
- Tools for constructing a Second Brain
	- [[Obsidian (software)]]
		- [[Dual]]
	- Roam Research
	- Atom
- Tips
	- [[How to title your notes]]
	- [[How to write atomically]]
	- [[tags as a data structure]]
- ![[My Second Brain#My Second Brain length this file inlinks]]

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
### <hr class="references"/>
