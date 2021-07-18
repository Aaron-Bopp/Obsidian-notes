---
creation date: 2021-06-28
modification date: Monday 28th June 2021 18:53:45
note-type: 
- evergreen-note
- topic-note
aliases:
- christian
- catholicism
- 
embedded:
- [[Deconstruction (Christianity)]]
---
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`



**Status**:: #EVER/SEED
**Parent-Topics**:: [[religion]]
**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[The biblical christian God is evil and does not deserved to be worshipped]]
- [[the politicization of the christian church]]
	- [[Evangelicalism]]
		- [[The brain is powerful enough to create supernatural experiences]]
	- [[Non-faith issues have been co-opted to keep people in the christian church]]
	- [[People have been conditioned to believe the bible has to be infallible]]
		- [[The bible is god breathed]]
- [[The many transgressions of the christian church]]
	- [[Fear of hell is baked into Christianity]]
	- [[Christians struggle to feel empathy because they must believe that non-christians are going to hell]]
- [[Jesus' teachings are anti-thetical to the modern christian church]]
	- [[The church will fail if christians keep aligning themselves with hate instead of love]]
	- [[Loving a a non-believer requires loving the fact that they are going to hell]]
- ![[Deconstruction (Christianity)#this file link length this file inlinks]]

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
