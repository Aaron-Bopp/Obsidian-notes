---
creation date: 2021-07-05

note-type: 
- evergreen-note
- topic-note
aliases:
- Self-Realization
- God-Realization
- nirvikalpa
- samadhi
- Moksha
---
 
##### [[enlightenment]] `=length(this.file.inlinks) + length(this.file.outlinks)`
enlightenment, liberation, [[Self]]-Realization, God-Realization, nirvikalpa samadhi and finally Moksha

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[enlightenment]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[enlightenment]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "enlightenment" and !contains([[enlightenment]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[enlightenment]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "enlightenment" and !contains([[enlightenment]].file.outlinks, link(file.name))
SORT Status
```

### References