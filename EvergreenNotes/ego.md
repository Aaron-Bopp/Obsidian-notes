---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 23:13:04
note-type: 
- evergreen-note
- topic-note

---

###### [[ego]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[ego]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[ego]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != ego"
SORT Status
```
## Content Notes related to [[ego]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[ego]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != ego"
SORT Status
```