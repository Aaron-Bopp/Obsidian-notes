---
creation date: 2021-08-08
note-type: 
- evergreen-note
- topic-note
aliases:
- 
embedded:
- 
---
 
##### [[gender]] `=length(this.file.inlinks) + length(this.file.outlinks)`

> **Gender** - The range of characteristics pertaining to, and differentiating between, femininity and masculinity. Depending on the context, these characteristics may include biological sex, sex-based social structures (i.e., gender roles), or [[gender identity]] (the personal sense of one's own gender).
> [[1 What is Gender]]

> Gender is part social construct, part learned behaviors, and part biological processes which form very early in a person’s life.
> [[1 What is Gender]]


**Status**:: #EVER/GREEN/GROWING  
**Related-Topics**::
**Last Edited**:: *`=this.file.mtime`*
##### [[gender]] `=length(this.file.inlinks)` 
- [[Every person has an experience of gender]]
	- [[Gender is both an intrinsic experience and an necessary expression]]
	- [[Any experience of gender is acceptable]]
- [[Gender has a scientific basis]]
	- [[Sex conists of phenotype genotype and gender]]
- ![[gender dysphoria#gender dysphoria length this file inlinks]]
- ![[Gender Euphoria#Gender Euphoria length this file inlinks]]
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


