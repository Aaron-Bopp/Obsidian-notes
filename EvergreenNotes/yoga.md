---
creation date: 2021-05-31
modification date: Monday 31st May 2021 15:33:52
note-type: 
- evergreen-note
- topic-note

---

# Outline
- [[yoga]] is based off of the principle of doing something that forces your mind to be in the present.
- [[meditation]]


###### [[yoga]] `=length([[yoga]].file.inlinks)` 

- 

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[yoga]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[yoga]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "yoga" and !contains([[yoga]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes related to [[yoga]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[yoga]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "yoga" and !contains([[yoga]].file.outlinks, link(file.name))
SORT Status
```