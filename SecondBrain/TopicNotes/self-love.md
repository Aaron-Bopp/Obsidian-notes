---
creation date: 2021-06-15
modification date: Tuesday 15th June 2021 20:30:05
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---



###### [[self-love]] `=length([[self-love]].file.inlinks)` 

- 

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[self-love]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self-love]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self-love" and !contains([[self-love]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes related to [[self-love]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[self-love]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self-love" and !contains([[self-love]].file.outlinks, link(file.name))
SORT Status
```