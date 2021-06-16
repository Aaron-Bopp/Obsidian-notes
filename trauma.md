---
creation date: 2021-06-12
modification date: Saturday 12th June 2021 23:07:02
note-type: 
- evergreen-note
- topic-note

---

[[The effects of early childhood trauma]]
[[There aren't any downsides to working through trauma]]


---
# Outline
- 

---

**Status**:: #EVER/SEED/UNPLANTED 

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[trauma]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[trauma]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
## Content Notes related to [[trauma]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[trauma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```