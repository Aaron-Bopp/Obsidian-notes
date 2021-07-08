---
creation date: 2021-06-28
modification date: Monday 28th June 2021 20:54:22
note-type: 
- evergreen-note
- topic-note

---

###### [[abortion]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[abortion]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[abortion]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "abortion"
SORT Status
```
## Content Notes related to [[abortion]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[abortion]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "abortion"
SORT Status
```