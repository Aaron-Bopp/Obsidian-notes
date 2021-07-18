---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 23:07:02
note-type: 
- evergreen-note
- organizational-note
- topic-note 
embedded:
- [[personal knowledge management]]
- [[mental health]]
- [[Neuroscience]]
- [[Christianity]]
---

This is a constantly updated index of entry points and topics for my personal flavor of [[Zettlekassen]]/[[second brain]]/[[personal knowledge management]] system.

# Entry Points
- [[QUICKNOTE]]
- [[Journal]]
- [[TODO]]
	- [[my TO(DO) and EVER(GREEN) structure]]
- [[SEARCH]]
	- [[RELATED-TOPICS]]
	- [[Dataview#Get notes created in the last week]]
- Forest
	- [[EVERGREENS]]
	- [[EVERSPROUTS]]
	- [[EVERSEEDS]]
- ![[Dataview#Get number notes with every note-type]]

# Topic Outlines
## <hr class="embedded"/>
 ![[personal knowledge management#personal knowledge management length personal knowledge management file inlinks]]
 ## <hr class="embedded"/>
 ![[mental health#mental health length mental health file inlinks]]
 ## <hr class="embedded"/>
 ![[Neuroscience#this file link length this file inlinks]]
 ## <hr class="embedded"/>
 ![[Christianity#this file link length this file inlinks]]
 ##
 [[Obsidian (software)]]
 
 # Notes not in this outline
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
	return '"SecondBrain/' + name + '"'
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
	try {
		const [_, growth, state] = status.split("/")
		return statusDict[growth]
	} catch {
		return ""
	}
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
	return dv.pages(wrap(folder))
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


