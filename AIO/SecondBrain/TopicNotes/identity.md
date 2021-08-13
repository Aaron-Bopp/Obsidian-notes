---
creation date: 2021-06-28
modification date: Monday 28th June 2021 17:55:20
note-type: 
- evergreen-note
- topic-note

---

###### [[identit[[self]] Outline
- [[gender identity]]

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[identity]]
```dataview
TAB[[self]]ile.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[identity]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "identity"
SORT Status
```
## Content Notes related to [[identity]]
```dataview
TABLE type[[self]]AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[identity]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "identity"
SORT Status
```