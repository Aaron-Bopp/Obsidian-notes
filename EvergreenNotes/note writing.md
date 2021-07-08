---
creation date: 2021-06-27
modification date: Sunday 27th June 2021 19:21:27
note-type: 
- evergreen-note
- topic-note

---

###### [[note writing]]



---
# Outline
- [[Creating Thought with a Second Brain]]
- [[Collecting Thought with a Second Brain]]

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[note writing]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[note writing]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "note writing"
SORT Status
```
## Content Notes related to [[note writing]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[note writing]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "note writing"
SORT Status
```