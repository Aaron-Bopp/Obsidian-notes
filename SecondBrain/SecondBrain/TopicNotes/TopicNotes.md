---
date modified: Wednesday, September 29th 2021, 10:46:49 pm
---
```ActivityHistory
SecondBrain/TopicNotes
```

# TopicNotes Overview

```dataviewjs
const {dv_funcs} = customJS
const pages = dv.pages('"TopicNotes"')
console.log(pages)
dv_funcs.defaultTable({dv, that:this, pagesArray:pages})
if (pages.length > 0) {
	dv.table(['Topic Seeds', "I/O", "Status", "Edited", "Created"], 
		pages
		.where(p => p.file.outlinks.length <= 1)
		.sort(p => p.file.name)
		.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
	dv.table(['Growing Topics', "I/O", "Status", "Edited", "Created"], 
		pages
		.where(p => p.file.outlinks.length > 1)
		.sort(p => p.file.name)
		.map(p => [p.file.link, getIO(p.file), p.status, p.file.mtime, formatDate(p["creation date"])]))
	

}
```

