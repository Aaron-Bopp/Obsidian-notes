---
embedded: [[social anxiety]], [[social discomfort]]
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[mental health]]

---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/GREEN 

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[Your anxiety is telling you everything that could go wrong not what will go wrong]]
- [[Anxiety isn't irrational it's just overcompensation]]
	- [[Anxiety should be a tool at your disposal not an impedance to your life]]
	- [[your anxiety knows your insecurities better than you do]]
- How [[anxiety]] manifests
	- ![[social anxiety#this file link length this file inlinks]]
	- ![[social discomfort#this file link length this file inlinks]]
	- [[Rejection Sensitivity]]
	- Overthinking
	- [[Agoraphobia]]
- Comorbid conditions
	- [[OCD]]
	- [[depression]]
	- [[ADHD]]
- Causes
	- [[childhood trauma]]
		- [[Early childhood trauma causes us to make wide assumptions about the world]]
	- [[neurodivergency]]


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[anxiety]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "anxiety" and !contains([[anxiety]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[anxiety]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "anxiety" and !contains([[anxiety]].file.outlinks, link(file.name))
SORT Status
```

## References