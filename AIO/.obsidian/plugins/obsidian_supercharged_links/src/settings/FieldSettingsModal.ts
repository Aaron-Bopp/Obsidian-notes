import {App, Modal, Setting, TextComponent, Notice, ButtonComponent, ExtraButtonComponent, ToggleComponent} from "obsidian"
import SuperchargedLinks from "main"
import Field from "src/Field"
import FieldSetting from "src/settings/FieldSetting"

export default class FieldSettingsModal extends Modal {
	namePromptComponent: TextComponent
	valuesPromptComponents: Array<TextComponent> = []
    isMultiTogglerComponent: ToggleComponent
    isCycleTogglerComponent: ToggleComponent
    listNotePathComponent: TextComponent
    saved: boolean = false
	property: Field
    plugin : SuperchargedLinks
    initialProperty: Field
    parentSetting: Setting
    new: boolean = true
    parentSettingContainer: HTMLElement


	constructor(app: App, plugin: SuperchargedLinks, parentSettingContainer: HTMLElement, parentSetting?: Setting, property?: Field){
		super(app)
        this.plugin = plugin
        this.parentSetting = parentSetting
        this.initialProperty = new Field()
        this.parentSettingContainer = parentSettingContainer
		if(property){
            this.new = false
			this.property = property
            this.initialProperty.name = property.name
            this.initialProperty.id = property.id
            Object.keys(property.values).forEach(k => {
                this.initialProperty.values[k] =  property.values[k]
            })
		} else {
            let newId = 1
            this.plugin.initialProperties.forEach(prop => {
                if(parseInt(prop.id) && parseInt(prop.id) >= newId){
                    newId = parseInt(prop.id) + 1
                }
            })
			this.property = new Field()
            this.property.id = newId.toString()
            this.initialProperty.id = newId.toString()
		}
	}

	onOpen(): void {
        if(this.property.name == ""){
            this.titleEl.setText(`Add a property and set predefined`)
        }else{
            this.titleEl.setText(`Manage settings values for ${this.property.name}`)
        }
		this.createForm()
	}

    onClose(): void {
        Object.assign(this.property, this.initialProperty)
        if(!this.new){
            this.parentSetting.infoEl.textContent = 
                `${this.property.name}: [${Object.keys(this.property.values).map(k => this.property.values[k]).join(', ')}]`
        } else if(this.saved) {
            new FieldSetting(this.parentSettingContainer, this.property, this.app, this.plugin)
        }
    }

    setValueListText(header: HTMLDivElement): void{
        header.setText(`Preset values: ${Object.values(this.property.values).join(', ')}`)
    }

    createnameInputContainer(parentNode: HTMLDivElement): TextComponent {
		const propertyNameContainerLabel = parentNode.createDiv()
		propertyNameContainerLabel.setText(`Property Name:`)
        const input = new TextComponent(parentNode)
        const name = this.property.name
        input.setValue(name)
        input.setPlaceholder("Name of the property")
        input.onChange(value => {
            this.property.name = value
            this.titleEl.setText(`Manage predefined values for ${this.property.name}`)
            FieldSettingsModal.removeValidationError(input)
        })
        return input
    }
	
    createTogglerContainer(parentNode: HTMLDivElement, label: string): ToggleComponent {
        const propertyContainerLabel = parentNode.createDiv({
            cls: 'frontmatter-checkbox-toggler'
        })
        propertyContainerLabel.setText(label)
        const toggler = new ToggleComponent(parentNode)
        toggler.setTooltip("Can this property have multiple values?")
        return toggler
    }

    createListNoteContainer(parentNode: HTMLDivElement): TextComponent {
        const listNoteContainerLabel = parentNode.createDiv()   
		listNoteContainerLabel.setText(`Path of the note containing the values:`)
        const input = new TextComponent(parentNode)
        const listNotePath = this.property.valuesListNotePath
        input.setValue(listNotePath)
        input.setPlaceholder("Path/of/the/note.md")
        input.onChange(value => this.property.valuesListNotePath = value)
        return input
    }

