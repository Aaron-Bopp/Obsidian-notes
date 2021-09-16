class dv_funcs {
    // formatDate(date) {
    //     var d = new Date(date),
    //         month = '' + (d.getMonth() + 1),
    //         day = '' + d.getDate(),
    //         year = d.getFullYear();

    //     if (month.length < 2)
    //         month = '0' + month;
    //     if (day.length < 2)
    //         day = '0' + day;

    //     return [year, month, day].join('-');
    // }

    wrap(name) {
        return '[[' + name + ']]'
    }

    getIO(page) {
        let embeds = 0
        if (page.embedded){
            embeds = getEmbeds(page.file.name).length 
        }
        return `${page.file.inlinks.length}/${page.file.outlinks.length + embeds - 1}`
    }

    getEmbeds(name){
        const file = dv.pages().where(f => f.file.name === name)[0]
        if (file == undefined) {
            return [null]
        }
        let embeds = file.embedded
        if (embeds == undefined) {
            return [file]
        }
        // prevent infinite loops if currentNote is included in embeds
        embeds = embeds.filter(l => l !== null && name !== l.path )
        return embeds.map((l) => getEmbeds(l.path)).concat([file]).flat().filter(el => el != null)
    }

    // statusDict = {
    //     "GREEN": 0,
    //     "SPROUT": 1,
    //     "SEED": 2
    // }

    statusLevel = (status) => {
        if (!status) {return 0}
        try {
            let [_, growth, state] = status.split("/")
            return statusDict[growth]
        } catch (TypeError){
            return 0
        }
        return 0
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
}