---
creation date: 2021-07-05
parent: [[INDEX]]
note-type:
- organizational-note
- dataview
search-tags:
- "#EVER/SEED/UNPLANTED"
- "#EVER/SEED/WATER"
- "#EVER/SEED"
---
```dataviewjs
let todoTags = [
	"#EVER/SEED/UNPLANTED",
	"#EVER/SEED/WATER",
	"#EVER/SEED"
]

function getLastEdited(page) {
	return (page);
}

for (let tag of todoTags) {
	dv.table([tag, "Inlinks", "Modified"], dv.pages(tag && -"#EVER/SEED/WATER").where( p => {
			return p.file.name != "my TO(DO) and EVER(GREEN) structure" &&
			p.file.etags.contains(tag) &&
			!p.file.folder.contains("Templates")
		}).sort(p => {
			if (p.file.etags.contains("#EVER/SEED")) {
				return p.file.inlinks.length, 'asc'
			} else {
				return p.file.mtime, 'desc'
			}
			})
		.map(p => [
			p.file.link,
			p.file.inlinks.length,
			p.file.mtime
		]))
}
```