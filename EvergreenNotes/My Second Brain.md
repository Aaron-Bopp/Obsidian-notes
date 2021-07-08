---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[My Second Brain]] 

Since March 2021 I have become very interested in [[personal knowledge management]] and the concept of a [[web of thought]] so intricate that it creates a [[second brain]]. This is my structure and philosophy of how I will construct [[My Second Brain]]

**Status**:: #EVER/SEED
###### [[My Second Brain]] `=length([[My Second Brain]].file.inlinks)` 
- [[My Second Brain]]
	- Driving principals
		- [[Write your notes like you're planting an evergreen forest]]
		- [[write what you think]]
	- General Philosophy
		- What is a [[second brain]]?
		- How to use a [[web of thought]]
		- What is [[personal knowledge management]]?
		- Why write [[evergreen notes]]?
		- How is this different than a [[Zettlekassen]]?
	- Organization
		- [[Capture your fleeting thoughts]]
		- What is a [[content note]]?
		- What is a [[permanent note]]?
		- What is a [[topic note]]?
		- [[organizational notes]]
			- A Todo list
				- [[How to represent a todo list]]
			- [[index note]]
		- [[What is the difference between a evergreen note and a topic note]]
		- [[Note structures should be loosely defined]]
	- Interacting with your second brain
		- [[Make your inbox into an entry point]]
		- [[my TO(DO) and EVER(GREEN) structure]]
		- Curation
			- [[How to title your notes]]
			- [[How to write atomically]]
		- Tags
			- [[how I use Obsidian tags]]
			- [[Tags should be general]]

## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[My Second Brain]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "My Second Brain" and !contains([[My Second Brain]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[My Second Brain]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "My Second Brain" and !contains([[My Second Brain]].file.outlinks, link(file.name))
SORT Status
```

## References