---
creation date: 2021-07-05
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[human advancement]] `=length(this.file.inlinks) + length(this.file.outlinks)`
- 

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[human advancement]] `=length(this.file.inlinks) - 2` 
- [[Our brains are built around survival]]
	- How the [[subconscious]] affects our survival
		- [[Human's have an inability to admit that they are wrong]]
		- [[Human's will find explanations for inexplainable things]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[human advancement]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "human advancement" and !contains([[human advancement]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[human advancement]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "human advancement" and !contains([[human advancement]].file.outlinks, link(file.name))
SORT Status
```

### References