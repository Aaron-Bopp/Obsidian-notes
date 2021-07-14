# main entry point
# validate obsidian vault location
if len(sys.argv) > 1:
    obsidian_home = sys.argv[1]
    if not os.path.isdir(obsidian_home):
        print('folder specified is not valid')
        exit()
    
    # check for additional flags
    if len(sys.argv) > 2:
        for arg_index in range(2, len(sys.argv)):
            flag = sys.argv[arg_index]

            if flag == "-w":
                wikipedia_mode = True
            elif flag == "-p":
                wikipedia_mode = True
                paragraph_mode = True
            elif flag == "-r":
                regenerate_aliases = True
            elif flag == "-y":
                yaml_mode = True
            elif flag == "-u":
                clear_links = True
            elif flag == "-t":
                all_text = True

else:
    print("usage - python obs-link.py <path to obsidian vault> [-r] [-y] [-w / -p]")
    print("-r = regenerate the aliases.md file using yaml frontmatter inside vault markdown files")
    print("-y = use aliases.yml as aliases file instead of aliases.md")
    print("-w = only the first occurrence of a page title (or alias) in the content will be linked ('wikipedia mode')")
    print("-p = only the first occurrence of a page title (or alias) in each paragraph will be linked ('paragraph mode')")
    print("-u = remove existing links in clipboard text before performing linking")
    print("-t = perform replacements on all text in vault")
    exit()

aliases_file = obsidian_home + "/aliases.md"

if (all_text):
    print("hit")
    for root, dirs, files in os.walk(obsidian_home):
        for file in files:
            # ignore any 'dot' folders (.trash, .obsidian, etc.)
            print(file)
            if file.endswith('.md') and '\\.' not in root and '/.' not in root and "aliases" not in file:
                with open(root + "/" + file, 'r', encoding="utf-8") as f:
                    unlinked_txt = f.read()
                    
                    start_of_yaml = unlinked_txt.find("---", 0, 10)
                    end_of_yaml = unlinked_txt.find("---", start_of_yaml)
                    base_yaml = ""
                    if start_of_yaml > -1:
                        base_yaml += unlinked_txt[start_of_yaml+4: end_of_yaml]
                    unlinked_txt = unlinked_txt[end_of_yaml+3:]

                with open(root + "/" + file, 'w', encoding="utf-8") as f:
                    print(file)
                    if (clear_links):
                        unlinked_txt = unlinkr.unlink_text(unlinked_txt)
                    
                    linked_txt = ""

                    if paragraph_mode:
                        for paragraph in unlinked_txt.split("\n"):
                            linked_txt += link_content(paragraph) + "\n"
                        linked_txt = linked_txt[:-1] # scrub the last newline
                    else:
                        for paragraph in unlinked_txt.split("\n"):
                            if '# ' in paragraph or '::' in paragraph:
                                print(paragraph)
                            else:
                                linked_txt += link_content(paragraph) + "\n"
                        linked_txt = linked_txt[:-1] # scrub the last newline
                    
                    f.write(f"---\n{base_yaml}---\n{linked_txt}")