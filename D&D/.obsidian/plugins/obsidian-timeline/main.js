/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

//string to array of classes
const arrayToClasses = (input) => {
    input = input.trim();
    if (input[0] != "[" || input[input.length - 1] != "]")
        return [];
    return input
        .substring(1, input.length - 1)
        .trim()
        .split(/\s*,\s*/);
};
class EventFactory {
    constructor(root, sourcePath) {
        this.root = root;
        this.sourcePath = sourcePath;
    }
    //remove first child's top margin and last child's bottom margin
    regulate(component) {
        let aux = component.lastChild;
        aux.style.marginBottom = "0";
        aux = component.firstChild;
        aux.style.marginTop = "0";
    }
    create(time, title, description) {
        let timeEl = this.root.createDiv({ cls: "time" });
        let infoEl = this.root.createDiv({ cls: "info" });
        let titleEl = infoEl.createDiv({ cls: "title" });
        let descriptionEl = infoEl.createDiv({ cls: "description" });
        obsidian.MarkdownRenderer.renderMarkdown(time, timeEl, this.sourcePath, null);
        obsidian.MarkdownRenderer.renderMarkdown(title, titleEl, this.sourcePath, null);
        obsidian.MarkdownRenderer.renderMarkdown(description, descriptionEl, this.sourcePath, null);
        this.regulate(descriptionEl);
        this.regulate(timeEl);
        this.regulate(titleEl);
    }
}
const codeBlockHandler = (source, el, ctx) => {
    //Initial State
    el.addClass("timeline");
    let ef = new EventFactory(el, ctx.sourcePath);
    //source to events
    const events = source
        .split(/^\s*\+ ?/gm)
        .map((event) => (event.trim().length != 0 ? event : "\u200B"));
    for (let elClass of arrayToClasses(events[0]))
        el.addClass(elClass);
    const incompleteCounter = (events.length - 1) % 3;
    const completeCounter = events.length - 1 - incompleteCounter;
    //build it
    el.createDiv({
        cls: "main-line",
        attr: {
            style: `grid-row-end: ${completeCounter / 3 + 1 + (incompleteCounter != 0 ? 1 : 0)}`,
        },
    });
    for (let i = 1; i < completeCounter; i += 3) {
        ef.create(events[i], events[i + 1], events[i + 2]);
    }
    switch (incompleteCounter) {
        case 1:
            ef.create(events[completeCounter + 1], "", "");
            return;
        case 2:
            ef.create(events[completeCounter + 1], events[completeCounter + 2], "");
            return;
        default:
            return;
    }
};
class MyPlugin extends obsidian.Plugin {
    onload() {
        this.registerMarkdownCodeBlockProcessor("timeline", codeBlockHandler);
    }
}

