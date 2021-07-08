---
creation date: 2021-05-03
modification date: Monday 3rd May 2021 02:10:49
note-type: 
- evergreen-note
- topic-note
- practice
---

- [Catch the moment between inhalation and exhalation](https://www.youtube.com/watch?v=n4jSkOjuLIg&t=5640s)
	- What is the moment between inhalation and exhalation
		- where does it happen
		- what does it feel like
	- Catch that moment and observe it
		- "It's not about the answer it's about training yourself to look"
- Techniques
	- [[Flamingo Pose Meditation]]
	- [[Dual Nostril Breathing Meditation]]
- Important part of [[yoga]]	


**Status**:: #EVER/SEED
###### [[meditation]] `=length([[meditation]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[meditation]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "meditation" and !contains([[meditation]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[meditation]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "meditation" and !contains([[meditation]].file.outlinks, link(file.name))
SORT Status
```

## References


