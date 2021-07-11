---
creation date: 2021-06-30
modification date: Wednesday 30th June 2021 23:29:24
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[Agoraphobia]]

- Agoraphobia - fear of going outside
    - developed from the fear of having a panic attack in an unkown environment
    - So afraid of losing control outside of their home but they never leave
    - Agoraphobia lite - leaving the home but constantly analyzing

**Status**:: #EVER/SEED
###### [[Agoraphobia]] `=length([[Agoraphobia]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Agoraphobia]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Agoraphobia" and !contains([[Agoraphobia]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Agoraphobia]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Agoraphobia" and !contains([[Agoraphobia]].file.outlinks, link(file.name))
SORT Status
```

## References