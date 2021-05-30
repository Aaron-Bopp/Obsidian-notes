<%*
let percentages = ["5%", "13%", "21%","33%","54%"];
let perc = await tp.system.suggester(percentages, percentages);
let path = tp.file.path().replace(/\//gm, "\\"); // fix mismatch between forward and backward slash in path

let summary = await tp.user.sumy_file({sumylen: perc, sumyfile: path });
let content = await tp.file.content;
this.app.vault.modify(tp.file, " ") ;

tR = '# Summary\n<% tp.file.cursor() %>'+ summary + '\n\n' + content ;
%>