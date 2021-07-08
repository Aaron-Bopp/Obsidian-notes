---
creation date: 2021-06-12
modification date: Saturday 12th June 2021 23:07:02
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[mental health]]
---
 
###### [[trauma]]


**Status**:: #EVER/SEED
###### [[trauma]] `=length([[trauma]].file.inlinks)` 
- [[early childhood]]
- ![[religious trauma#religious trauma length religious trauma file inlinks]]


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[trauma]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "trauma" and !contains([[trauma]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[trauma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "trauma" and !contains([[trauma]].file.outlinks, link(file.name))
SORT Status
```

## References