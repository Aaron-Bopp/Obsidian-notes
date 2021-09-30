---
date modified: Thursday, September 30th 2021, 9:39:19 am
---
```ActivityHistory
SecondBrain/TopicNotes
```

# TopicNotes Overview

```dataviewjs
const {dv_funcs} = customJS
const pages = dv.pages()
console.log(dv.array())
dv_funcs.statusTable({
	dv,
	that:this,
	pagesArray:pages,
	whereCheck: (p => p.file.outlinks.length <= 1 && p.file.path.contains('TopicNotes')),
	title: 'Topic Seeds'
})
dv_funcs.statusTable({
	dv,
	that:this,
	pagesArray:pages,
	whereCheck: (p => p.file.outlinks.length > 1 && p.file.path.contains('TopicNotes')),
	title: 'Growing Topics'
})
```

