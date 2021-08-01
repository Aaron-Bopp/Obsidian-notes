---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- anxious
embedded:
- [[social anxiety]]
- [[social discomfort]]
---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/GREEN 
**Related-Topics**:: [[mental health]], [[mental disorders]]
**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[Your anxiety is telling you everything that could go wrong not what will go wrong]]
- [[Anxiety isn't irrational it's just overcompensation]]
	- [[Anxiety should be a tool at your disposal not an impedance to your life]]
	- [[Your anxiety knows your insecurities better than you do]]
- How [[anxiety]] manifests
	- ![[social anxiety#this file link length this file inlinks]]
	- ![[social discomfort#this file link length this file inlinks]]
	- [[Rejection Sensitivity]]
	- Overthinking
	- [[Agoraphobia]]
- Comorbid conditions
	- [[OCD]]
	- [[depression]]
	- [[ADHD]]
- Causes
	- [[childhood trauma]]
		- [[Early childhood trauma causes us to make wide assumptions about the world]]
	- [[neurodivergency]]
	- [[Neuroscience]]
		- [[How Neuroscience impacts our daily lives]]

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
	// prevent infinite loops if currentNote is included in embeds and crash if empty list
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
