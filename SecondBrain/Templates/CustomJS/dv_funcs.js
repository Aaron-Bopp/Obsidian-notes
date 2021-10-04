class dv_funcs {
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
            
        return date
        if (typeof(d) === d.getMonth()) {
        } else {
            return [year, month, day].join('-');
        }
    }

    lastEdited(page) {
        let days = datediff(new Date(page.file.mtime), new Date())
        if (days === 0) {
            return "Today"
        }
        return `${days} days ago`
    }
    
    datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    statusLevel = (status) => {
        let statusDict = {
            "GREEN": 0,
            "SPROUT": 1,
            "SEED": 2
        }
        if (!status) {return 0}
        try {
            let [_, growth, state] = status.split("/")
            return statusDict[growth]
        } catch (TypeError){
            return 0
        }
    }

    wrap(name, alias) {
        if (alias) {
            alias = ' | ' + alias
        } else {
            alias = ""
        }
        return `[[${name}${alias}]]`
    }

    getIO(page, dv, that) {
        return `${page.file.inlinks.length}/${this.getTotalLinks(page.file.name, dv, that).size}`
    }

    getFileText(path, that) {
        var thisTFile = that.app.vault.getAbstractFileByPath(path);
        var content = thisTFile.unsafeCachedData;
        return content
    }

    getNotesInOutline(name, dv, that, justEmbeds=false) {
        const file = dv.page(name)
        const linksInOutline = /[\s\t]*\-\s*\!*\[\[([^\#\]]+)(\#[^\]]+)*\]\]/g;
        const content = this.getFileText(file.file.path, that)
        let matches = []
        for (let match of content.matchAll(linksInOutline)) {
            matches.push(match)
        }
        return [name].concat(matches.map((m)=>  m[2] ? (justEmbeds ? m[1] : this.getNotesInOutline(m[1], dv, that)): m[1])).flat()
    }

    getFileFromPath(path) {
        const match = path.match(/.*\/([^\/]*)\.md/)
        return match && match[1]
    }

    getTotalLinks(name, dv, that) {
        const outlinks = dv.page(name).file.outlinks.map(l => this.getFileFromPath(l.path))
        const outline = this.getNotesInOutline(name, dv, that)
        return new Set(outlinks.concat(outline))
    }
   
    notLinkedPages(args) {
        const {dv, folder, that, all=false} = args;
        // const allEmbeds = this.getEmbeds(dv.current().file.name, dv, that).map(f => f.file.outlinks).flat().map(l => l.path)
        const allNotes = this.getNotesInOutline(dv.current().file.name, dv, that)
        return dv.pages(all ? "" : this.wrap(dv.current().file.name))
        .where(p => {
            return !allNotes.contains(p.file.name) && folder && p.file.path.contains(folder) 
        })
        .sort(p => this.getTotalLinks(p.file.name, dv, that), 'desc')
    }

    defaultTable(args) {
        const {
            dv,
            that,
            pagesQuery = "",
            pagesArray = dv.pages(),
            whereCheck = ((p) => true),
            sortCheck = ((p) => this.getTotalLinks(p.file.name, args.dv, args.that)),
            columnTitles = ["Page", "I/O", "Edited", "Created"],
            columns = ((p) => [p.file.link, this.getIO(p, dv, that), p.file.mtime, this.formatDate(p.created || p.file.ctime)])
        } = args;

        const pages = pagesQuery ? dv.pages(pagesQuery) : pagesArray
        if (pages.length > 0){
            dv.table(columnTitles, pages.where((p) => whereCheck(p)).sort((p => sortCheck(p)), 'desc').map(columns))
        }
        // this.sortableColumns()
    }

    statusTable(args) {
        const {dv, title, that, folder, all=false} = args;
        this.defaultTable({
            pagesArray: this.notLinkedPages({dv, folder, that, all}),
            sortCheck: ((p) => this.statusLevel(p.status)),
            columnTitles:[title || folder || "Page", "I/O", "Status", "Edited", "Created"],
            columns:(p => [p.file.link, this.getIO(p, dv, that), p.status, p.file.mtime, this.formatDate(p.created || p.file.ctime)]),
            ...args
        })
    }

    topicNoteDataviews(args) {
        const {dv, that} = args
        dv.header(3, `Notes not in ${dv.current().file.name} outline`)
        this.statusTable({
            ...args, 
            folder: "TopicNotes"
        })
        this.statusTable({
            ...args, 
            folder: "EvergreenNotes"
        })
        this.defaultTable({
            ...args,
            pagesArray: this.notLinkedPages({dv, folder:"ContentNotes", that}),
            columnTitles:["ContentNotes", "I/O", "Edited", "Created"]
        })
    }

    outlinedIn(dv, that, page=dv.current(), previousLinks=[]) {
        const topicInlinks = page.file.inlinks.filter(l => l.path.contains("TopicNotes"))
        const embeddedIn = topicInlinks.filter(l => {
            const name = this.getFileFromPath(l.path)
            return this.getNotesInOutline(name, dv, that, true).includes(dv.current().file.name) && name !== dv.current().file.name
        }).filter(l => l.path !== page.file.path)
        // let outlinedIn = embeddedIn.forEach(l => {
        //     let ePage = dv.page(l)
        //     let ePageIL = ePage.file.inlinks.filter(l => l.path.contains("TopicNotes"))

        // })
        // return embeddedIn.map(l => !previousLinks.includes(l) && this.outlinedIn(dv, that, dv.page(l), topicInlinks))
        if (embeddedIn.length > 0) {
            return embeddedIn
        }
    }

    topicOutlineHeader(dv, that) {
        return `${dv.current().file.inlinks.length}/${this.getNotesInOutline(dv.current().file.name, dv, that).length - 1}`
    }
    topicHeader(dv, that){
        return this.getIO(dv.current(), dv, that)
    }
    evergreenHeader(dv, that) {
        return this.getIO(dv.current(), dv, that)
    }

    sortableColumns() {
        // Source https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript
        const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
        
        const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2,undefined, {numeric: true})
        )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
        
        // do the work...
        document.querySelectorAll('th').forEach(th => th.style.cursor = "pointer");
        
        document.queryselectorall('th').foreach(th => th.addeventlistener('click', (() => {
            const table = th.closest('table');
            const tbody = table.queryselector('tbody');
            array.from(tbody.queryselectorall('tr'))
            .sort(comparer(array.from(th.parentnode.children).indexof(th), this.asc = !this.asc))
            .foreach(tr => tbody.appendchild(tr) );
        })));
    }
}
// getembeds(name, dv, that){
//     const file = dv.page(name)
//     if (file == undefined) {
//         console.log("no file in get embeds")
//         return null
//     }
//     let embeds = undefined
//     if (that) {
//         const content = this.getfiletext(file.file.path, that)
//         const re = /!\[\[([^\]]+)[\#\^][^\]]+\]\]/g;
//         embeds = [];
//         for (var match of content.matchall(re)) {
//             console.log(`found ${match[1]} embedded in ${name}`)
//             if (match[1] !== name) {
//                 embeds.push(match[1])
//             }
//         }
//     }
//     if (embeds == undefined) {
//         console.log("embeds undefined in " + name)
//         return [file]
//     }
//     return embeds.map((name) => this.getembeds(name, dv, that)).concat([file]).flat().filter(el => el != null)
// }
