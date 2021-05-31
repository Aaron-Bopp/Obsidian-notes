import os
notes = {}
with os.scandir() as vault:
    for entry in vault:
        if entry.is_file() and entry.name.endswith(".md"):
            with open(entry.path) as text:
                lines = text.readlines()
                notes.setdefault(entry, lines)
                
for name in notes:               
    for line in notes[name]:
        while True:
            for tagPattern in ["[[TO", "[[EVER"]:
                try:
                    tagStart = line.index(tagPattern)
                    tagEnd = line.index("]]", tagStart)
                    tag = line[tagStart:tagEnd]
                    line = line[0:tag] + "#" + tag[2:len(tag)-2] + line[tagEnd:]
                except ValueError:
                    if tagPattern == "[[EVER":
                        break
            break