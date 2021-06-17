---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 23:07:02
note-type: 
- evergreen-note
- organizational-note
- topic-note 
---

This is a constantly updated index of entry points and topics for my personal flavor of [[Zettlekassen]]/[[second brain]]/[[personal knowledge management]] system.

- Entry Points
	- [[my TO(DO) and EVER(GREEN) structure]]
	- [[QUICKNOTE]]
	- [[TASKS]]
- Topic Outlines
	- [[personal knowledge management]]
		- The [[second brain]]
		- [[My Second Brain]]
		- [[Zettlekassen]]
	- [[mental health]]
		- [[ADHD]]
			- [[How ADHD effects concentration]]
				- [[Tips for concentration]]
		- [[trauma]]
			- [[early childhood]]
		- [[self-actualization]]
			- [[self-hate]]
			- [[self-love]]
			- [[self-improvement]]
		- [[anxiety]]
			- [[Social Anxiety]]
			- [[Your anxiety is telling you everything that could go wrong not what will go wrong]]
			- [[Anxiety should be a tool at your disposal not an impedance to your life]]

# Recently Added
```dataview
TABLE file.mtime as Edited, file.ctime as Created
from ""
SORT file.ctime DESC
```
# TODOs 
```dataviewjs
let todoTags = [
	"#TO/DO/WRITE",
	"#TO/DO/PROGRAM",
	"#TO/DO/CONCEPTUALIZE",
	"#TO/EXPLORE/READ",
	"#TO/EXPLORE/WATCH",
	"#TO/EXPLORE/RESEARCH",
	"#TO/PONDER",
	"#TO/PONDER/ME",
	"#TO/PONDER/SOCIETY"
]

function getLastEdited(page) {
	return (page);
}

for (let tag of todoTags) {
	dv.table([tag, "Last Edited", "Created"], dv.pages(tag).where( p =>
			p.file.name != "my TO(DO) and EVER(GREEN) structure"
		).map(p => [
			p.file.link,
			getLastEdited(p.file.mtime),
			p.file.ctime
		]))
}
```

# Related Topics
```dataview
table related-topics
from ""
where related-topics != null
```

# Evergreens
```dataview
TABLE replace(Status, "#EVER/GREEN/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/GREEN 
WHERE file.name != "QUICKNOTE" 
SORT Status DESC, file.mtime DESC 
```
# Eversprouts
```dataview
TABLE replace(Status, "#EVER/SPROUT/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/SPROUT 
WHERE file.name != "my TO(DO) and EVER(GREEN) structure" and file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```
# Everseedlings
```dataview
TABLE replace(Status, "#EVER/SEED/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/SEED 
WHERE file.name != "my TO(DO) and EVER(GREEN) structure" and file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```