## Obsidian Internal Links supercharger

Internal links adds attributes to <a.internal-link> HTMLElements with the attributes and values of the target file's frontmatter.
Combined with css snippets, it allows a very flexible way to customize the links

It also adds context menu items to modifiy target note's frontmatter properties and "inline fields" (dataview syntax) by right-clicking on the link

The preset values for those properties can be managed globally in the plugin's settings or on a file-by-file basis thanks to fileClass definition (see section 4)

<img src=https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/e147ac10179d2c351d9a9f222e4637ee7fe32aed/images/superchargeLink.gif alt="drawing" style="width:600px;"/>

## 1. Basic link styling

The plugin basically scans the target file of each internal link of the files that are currently opened in your workspace.

It gathers some specific front-matter properties and includes them in the html element of the link, with the value of the property contained in the target note's front matter section.

Complicated 😰.... let's break it down step by step

### 1.a Front-matter

As a reminder, front-matter section is an optional section of your note written in Yaml. 
Here is the documentation about front-matter on Obsidian help website https://help.obsidian.md/Advanced+topics/YAML+front+matter

Let's say I have a note about Jim : Jim.md

```md
---
category: people
next-actions: [👥, ☎️, 🍻, say hi]
age: 42
---

Jim is one of my colleagues

```

Let's say that I want to have a specific display of the internal-links linking to Jim's note to display a blue tag-like rounded rectangle <img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/simple-styling.png" style="height:30px;vertical-align:bottom">  and display <img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/simple-styling-hover.png" style="height:30px;vertical-align:bottom">  when hovering the link

### 1.b Settings

First you'll have to tell the plugin which front-matter kind of properties you want your internal-link to be supercharged with in the `Target Attributes for Styling` section of the plugin's settings

here are my settings

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-settings.png" alt="drawing" style="width:400px;"/>

So in this case the plugin will only include `category`, `next-actions` and `tags` in the internal-links

You can choose to exclude the inline fields to be targetted: it ensures that frontmatter attributes are properly red event if the file is very large (60k+ characters)

### 1.c a.internal-links

When a file is opened or when one of the files of your vault has changed, the plugin is "supercharging" all internal-links with the front-matter properties set in the settings, if there are such properties in the file targeted by the link.

Let's say that I have a file daily.md like this:

Daily.md

```md
[[Jim]] will be organizing the weekly steering committee
```

Without the plugin activated, the html link element would normally look like this: 

```
<a data-href="Jim" href="Jim" class="internal-link" target="_blank" rel="noopener">Jim</a>
```

You wouldn't really know anything about Jim.md's specificity here and therefore wouldn't be able to customize it a lot.

That's where the plugin comes in: it will add two extra properties in the `<a>` element : `category` and `next-actions`. 
Since `tags` is not existing in Jim.md front-matter section, it won't be included.

**heads-up** the plugin is not adding directly `category` and `next-actions` property. Instead, it will prefix them with `data-link` in order not to potentially conflict with other attribute management ssystem made by other plugins or Obsidian itself.

So... with the plugin activated the `<a>`element will be supercharged like this: `<a data-href="Jim" href="Jim" class="internal-link" target="_blank" rel="noopener" data-link-category="people" data-link-next-actions="👥 ☎️ 🍻 say hi">Jim</a>`

As you can see, even if `tags` is included in settings as a property to track, since it's not included in Jim.md front-matter section, the property `data-link-tags` isn't included in the `<a>` element

### 1.d css

Now you can enjoy the flexibilty of css to customize your links by setting css properties in a snippet like `links.css`

exemple: 

to put a fancy 👤 emoji before the name of each link to a "category: people" note:
```css
a.internal-link[data-link-category$="People" i]::before{
    content: "👤 "
}
```
<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-in-note.png" style="width:500px">

to highlight the link in a tag-like blue rounded rectangle when there is a property next-actions in the target file:

```css
a.internal-link[data-link-next-actions]{
    color: white;
    background-color: rgb(29, 29, 129);
    border-radius: 18px;
    padding: 5px 15px;
}
```

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-tag-in-note.png" style="width:500px">

to display the next actions contained in the next-actions property of the target file when hovering the link:

```css
a.internal-link[data-link-next-actions]:hover::after{
    content: " ► "attr(data-link-next-actions)
}
```

<img src="https://raw.githubusercontent.com/mdelobelle/obsidian_supercharged_links/master/images/link-styling-hover-in-note.png" style="width:500px">

### 1.e Some demo

#### Internal link simple styling
https://youtu.be/tyEdsmAQb_4

#### Multiple properties
https://youtu.be/Ofm6gIRP-7o

#### Multiple values for a preperty
https://youtu.be/aaSZnkEuH4w

## 2. Link context menu extra options

Right click on a link will automatically display an item per target note's frontmatter property and "inline fields" (dataview syntax)

these options are accessible from:
- the context menu of a link, 
- the context menu of a calendar day, 
- the context menu of a file in the file explorer,
- the "more options" menu of a file
- the command palette "Cmd+P" or by typing the hotkey Alt+O (can be customized in hotkeys settings) 

