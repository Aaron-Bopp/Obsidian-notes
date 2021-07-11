---
creation date: 2021-07-10

note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[religion]] `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/SEED
**Parent-Topics**:: [[INDEX]]
**Last Edited**:: *`=this.file.mtime`*
##### [[religion]] `=length(this.file.inlinks)` 
- [[Christianity]]
- [[Bhuddism]]
- [[Hinduism]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[religion]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "religion" and !contains([[religion]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[religion]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "religion" and !contains([[religion]].file.outlinks, link(file.name))
SORT Status
```

### References