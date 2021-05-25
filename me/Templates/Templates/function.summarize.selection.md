<%*
// passing plain text on cmd (vie the --text sumy flag) could have issues with escape characters, so we'll create a temp file instead

let temp = "__tempsummaryfile.md__"
let tempPath = this.app.vault.adapter.getBasePath() + "\\Templates" + temp
let tempFile = await this.app.vault.create(temp, ''); 

await this.app.vault.modify(tempFile, tp.file.selection());

let summary = await tp.user.sumy_file({sumylen: '50%', sumyfile: tempPath});
tR = summary;

await this.app.vault.delete(tempFile, true); 
%>