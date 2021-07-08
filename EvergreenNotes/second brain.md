---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 15:25:40
note-type: 
  evergreen-note
  topic-note

---
###### [[second brain]] 

A second brain is a term that refers to a system of written thought that allows the writer to make permanent meaningful thought, access those thoughts in a meaningful way, and use as a conduit for new thought. 
#TO/DO/WRITE/LONGTERM Article with my flavor of [[personal knowledge management]]

**Status**:: #EVER/GREEN 


###### [[second brain]] `=length([[second brain]].file.inlinks)`
- Why are you creating a Second Brain
	- Are you taking notes to collect content or to create content
		- [[Creating Thought with a Second Brain]]
		- [[Collecting Thought with a Second Brain]]
	- Starting your [[second brain]]
		- [[Write your notes like you're planting an evergreen forest]]
		- [[write what you think]]
		- [[Learning systems can be a gateway to creating thought]]
- Methods of Constructing a Second Brain
	- [[Zettlekassen]]
	- Notational Velocity
	- [[evergreen notes]]
- Tools for constructing a Second Brain
	- [[Obsidian (software)]]
	- Roam Research
	- Atom
- Tips
	- [[How to title your notes]]
	- [[How to write atomically]]
- ![[My Second Brain#My Second Brain length My Second Brain file inlinks]]

## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[second brain]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "second brain" and !contains([[second brain]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[second brain]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "second brain" and !contains([[second brain]].file.outlinks, link(file.name))
SORT Status
```

## References
