---
creation date: 2021-08-01
note-type: 
- evergreen-note
- topic-note
aliases:
- 
embedded:
- 
---
 
##### [[Rise of Misinformation in America]] `=length(this.file.inlinks) + length(this.file.outlinks)`
Over the last forty years, misinformation has become so potent in [[America]], that [[anti-science]] culture has become the norm among republicans. This is closely linked to the [[Rise of Modern Conservatism]] and the [[Rise of Conspiracy Culture]]. 

**Status**:: #EVER/SEED 
**Related-Topics**::
**Last Edited**:: *`=this.file.mtime`*
##### [[Rise of Misinformation in America]] `=length(this.file.inlinks)` 
- [[Ronald Reagan invented modern conservatism]]
	- [[McCarthyism is an attack on totalitarianism not communism]]
	- [[American's are scared of the word communism not it's meaning]]
- [[Creationism built an anti-science culture]]
	- [[The Politicization of the Christian Church]]
- [[Single issue voters are anti-democratic]]
	- [[Abortion and immigration are key to white supremacy]]
- [[The internet allows niche topics to flourish]]
	- [[The anti-vax movement is based off a white lie]]
- [[Mass media promotes the spread of innacurate information]]
- [[Q justifies conservatives discontent]]
- [[MAGA is built off nostalgia not facts]]

### 

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

