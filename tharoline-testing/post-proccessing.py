# %%
import json
import os
with open('entities.json') as f:
    entities = json.load(f)  

# %%
def load_notes():
    with os.scandir() as vault:
        for folder in vault:
            if folder.is_dir() and folder.name != ".obsidian":
                with os.scandir(folder.path) as vault_folder:
                    for note in vault_folder:
                        if note.name.endswith(".md"):
                            