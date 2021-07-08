---
creation date: 2021-06-16

note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

Social fitness is a big part of [[human survival]] and [[human advancement]]

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[human advancement]]
	- [[Our brains are built around survival]]
		- How the [[ego]] affects our survival
			- [[Human's have an inability to admit that they are wrong]]
			- [[Human's will find explanations for inexplainable things]]
- Mating process
	- [[social anxiety]]
		- [[social interaction]]
		- [[social discomfort]]
- [[human experience]]
	- [[human survival]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[social fitness]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "social fitness" and !contains([[social fitness]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[social fitness]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "social fitness" and !contains([[social fitness]].file.outlinks, link(file.name))
SORT Status
```

### References