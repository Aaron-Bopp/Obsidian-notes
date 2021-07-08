---
creation date: 2021-06-28

note-type: 
- evergreen-note
- topic-note
aliases:
parent: [[Christianity]]
---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[My Deconstruction journey]] `=length([[My Deconstruction journey]].file.inlinks) + length([[My Deconstruction journey]].file.outlinks)`
	- [[My relationship with my parents]]
		- [[In order to for my parents to love me, they need to admit they might be wrong]]
	- [[My worldview is not about conversion it is about acceptance]]
- [[You can leave the church and still believe in the christian god]]
	- [[Fear cannot be a deterant for deconstructing your faith]]
- Analogies
	- [[Deconstructing your faith is like climbing through a jungle canopy]]
	- [[Deconstructing your faith can feel like constructing a puzzle that you haven't seen before]]
- Why people deconstruct
	- [[Non-faith issues have been co-opted to keep people in the christian church]]
	- [[religious trauma]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Deconstruction (Christianity)]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Deconstruction (Christianity)" and !contains([[Deconstruction (Christianity)]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Deconstruction (Christianity)]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Deconstruction (Christianity)" and !contains([[Deconstruction (Christianity)]].file.outlinks, link(file.name))
SORT Status
```

### References