module.exports = MyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdFBsdWdpbixcclxuXHRNYXJrZG93blBvc3RQcm9jZXNzb3JDb250ZXh0LFxyXG5cdE1hcmtkb3duUmVuZGVyZXIsXHJcbn0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcblxyXG4vL3N0cmluZyB0byBhcnJheSBvZiBjbGFzc2VzXHJcbmNvbnN0IGFycmF5VG9DbGFzc2VzID0gKGlucHV0OiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XHJcblx0aW5wdXQgPSBpbnB1dC50cmltKCk7XHJcblx0aWYgKGlucHV0WzBdICE9IFwiW1wiIHx8IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdICE9IFwiXVwiKSByZXR1cm4gW107XHJcblxyXG5cdHJldHVybiBpbnB1dFxyXG5cdFx0LnN1YnN0cmluZygxLCBpbnB1dC5sZW5ndGggLSAxKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnNwbGl0KC9cXHMqLFxccyovKTtcclxufTtcclxuXHJcbmNsYXNzIEV2ZW50RmFjdG9yeSB7XHJcblx0cm9vdDogSFRNTEVsZW1lbnQ7XHJcblx0c291cmNlUGF0aDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihyb290OiBIVE1MRWxlbWVudCwgc291cmNlUGF0aDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnJvb3QgPSByb290O1xyXG5cdFx0dGhpcy5zb3VyY2VQYXRoID0gc291cmNlUGF0aDtcclxuXHR9XHJcblxyXG5cdC8vcmVtb3ZlIGZpcnN0IGNoaWxkJ3MgdG9wIG1hcmdpbiBhbmQgbGFzdCBjaGlsZCdzIGJvdHRvbSBtYXJnaW5cclxuXHRyZWd1bGF0ZShjb21wb25lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcblx0XHRsZXQgYXV4ID0gY29tcG9uZW50Lmxhc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuXHRcdGF1eC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcclxuXHRcdGF1eCA9IGNvbXBvbmVudC5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG5cdFx0YXV4LnN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKHRpbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG5cdFx0bGV0IHRpbWVFbCA9IHRoaXMucm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwidGltZVwiIH0pO1xyXG5cdFx0bGV0IGluZm9FbCA9IHRoaXMucm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwiaW5mb1wiIH0pO1xyXG5cdFx0bGV0IHRpdGxlRWwgPSBpbmZvRWwuY3JlYXRlRGl2KHsgY2xzOiBcInRpdGxlXCIgfSk7XHJcblx0XHRsZXQgZGVzY3JpcHRpb25FbCA9IGluZm9FbC5jcmVhdGVEaXYoeyBjbHM6IFwiZGVzY3JpcHRpb25cIiB9KTtcclxuXHJcblx0XHRNYXJrZG93blJlbmRlcmVyLnJlbmRlck1hcmtkb3duKHRpbWUsIHRpbWVFbCwgdGhpcy5zb3VyY2VQYXRoLCBudWxsKTtcclxuXHRcdE1hcmtkb3duUmVuZGVyZXIucmVuZGVyTWFya2Rvd24odGl0bGUsIHRpdGxlRWwsIHRoaXMuc291cmNlUGF0aCwgbnVsbCk7XHJcblx0XHRNYXJrZG93blJlbmRlcmVyLnJlbmRlck1hcmtkb3duKFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0ZGVzY3JpcHRpb25FbCxcclxuXHRcdFx0dGhpcy5zb3VyY2VQYXRoLFxyXG5cdFx0XHRudWxsXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMucmVndWxhdGUoZGVzY3JpcHRpb25FbCk7XHJcblx0XHR0aGlzLnJlZ3VsYXRlKHRpbWVFbCk7XHJcblx0XHR0aGlzLnJlZ3VsYXRlKHRpdGxlRWwpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgY29kZUJsb2NrSGFuZGxlciA9IChcclxuXHRzb3VyY2U6IHN0cmluZyxcclxuXHRlbDogSFRNTEVsZW1lbnQsXHJcblx0Y3R4OiBNYXJrZG93blBvc3RQcm9jZXNzb3JDb250ZXh0XHJcbikgPT4ge1xyXG5cdC8vSW5pdGlhbCBTdGF0ZVxyXG5cdGVsLmFkZENsYXNzKFwidGltZWxpbmVcIik7XHJcblx0bGV0IGVmID0gbmV3IEV2ZW50RmFjdG9yeShlbCwgY3R4LnNvdXJjZVBhdGgpO1xyXG5cclxuXHQvL3NvdXJjZSB0byBldmVudHNcclxuXHRjb25zdCBldmVudHM6IHN0cmluZ1tdID0gc291cmNlXHJcblx0XHQuc3BsaXQoL15cXHMqXFwrID8vZ20pXHJcblx0XHQubWFwKChldmVudCkgPT4gKGV2ZW50LnRyaW0oKS5sZW5ndGggIT0gMCA/IGV2ZW50IDogXCJcXHUyMDBCXCIpKTtcclxuXHRmb3IgKGxldCBlbENsYXNzIG9mIGFycmF5VG9DbGFzc2VzKGV2ZW50c1swXSkpIGVsLmFkZENsYXNzKGVsQ2xhc3MpO1xyXG5cclxuXHRjb25zdCBpbmNvbXBsZXRlQ291bnRlciA9IChldmVudHMubGVuZ3RoIC0gMSkgJSAzO1xyXG5cdGNvbnN0IGNvbXBsZXRlQ291bnRlciA9IGV2ZW50cy5sZW5ndGggLSAxIC0gaW5jb21wbGV0ZUNvdW50ZXI7XHJcblxyXG5cdC8vYnVpbGQgaXRcclxuXHRlbC5jcmVhdGVEaXYoe1xyXG5cdFx0Y2xzOiBcIm1haW4tbGluZVwiLFxyXG5cdFx0YXR0cjoge1xyXG5cdFx0XHRzdHlsZTogYGdyaWQtcm93LWVuZDogJHtcclxuXHRcdFx0XHRjb21wbGV0ZUNvdW50ZXIgLyAzICsgMSArIChpbmNvbXBsZXRlQ291bnRlciAhPSAwID8gMSA6IDApXHJcblx0XHRcdH1gLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGNvbXBsZXRlQ291bnRlcjsgaSArPSAzKSB7XHJcblx0XHRlZi5jcmVhdGUoZXZlbnRzW2ldLCBldmVudHNbaSArIDFdLCBldmVudHNbaSArIDJdKTtcclxuXHR9XHJcblxyXG5cdHN3aXRjaCAoaW5jb21wbGV0ZUNvdW50ZXIpIHtcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0ZWYuY3JlYXRlKGV2ZW50c1tjb21wbGV0ZUNvdW50ZXIgKyAxXSwgXCJcIiwgXCJcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0ZWYuY3JlYXRlKGV2ZW50c1tjb21wbGV0ZUNvdW50ZXIgKyAxXSwgZXZlbnRzW2NvbXBsZXRlQ291bnRlciArIDJdLCBcIlwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRvbmxvYWQoKSB7XHJcblx0XHR0aGlzLnJlZ2lzdGVyTWFya2Rvd25Db2RlQmxvY2tQcm9jZXNzb3IoXCJ0aW1lbGluZVwiLCBjb2RlQmxvY2tIYW5kbGVyKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1hcmtkb3duUmVuZGVyZXIiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BO0FBQ0EsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFhO0lBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUc7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUVqRSxPQUFPLEtBQUs7U0FDVixTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzlCLElBQUksRUFBRTtTQUNOLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixNQUFNLFlBQVk7SUFJakIsWUFBWSxJQUFpQixFQUFFLFVBQWtCO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFV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