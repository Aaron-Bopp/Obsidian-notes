---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 23:17:18
note-type: 
- evergreen-note
- topic-note

---

###### [[my parents]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[my parents]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[my parents]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != my parents"
SORT Status
```
## Content Notes related to [[my parents]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[my parents]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != my parents"
SORT Status
```