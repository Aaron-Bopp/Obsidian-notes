---
creation date: 2021-06-25
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
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[mental disorders]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "mental disorders" and !contains([[mental disorders]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[mental disorders]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "mental disorders" and !contains([[mental disorders]].file.outlinks, link(file.name))
SORT Status
```

### References