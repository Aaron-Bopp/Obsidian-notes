---
creation date: 2021-08-01
note-type: 
- evergreen-note
- topic-note
aliases:
- 
embedded:
- [[self-hate]]
- [[self-love]]
---
 
##### [[self-image]] `=length(this.file.inlinks) + length(this.file.outlinks)`

[[Self]]-image is way that you view yourself internally. It includes things like how you look, what you want to be. It may be instep or out of step with how you view yourself externally, or your [[self-perception]]. [[Self]]-image can be influenced by things like [[trauma]], [[gender dysphoria]], and [[body dysmorphia]].

**Status**:: #EVER/SEED 
**Related-Topics**:: [[self]]
**Last Edited**:: *`=this.file.mtime`*
##### [[self-image]] `=length(this.file.inlinks)` 
- [[A mismatch between your self-image and the way others percieve you destroys self-image]]
- [[My self-image is purely based on other's perceptions of me]]
- ![[self-hate#self-hate length self-hate file inlinks]]
- ![[self-love#self-love length this file inlinks]]

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


