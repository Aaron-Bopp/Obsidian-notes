---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 22:23:57
note-type: 
- evergreen-note
- topic-note

---



---
# Outline
- 

---

**Status**:: 

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[early childhood]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[early childhood]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
## Content Notes related to [[early childhood]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[early childhood]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```