	removePresetValue(key: string): void{
        let newValues: Record<string, string> = {}
        for(let _key in this.property.values){
            if(key !== _key){
                newValues[_key] = this.property.values[_key]
            }
        }
		this.property.values = newValues
	}

	createValueContainer(parentNode: HTMLDivElement, header: HTMLDivElement, key: string): TextComponent {
        const values = this.property.values
        const presetValue = values[key]
		const valueContainer = parentNode.createDiv({
			cls: 'frontmatter-prompt-container',
		})
		const input = new TextComponent(valueContainer)
		input.setValue(presetValue)
		input.onChange(value => {
            this.property.values[key] = value
            this.setValueListText(header)
            FieldSettingsModal.removeValidationError(input)
        })
        const valueRemoveButton = new ButtonComponent(valueContainer)
        valueRemoveButton.setIcon("trash")
            .onClick((evt: MouseEvent) => {
                evt.preventDefault
                this.removePresetValue(key)
                this.setValueListText(header)
                parentNode.removeChild(valueContainer)
                this.valuesPromptComponents.remove(input)
                    
            })
        if(key != Object.keys(this.property.values)[0]){
            const valueUpgradeButton = new ButtonComponent(valueContainer)
            valueUpgradeButton.setButtonText("▲")
            valueUpgradeButton.onClick((evt: MouseEvent) => {
                const thisValue = values[key]
                const upperComponent = this.valuesPromptComponents[this.valuesPromptComponents.indexOf(input)-1]
                if(upperComponent){
                    const upperValue = upperComponent.inputEl.value
                    const upperKey = Object.keys(values).filter(k => values[k] == upperValue)[0]
                    if(upperKey){
                        upperComponent.setValue(thisValue)
                        values[upperKey] = thisValue
                        input.setValue(upperValue)
                        values[key] = upperValue
                    }
                }
            })
        }

		return input
	}

	createForm(): void {
		const div = this.contentEl.createDiv({
			cls: "frontmatter-prompt-div"
		})
        const mainDiv = div.createDiv({
            cls: "frontmatter-prompt-form"
        })
        /* Property Name Section */
		const nameContainer = mainDiv.createDiv()
        this.namePromptComponent = this.createnameInputContainer(nameContainer)
		
		mainDiv.createDiv({cls: 'frontmatter-separator'}).createEl("hr")

        /* Property is Multi section*/

        const multiContainer = mainDiv.createDiv()
        this.isMultiTogglerComponent = this.createTogglerContainer(multiContainer, "Is Multi: ")
        this.isMultiTogglerComponent.setValue(this.property.isMulti)
        this.isMultiTogglerComponent.onChange(value => {
            this.property.isMulti = value
            if(this.property.isCycle && this.property.isMulti){
                this.property.isCycle = false
                this.isCycleTogglerComponent.setValue(false)}
        })

		mainDiv.createDiv({cls: 'frontmatter-separator'}).createEl("hr")

        /* Property is Cycle section*/

        const cycleContainer = mainDiv.createDiv()
        this.isCycleTogglerComponent = this.createTogglerContainer(cycleContainer, "Is Cycle: ")
        this.isCycleTogglerComponent.setValue(this.property.isCycle)
        this.isCycleTogglerComponent.onChange(value => {
            this.property.isCycle = value
            if(this.property.isCycle && this.property.isMulti){
                this.property.isMulti = false
                this.isMultiTogglerComponent.setValue(false)
            }
        })

		mainDiv.createDiv({cls: 'frontmatter-separator'}).createEl("hr")
        
        /* Property's note for list of Values */
        
        const listNotePathContainer = mainDiv.createDiv()
        this.listNotePathComponent = this.createListNoteContainer(listNotePathContainer)

        mainDiv.createDiv({cls: 'frontmatter-separator'}).createEl("hr")
        
        /* Property Values */
		const valuesList = mainDiv.createDiv()
		const valuesListHeader = valuesList.createDiv()
		valuesListHeader.createEl("h2")
		valuesListHeader.setText(`Preset values: ${Object.values(this.property.values).join(', ')}`)
		const valuesListBody = valuesList.createDiv()
		Object.keys(this.property.values).forEach(key => {
			this.valuesPromptComponents.push(this.createValueContainer(valuesListBody, valuesListHeader, key))
		})

        /* Add a new Values */
		const valuesListFooter = valuesList.createDiv()
		const addValue = valuesListFooter.createEl('button')
		addValue.type = 'button'
		addValue.textContent = 'Add'
		addValue.onClickEvent((evt: MouseEvent) => {
			evt.preventDefault
            this.property.insertNewValue("")
            .then(newKey => {this.createValueContainer(valuesListBody, valuesListHeader, newKey)})
			
		})

		mainDiv.createDiv({cls: 'frontmatter-separator'}).createEl("hr")

        /* footer buttons*/
        const footerEl = this.contentEl.createDiv()
        const footerButtons = new Setting(footerEl)
        footerButtons.addButton((b) => this.createSaveButton(b))
        footerButtons.addExtraButton((b) => this.createCancelButton(b));
	}

