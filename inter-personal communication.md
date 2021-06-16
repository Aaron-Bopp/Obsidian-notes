---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 21:32:59
note-type: 
- evergreen-note
- topic-note
- 
aliases:
- inter-personal relationships

---



---
# Outline
- 

---

**Status**:: #EVER/SEED/UNPLANTED 

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[inter-personal communication]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[inter-personal communication]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
## Content Notes related to [[inter-personal communication]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[inter-personal communication]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```