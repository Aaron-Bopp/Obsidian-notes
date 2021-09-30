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

        return [year, month, day].join('-');
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
        let sum = 0
        if (that && dv){
            let embeds = this.getEmbeds(page.file.name, dv, that)
            sum = embeds.map(p => p.file.outlinks.length).reduce((sum, a) => sum + a, 0) - dv.current().file.outlinks.length
            // sum = embeds.map(p => p.file.outlinks.length - p["related-topics"] && Array(p["related-topics"]).flat().length - 2).reduce((sum, a) => sum + a, 0)
        }
        return `${page.file.inlinks.length}/${page.file.outlinks.length + sum - 1}`
    }

    getFileText(page, that) {
        var thisTFile = that.app.vault.getAbstractFileByPath(page.file.path);
        var content = thisTFile.unsafeCachedData;
        return content
    }

    getEmbeds(name, dv, that){
        const file = dv.page(name || "")
        if (file == undefined) {
            console.log("no file in get embeds")
            return null
        }
        let embeds = undefined
        if (that) {
            const content = this.getFileText(file, that)
            const re = /!\[\[([^\]]+)[\#\^][^\]]+\]\]/g;
            embeds = [];
            for (var match of content.matchAll(re)) {
                console.log(`found ${match[1]} embedded in ${name}`)
                if (match[1] !== name) {
                    embeds.push(match[1])
                }
            }
        }
        if (embeds == undefined) {
            console.log("embeds undefined in " + name)
            return [file]
        }
        return embeds.map((name) => this.getEmbeds(name, dv, that)).concat([file]).flat().filter(el => el != null)
    }

    getNotesInOutline(dv, that) {
        const file = dv.page(that.file.name)
        const re = /[\s\t]*-\s*!\[\[([^\]]+)[\#\^][^\]]+\]\]/g;
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

    datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    lastEdited(page) {
        let days = datediff(new Date(page.file.mtime), new Date())
        if (days === 0) {
            return "Today"
        }
        return `${days} days ago`
    }

    allLinks(page) {
        return page.file.inlinks.length + page.file.outlinks.length
    }
    
    notLinkedHeader(dv) {
       dv.header(3, `Notes not in ${dv.current().file.name} outline`)
    }
    
    notLinkedPages(args) {
        const {dv, folder, that} = args;
        const allEmbeds = this.getEmbeds(dv.current().file.name, dv, that).map(f => f.file.outlinks).flat().map(l => l.path)
        return dv.pages(this.wrap(dv.current().file.name))
        .where(p => {
            return !allEmbeds.contains(p.file.path) && p.file.path.contains(folder) 
        })
        .sort(p => this.allLinks(p), 'desc')
    }

    defaultTable(args) {
        const {
            dv,
            that,
            pagesQuery = "",
            pagesArray = dv.pages(),
            whereCheck = ((p) => true),
            sort = ((p) => this.allLinks(p), 'desc'),
            columnTitles = ["Page", "I/O", "Edited", "Created"],
            columns = ((p) => [p.file.link, this.getIO(p, dv, that), p.file.mtime, this.formatDate(p.created || p.file.ctime)])
        } = args;

        const pages = pagesQuery ? dv.pages(pagesQuery) : pagesArray
        if (pages.length > 0){
            dv.table(columnTitles, pages.where(whereCheck).map(columns))
        }
        this.sortableColumns()
    }

    statusTable(args) {
        const {dv, folder, that} = args;
        this.defaultTable({
            ...args,
            pagesArray: this.notLinkedPages({dv, folder}),
            sort: ((p) => this.statusLevel(p.status)),
            columnTitles:[folder, "I/O", "Status", "Edited", "Created"],
            columns:(p => [p.file.link, this.getIO(p, dv, that), p.status, p.file.mtime, this.formatDate(p.created || p.file.ctime)])
        })
    }
    
    topicNotesNotLinked(args) {
        this.statusTable({
            ...args, 
            folder: "TopicNotes"
        })
    }
    evergreenNotesNotLinked(args) {
        this.statusTable({
            ...args, 
            folder: "EvergreenNotes"
        })
    }
    contentNotesNotLinked(args) {
        let folder = "ContentNotes"
        this.defaultTable({
            ...args,
            pagesArray: this.notLinkedPages({dv:args.dv, folder, that:args.that}),
            columnTitles:[folder, "I/O", "Edited", "Created"]
        })
    }

    topicNoteDataviews(args) {
        //args = dv, that
        this.notLinkedHeader(args.dv)
        this.topicNotesNotLinked(args)
        this.evergreenNotesNotLinked(args)
        this.contentNotesNotLinked(args)
    }

    topicOutlineHeader(dv, that) {
        return this.getIO(dv.current(), dv, that)
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
        
        document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
            const table = th.closest('table');
            const tbody = table.querySelector('tbody');
            Array.from(tbody.querySelectorAll('tr'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => tbody.appendChild(tr) );
        })));
    }
}