    createSaveButton(b: ButtonComponent): ButtonComponent{
        b.setTooltip("Save")
            .setIcon("checkmark")
            .onClick(async () => {
                let error = false
                if(/^[#>-]/.test(this.property.name)){
                    FieldSettingsModal.setValidationError(
                        this.namePromptComponent, this.namePromptComponent.inputEl,
                        "Property name cannot start with #, >, -"
                    );
                    error = true;
                }
                if(this.property.name == ""){
                    FieldSettingsModal.setValidationError(
                        this.namePromptComponent, this.namePromptComponent.inputEl,
                        "Property name can not be Empty"
                    );
                    error = true
                }
                this.valuesPromptComponents.forEach(input => {
                    if(/^[#>-]/.test(input.inputEl.value)){
                        FieldSettingsModal.setValidationError(
                            input, input.inputEl.parentElement.lastElementChild,
                            "Values cannot cannot start with #, >, -"
                        );
                        error = true;
                    }
                    if(/[,]/gu.test(input.inputEl.value)){
                        FieldSettingsModal.setValidationError(
                            input, input.inputEl.parentElement.lastElementChild,
                            "Values cannot contain a comma"
                        );
                        error = true;
                    }
                    if(input.inputEl.value == ""){
                        FieldSettingsModal.setValidationError(
                            input, input.inputEl.parentElement.lastElementChild,
                            "Values can't be null."
                        );
                        error = true;
                    }
                })
                if (error) {
                    new Notice("Fix errors before saving.");
                    return;
                }
                this.saved = true;
                const currentExistingProperty = this.plugin.initialProperties.filter(p => p.id == this.property.id)[0]
                if(currentExistingProperty){
                    Field.copyProperty(currentExistingProperty, this.property)
                } else {
                    this.plugin.initialProperties.push(this.property)
                }
                this.initialProperty = this.property
                this.plugin.saveSettings()
                this.close();
            })
        return b
    }

    createCancelButton(b: ExtraButtonComponent): ExtraButtonComponent{
        b.setIcon("cross")
                .setTooltip("Cancel")
                .onClick(() => {
                    this.saved = false;
                    /* reset values from settings */
                    if(this.initialProperty.name != "") {
                        Object.assign(this.property, this.initialProperty)
                    }
                    this.close();
                });
        return b;
    }

    /* utils functions */

    static setValidationError(textInput: TextComponent, insertAfter: Element, message?: string) {
        textInput.inputEl.addClass("is-invalid");
        if (message) {

            let mDiv = textInput.inputEl.parentElement.querySelector(
                ".invalid-feedback"
            ) as HTMLDivElement;

            if (!mDiv) {
                mDiv = createDiv({ cls: "invalid-feedback" });
            }
            mDiv.innerText = message;
            mDiv.insertAfter(insertAfter);
        }
    }
    static removeValidationError(textInput: TextComponent) {
        if(textInput.inputEl.hasClass("is-invalid")){
            textInput.inputEl.removeClass("is-invalid")
            textInput.inputEl.parentElement.removeChild(
                textInput.inputEl.parentElement.lastElementChild
            )
        }
    }
}