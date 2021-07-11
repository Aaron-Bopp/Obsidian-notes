---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- neurodivergent
---
 
###### [[neurodivergency]]


**Status**:: #EVER/SEED
###### [[neurodivergency]] `=length([[neurodivergency]].file.inlinks)` 

- [[ADHD]]
- [[Autism]]


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[neurodivergency]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "neurodivergency" and !contains([[neurodivergency]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[neurodivergency]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "neurodivergency" and !contains([[neurodivergency]].file.outlinks, link(file.name))
SORT Status
```

## References