### 2.a Update text property

1. Right-click on the link
1. Click on "Update .... " to change the property's value
1. Change the value in the modal's prompt
1. Type `enter` to save or click X or `esc` to cancel

demo: 
https://youtu.be/qhtPKstdnhI

### 2.b Update boolean property

1. Right-click on the link
1. Toggle the swith in the modal to change the value 
1. Press `esc` to leave the modal

demo: 
https://youtu.be/iwL-HqvoNOs

### 2.c Update multiple values property

1. Right-click on the link
1. Change values comma-separated
1. Press `enter`, the values will be displayed as an array of values in the target note's frontmatter property

**this doesn't work with indented lists YAML format**

demo:
https://youtu.be/WaW6xElq0T4

### 2.d Preset values for property

1. Add a new Property Manager in the settings
2. Enter the property name
3. Add preset values (you can order them once the property has been created)

Back in a note Right-click on the link

4. Click on "Update .... " to change the property's value
5. The modal will display a dropdown list with preset values
6. Change the value in the modal's dropdown
7. Click on the save button to save or click X or `esc` to cancel

demo:
https://youtu.be/GryvvJ6qIg4

### 2.e Multi select preset values for property

1. In the settings, follow the steps 1 to 3 of previous section
2. Toggle the `isMulti` switch

Back in a note Right-click on the link

3. Click on "Update .... " to change the property's value
4. The modal will display a grid of switches for preset values
5. Change the values by toggling the switches in the modal
6. Click on the save button to save or click X or `esc` to cancel

demo:
https://youtu.be/iyIG6LmCcuc

### 2.f Cycle through preset values

1. In the settings, follow the steps 1 to 3 of previous section
2. Toggle the `isCycle` switch

Back in a note Right-click on the link

3. Click on " .. > .. " to change the property's value for the next one in the settings list

demo:
https://youtu.be/7BqG4sG15jc

### 2.g Add a new property at section

1. Right-click on the link
2. Click on "Add field at section"
3. Select the line in the target file where you want to insert the new field
4. Select the field
5. Select/input the value for this field (if the field has preset values, you will be prompted to choose one)

demo:
https://youtu.be/JYURK2CM3Es

## 3. Manage Authorized / Ignored fields

### 3.a Disable field options in context menu

In the settings

1. toggle "display field option in context menu"
If toggled on, the context menu will include field options
If toggled off, the context menu wont include field options

demo:
https://youtu.be/PC3MC0CfG0E

### 3.b Ignore fields globally

In the settings

1. Add the fields you don't want to see in your context menu, comma separated

demo:
https://youtu.be/eFkxECqBvvY

## 4. Manage preset values based on the context of a file (fileClass)

### 4.a Define a class for a file and authorized fields for this class

a class file is basically a simple note
the name of the file will be the name of the class
the lines of the file will be the fields managed for this class

1. Define the folder where you wan't to store your class files
2. Create a note in this folder, let say `music.md`, containing lines with the name of fields that you want to manage for this class
```md
music.md
=========
genre
difficulty
artist
tone
```
3. In a regular note, let's say `Black Dog.md`, insert a frontmatter field named `fileClass`
4. The value of `fileClass` has to be the name of the file Class where you have the fields that you want to manage for this note. e.g in our case
```yaml
---
fileClass: music
---
```
5. when right-clicking on a link to `Black Dog.md`, the fields in the context menu will be filter to show only the ones that are also included in `music.md`

demo:
https://youtu.be/Av7DeYZILUk

### 4.b Define preset values for a class

You can specify the type of an attribute in a fileClass, and its options. Type and Options are called "attributes settings"

Type can be one of:
- "input" (default) : this field can take any value
- "select" : this field can take one value out of a list of items preset in options (see below)
- "multi" : this field can take 0,1 or multiple values out of a list of items preset in options (see below)
- "cycle" : this field can take one value that can "progress" within a list of items preset in options (see below)

Options is an array of options

An attribute settings is written in JSON and must be written as a value of and "inline (dataview) field"

example: Say you want to set "genre" attribute in `music.md` fileClass as a "multi" with "rock", "pop" and "jazz" as options, and you want to set "difficulty", "artist" and "tone" as fields that can take any value, your `music.md` will look like this:

```md
music.md
=========
genre:: {"type":"multi", "options":["rock", "pop", "jazz"]}
difficulty
artist
tone
```

NB: "input" type attributes dont need a setting, leaving the name of the attribute only will categorize this attribute automatically as an "input" type.

Because it can be overwhelming to remember this syntax, you can manage "type" and "options" for each fields from:
- the context menu of a note that has this fileClass as a frontmatter's fileClass attribute : click on [`⚙️ Manage <music> fields`] for `music.md` from any file with `fileClass: music` set in frontmatter
- the more-options menu of a fileClass file
- a command within a fileClass file (`alt+P`)

demo:
https://youtu.be/U0Bo_x1B2TM

## 5. Roadmap

- [x] link context menu to modify frontmatter attributes
- [ ] manage indented lists multi-values frontmatter property
- [x] extend options management to iinline-fields
- [x] fileClass fields types and validators
