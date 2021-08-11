---
creation date: 2021-06-16
modification date: Wednesday 16th June 2021 11:05:15
note-type: 
- evergreen-note
- topic-note
parent: [[anxiety]]
---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[socialization]]
	- [[social anxiety]]
	- [[self-hate]]
		- [[Your insecurity is just more avenues for your anxiety to take advantage of]]
		- [[Constantly working on yourself is a form a self-hatred]]


### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[social discomfort]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "social discomfort" and !contains([[social discomfort]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[social discomfort]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "social discomfort" and !contains([[social discomfort]].file.outlinks, link(file.name))
SORT Status
```

### References