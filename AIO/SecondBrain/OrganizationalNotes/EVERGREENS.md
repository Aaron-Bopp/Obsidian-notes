---
creation date: 2021-07-05
parent: [[Dataview]]
note-type:
- organizational-note
---
```dataviewjs
const thisFile = dv.pages().where(f => f.file.path == dv.current().file.path)[0]
function formatDate(date){
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [year, month, day].join('-');
}

function wrap(name) {
	return '[[' + name + ']]'
}

function getIO(file) {
	return `${file.inlinks.length}/${file.outlinks.length}`
}
function daysSince(date) {
	console.log(date)
	const modifiedDate = new Date(date.year, date.month, date.day)
	const currentDate = new Date()
	console.log(modifiedDate)
	const days =  ( modifiedDate.getTime() - currentDate.getTime()) / (60*60*24*1000)
	const weeks = Math.floor(days / 7)
	return (weeks ? weeks + " weeks, ": "") + (days % 7 ? Math.floor(days % 7) + " days ago": "Today")
}
function table(tag) {
	dv.table([tag, "I/O", "Last Edited", "Created"], 
		dv.pages(tag)
		.where(p => p.status === tag)
		.sort(p => p.file.inlinks.length + p.file.outlinks.length, 'desc')
		.map(p => [p.file.link, getIO(p.file), daysSince(p.file.mtime), formatDate(p["creation date"]) ])
	)
}
["/PRUNE", "/GROWING", ""].forEach(t => table("#EVER/GREEN" + t))
```

```dataview
TABLE length(file.inlinks) + length(file.outlinks) as Links, replace(Status, "#EVER/GREEN/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/GREEN 
WHERE file.name != "QUICKNOTE" 
SORT Status DESC, file.mtime DESC 
```