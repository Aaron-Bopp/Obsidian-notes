---
creation date: 2021-06-25
modification date: Friday 25th June 2021 23:56:21
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[mental health]]
---

##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- Sometimes caused by
	- [[gender dysphoria]]
- [[Sadness is enlightenment and happiness is delusion]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[depression]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "depression" and !contains([[depression]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[depression]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "depression" and !contains([[depression]].file.outlinks, link(file.name))
SORT Status
```

### References