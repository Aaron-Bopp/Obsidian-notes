<%* 
const filename = String(tp.file.selection()).trim()
const template = tp.file.find_tfile("EGNOTE") 
await tp.file.create_new(template, filename)
%><% tp.file.selection() %>