---
creation date: 2021-06-25
note-type: 
- evergreen-note
- topic-note
aliases:
- 
related-topics: [[anxiety]]
---
 
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- Symptoms
	- lack of [[self-worth]]
	- Acutely aware of [[social discomfort]]
		- [[Anxiety should be a tool at your disposal not an impedance to your life]]
	- For me
		- [[My self-image is purely based on other's perceptions of me]]
- Causes
	- [[Your insecurity is just more avenues for your anxiety to take advantage of]]
		- [[your anxiety knows your insecurities better than you do]]
	- [[childhood trauma]] can create a person predisposed to social anxiety
		- [[There aren't any downsides to working through trauma]]
- Comorbid
	- General [[anxiety]]
	- worsened by [[OCD]]
	- [[depression]] 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[social anxiety]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "social anxiety" and !contains([[social anxiety]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[social anxiety]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "social anxiety" and !contains([[social anxiety]].file.outlinks, link(file.name))
SORT Status
```

### References