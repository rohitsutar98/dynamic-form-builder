$(document).on("ready", () => {
    const leftSection = $(".left-section");
    const configureFieldForm = $(".configure-field-form");
    const basicDataFieldsSection = $(".basic-data-fields-section");
    const controlConfigFieldSection = $(".control-config-field-section");
    const fileConfigFieldSection = $(".file-config-field-section");
    const dependentFieldWrapper = $(".dependent-field-wrapper");
    const attributeFieldSection = $(".attribute-field-section");
    const configureFieldModal = $("#configure-field-modal");
    const textFieldConfigurationWrapper = $(".text-field-configuration-wrapper");
    const formBuilderData = $("#formBuilderData");

    const dependentFieldMapper = {
        "text field": ["min-length-field", "max-length-field", "pattern-field"],
        "text area": ["min-length-field", "max-length-field", "rows-field"],
        number: ["min-length-field", "max-length-field"],
        "check box": ["option-type-field"],
        dropdown: ["option-type-field"],
        radio: ["option-type-field"],
        date: ["date-format-input", "future-date-input"],
        grid: ["permissions-field-group"],
        "file upload": ["preview-type-input"],
        "maker checker": ["preview-type-input", "template-name-field"],
        "doc viewer": ["variable-id-field", "column-width-field"],
        popup: ["edit-extraction-field"]
    };

    const mapperObj = {
        inputtype: [
            {
                label: "String",
                value: "String"
            },
            {
                label: "Integer",
                value: "Integer"
            },
            {
                label: "Double",
                value: "Double"
            },
            {
                label: "Long",
                value: "Long"
            },
            {
                label: "Boolean",
                value: "Boolean"
            },
            {
                label: "Date",
                value: "Date"
            },
            {
                label: "Grid",
                value: "Grid"
            }
        ],
        doctype: [
            {
                label: "File Upload",
                value: "File Upload"
            },
            {
                label: "Maker Checker",
                value: "Maker Checker"
            },
            {
                label: "Doc Viewer",
                value: "Doc Viewer"
            },
        ],
        previewtype: [
            {
                label: "Popup",
                value: "Popup"
            },
            {
                label: "Inline",
                value: "Inline"
            },
            {
                label: "Doc Viewer",
                value: "Doc Viewer"
            },
            {
                label: "None",
                value: "None"
            },
        ],
        "string": [
            {
                label: "Text Field",
                value: "Text Field"
            },
            {
                label: "Text Area",
                value: "Text Area"
            },
            {
                label: "Check Box",
                value: "Check Box"
            },
            {
                label: "Dropdown",
                value: "Dropdown"
            },
            {
                label: "Radio",
                value: "Radio"
            }
        ],
        "integer": [
            {
                label: "Number",
                value: "Number"
            },
        ],
        "double": [
            {
                label: "Number",
                value: "Number"
            },
        ],
        "long": [
            {
                label: "Number",
                value: "Number"
            },
        ],
        "boolean": [
            {
                label: "Radio",
                value: "Radio"
            },
            {
                label: "Check Box",
                value: "Check Box"
            },
            {
                label: "Dropdown",
                value: "Dropdown"
            }
        ],
        "date": [
            {
                label: "Date",
                value: "Date"
            }
        ],
        "grid": [
            {
                label: "Grid",
                value: "Grid"
            }
        ],
        patterns: [
            {
                label: "none",
                value: ""
            },
            {
                label: "Email",
                value: "email"
            },
            {
                label: "Alphanumeric",
                value: "alphanumeric"
            },
            {
                label: "US Contact",
                value: "USContact"
            },
            {
                label: "Indian Contact",
                value: "IndianContact"
            },
            {
                label: "Credit Card Number",
                value: "creditCard"
            },
            {
                label: "Uppercase",
                value: "uppercase"
            },
            {
                label: "Lowercase",
                value: "lowercase"
            },
            {
                label: "URL",
                value: "url"
            },
            {
                label: "Zip Code",
                value: "zipCode"
            }
        ],
        format: [
            {
                "label": "Please Select",
                "value": ""
            },
            {
                "label": "MM-DD-YYYY",
                "value": "MM-DD-YYYY"
            },
            {
                "label": "DD/MM/YYYY",
                "value": "DD/MM/YYYY"
            },
            {
                "label": "DD-MM-YYYY",
                "value": "DD-MM-YYYY"
            },
            {
                "label": "MM/DD/YYYY",
                "value": "MM/DD/YYYY"
            },
            {
                "label": "MM/DD/YY",
                "value": "MM/DD/YY"
            },
            {
                "label": "MM-DD-YY",
                "value": "MM-DD-YY"
            },
            {
                "label": "DD/MM/YY",
                "value": "DD/MM/YY"
            },
            {
                "label": "DD-MM-YY",
                "value": "DD-MM-YY"
            },
            {
                "label": "MMM DD, YYYY",
                "value": "MMM DD, YYYY"
            },
            {
                "label": "DD/MM/YYYY HH:MM:SS",
                "value": "DD/MM/YYYY HH:MM:SS"
            },
            {
                "label": "DD/MM/YYYY HH:MM",
                "value": "DD/MM/YYYY HH:MM"
            },
            {
                "label": "DD-MM-YYYY HH:MM:SS",
                "value": "DD-MM-YYYY HH:MM:SS"
            },
            {
                "label": "DD-MM-YYYY HH:MM",
                "value": "DD-MM-YYYY HH:MM"
            },
            {
                "label": "MM/DD/YYYY HH:MM:SS",
                "value": "MM/DD/YYYY HH:MM:SS"
            },
            {
                "label": "MM/DD/YYYY HH:MM",
                "value": "MM/DD/YYYY HH:MM"
            },
            {
                "label": "MM-DD-YYYY HH:MM:SS",
                "value": "MM-DD-YYYY HH:MM:SS"
            },
            {
                "label": "MM-DD-YYYY HH:MM",
                "value": "MM-DD-YYYY HH:MM"
            }
        ],
        "options": [
            {
                label: "Option 1",
                value: "option-1"
            },
            {
                label: "Option 2",
                value: "option-2"
            }
        ],
    }

    const constants = [
        {
            "label": "Gender",
            "value": "gender",
            "options": [
                {
                    label: "Male",
                    value: "Male"
                },
                {
                    label: "Female",
                    value: "Female"
                }
            ],
        },
        {
            "label": "Approval",
            "value": "approval",
            "options": [
                {
                    label: "In progress",
                    value: "In progress"
                },
                {
                    label: "Pending",
                    value: "Pending"
                },
                {
                    label: "Approved",
                    value: "Approved"
                }
            ],
        },

        {
            "label": "City",
            "value": "city",
            "options": [
                {
                    label: "Mumbai",
                    value: "Mumbai"
                },
                {
                    label: "Pune",
                    value: "Pune"
                }
            ],
        },

    ]

    const typeMaster = {
        "String": "text",
        "text": "text",
        "Number": "number",
        "number": "number",
        "Integer": "number",
        "Date": "date",
        "date": "date"
    }

    const layoutDataField = [
        {
            label: "Id",
            type: "text",
            name: "id",
            readonly: true,
            class: "form-control"
        },
        {
            label: "Title",
            type: "text",
            name: "label",
            readonly: true,
            class: "form-control"
        },
        {
            label: "Columns",
            type: "dropdown",
            name: "columns",
            placeholder: "Enter no. of columns",
            class: "form-control",
            options: Array.from(Array(12).keys()).map(v => {
                let num = (v + 1).toString();
                return { label: num, value: num }
            })

        },
    ]

    const basicDataField = [
        {
            label: "Id",
            type: "text",
            name: "id",
            readonly: true,
            class: "form-control"
        },
        {
            label: "Label",
            type: "text",
            name: "label",
            placeholder: "Enter label",
            class: "form-control label-field",
            required: true
        },
        {
            label: "Default Value",
            type: "text",
            name: "defaultValue",
            placeholder: "Enter default value",
            class: "form-control"
        },
    ]

    const tableColumnBasicField = [
        {
            label: "Id",
            type: "text",
            name: "id",
            readonly: true,
            class: "form-control"
        },
        {
            label: "Column Name",
            type: "text",
            name: "label",
            placeholder: "Enter label",
            class: "form-control label-field",
            required: true
        },
    ]

    const controlConfigField = [
        {
            label: "Type",
            type: "dropdown",
            name: "type",
            placeholder: "Select type",
            class: "form-control input-type-field",
            required: true,
            options: [
                ...mapperObj["inputtype"]
            ]
        },
        {
            label: "Control Type",
            type: "dropdown",
            name: "Control Type",
            placeholder: "Select control type",
            class: "form-control control-type-input constraint-field",
            required: true,
            options: [
                ...mapperObj["string"]
            ]
        },
        {
            label: "Min Length",
            type: "number",
            name: "Min Length",
            placeholder: "Enter min value",
            class: "form-control length-field min-length-field constraint-field",
            is_dependent: true
        },
        {
            label: "Max Length",
            type: "number",
            name: "Max Length",
            placeholder: "Enter max value",
            class: "form-control length-field max-length-field constraint-field",
            is_dependent: true
        },
        {
            label: "Rows",
            type: "text",
            name: "Rows",
            placeholder: "Enter rows",
            class: "form-control rows-field constraint-field",
            is_dependent: true
        },
        {
            label: "Pattern",
            type: "dropdown",
            name: "pattern",
            placeholder: "Select pattern",
            class: "form-control pattern-field constraint-field",
            is_dependent: true,
            options: mapperObj.patterns
        },
        {
            label: "Option Type",
            type: "radio",
            name: "radio-button",
            class: "radio-button-group option-type-field",
            required: true,
            is_dependent: true,
            options: [
                {
                    id: 1,
                    label: "Constants",
                    type: "radio",
                    name: "option-type",
                    value: "constants",
                    class: "configure-field-input option-type-field"
                },
                {
                    id: 2,
                    label: "Custom",
                    type: "radio",
                    name: "option-type",
                    value: "custom",
                    class: "configure-field-input option-type-field"
                },
            ]
        },
        {
            label: "Constants",
            type: "dropdown",
            inputType: "dropdown",
            placeholder: "Select constants",
            class: "option-type-dependent-field constants-options form-control",
            is_dependent: true,
            options: [...constants]
        },
        {
            label: "Custom Option",
            type: "options",
            inputType: "dropdown",
            class: "option-type-dependent-field custom-options",
            is_dependent: true,
            options: [
                {
                    "name": "",
                    "value": ""
                }
            ]
        },
        {
            label: "Permissions",
            type: "checkbox",
            class: "checkbox-button-group permissions-field-group",
            is_dependent: true,
            options: [
                {
                    id: 1,
                    label: "Add",
                    type: "checkbox",
                    name: "enable_add",
                    value: "add",
                    class: "constraint-field permission-field configure-field-input"
                },
                {
                    id: 2,
                    label: "Edit",
                    type: "checkbox",
                    name: "enable_edit",
                    value: "edit",
                    class: "constraint-field permission-field configure-field-input"
                },
                {
                    id: 3,
                    label: "Delete",
                    type: "checkbox",
                    name: "enable_delete",
                    value: "delete",
                    class: "constraint-field permission-field configure-field-input"
                }
            ]
        },
        {
            label: "Format",
            type: "dropdown",
            name: "Format",
            placeholder: "Select date format",
            class: "form-control date-format-input constraint-field",
            is_dependent: true,
            options: [...mapperObj["format"]]
        },
        {
            label: "Future Date",
            type: "checkbox",
            name: "Future Date",
            class: "hide-label",
            is_dependent: true,
            options: [
                {
                    label: "Future Date",
                    value: "Future Date",
                    class: "future-date-input check-button-field constraint-field",
                }
            ]
        }
    ]

    const docConfigField = [
        {
            label: "Type",
            type: "dropdown",
            name: "type",
            placeholder: "Select type",
            class: "form-control document-type-field",
            required: true,
            options: [...mapperObj["doctype"]]
        },
        {
            label: "Preview Type",
            type: "dropdown",
            name: "Preview Type",
            placeholder: "Select preview type",
            class: "form-control preview-type-input constraint-field",
            is_dependent: true,
            required: true,
            options: [...mapperObj["previewtype"]]
        },
        {
            label: "Edit Extraction",
            type: "dropdown",
            name: "Edit Extraction",
            placeholder: "Select extraction type",
            class: "edit-extraction-field form-control constraint-field",
            is_dependent: true,
            options: [
                {
                    label: "Full",
                    value: "Full"
                },
                {
                    label: "Assisted",
                    value: "Assisted"
                },
                {
                    label: "None",
                    value: "None"
                },
            ]
        },
        {
            label: "Template Name",
            type: "text",
            name: "template_name",
            placeholder: "Enter template name",
            class: "form-control template-name-field",
            is_dependent: true
        },
        {
            label: "Variable ID",
            type: "text",
            name: "variable_id",
            placeholder: "Enter variable id",
            class: "form-control variable-id-field",
            is_dependent: true
        },
        {
            label: "Column Width",
            type: "number",
            name: "column_width",
            placeholder: "Enter column width",
            class: "form-control column-width-field",
            is_dependent: true
        },
        {
            label: "Path",
            type: "text",
            name: "path",
            placeholder: "Enter path",
            class: "form-control path-field",
        },
    ]

    const filesConfigFields = [
        {
            label: "File Type",
            type: "radio",
            name: "radio-button",
            class: "radio-button-group file-upload-radios",
            options: [
                {
                    id: 1,
                    label: "Single",
                    type: "radio",
                    name: "File Type",
                    value: "Single",
                    class: "configure-field-input file-upload-type-field constraint-field"
                },
                {
                    id: 2,
                    label: "Multiple",
                    type: "radio",
                    name: "File Type",
                    value: "Multiple",
                    class: "configure-field-input file-upload-type-field constraint-field"
                },
            ]
        },
        {
            label: "Min Length",
            type: "number",
            name: "Min Length",
            placeholder: "Enter min value",
            class: "form-control length-field min-length-field constraint-field",
        },
        {
            label: "Max Length",
            type: "number",
            name: "Max Length",
            placeholder: "Enter max value",
            class: "form-control length-field max-length-field constraint-field",
        },
    ]

    const attributeFields = [
        {
            label: "Attributes",
            type: "radio",
            name: "radio-button",
            class: "radio-button-group",
            options: [
                {
                    id: 1,
                    label: "Required",
                    type: "radio",
                    name: "radio-button",
                    value: "required",
                    class: "constraint-field attribute-field configure-field-input"
                },
                {
                    id: 2,
                    label: "Readonly",
                    type: "radio",
                    name: "radio-button",
                    value: "readonly",
                    class: "constraint-field attribute-field configure-field-input"
                },
                {
                    id: 3,
                    label: "Hidden",
                    type: "radio",
                    name: "radio-button",
                    value: "hidden",
                    class: "constraint-field attribute-field configure-field-input"
                },
                {
                    id: 4,
                    label: "None",
                    type: "radio",
                    name: "radio-button",
                    value: "none",
                    class: "constraint-field attribute-field configure-field-input"
                }
            ]
        },
        {
            label: "Help Text",
            type: "text",
            name: "Help Text",
            placeholder: "Enter help text",
            class: "form-control constraint-field"
        },
    ]

    const inputType = {
        "text field": "String",
        "number": "Integer",
        "date": "Date",
        "text area": "String",
        "dropdown": "String",
        "radio": "String",
        "check box": "String",
        "grid": "Grid",
        "document": "File Upload"
    }

    const draggableFields = [
        {
            id: 1,
            label: "Row",
            type: "row",
            className: "draggable-row-elements draggable-layout-elements"
        },
        {
            id: 2,
            label: "Col",
            type: "col",
            className: "draggable-col-elements draggable-layout-elements"
        },
        {
            id: 3,
            label: "Section",
            type: "section",
            className: "draggable-section-elements"
        },
        {
            id: 4,
            label: "Text Field",
            type: "text field",
            className: "draggable-elements"
        },
        {
            id: 5,
            label: "Number",
            type: "number",
            className: "draggable-elements"
        },
        {
            id: 6,
            label: "Date",
            type: "date",
            className: "draggable-elements"
        },
        {
            id: 7,
            label: "Text Area",
            type: "text area",
            className: "draggable-elements"
        },
        {
            id: 8,
            label: "Dropdown",
            type: "dropdown",
            className: "draggable-elements"
        },
        {
            id: 9,
            label: "Radio",
            type: "radio",
            className: "draggable-elements"
        },
        {
            id: 10,
            label: "Check Box",
            type: "check box",
            className: "draggable-elements"
        },
        {
            id: 11,
            label: "Grid",
            type: "grid",
            className: "draggable-elements"
        },
        {
            id: 12,
            label: "Column",
            type: "column",
            className: "draggable-column-elements"
        },
        {
            id: 13,
            label: "Document",
            type: "document",
            className: "draggable-elements doc-formfield"
        }
    ];

    let objToUpdate = {};


    function getNextUniqueId(parentDiv) {
        let existingIds = $(parentDiv).children().map(function () {
            return parseInt(extractId($(this)?.attr('data-uuid')));
        }).get();

        if (existingIds.length === 0) {
            return "00";
        }

        existingIds.sort((a, b) => a - b);

        for (let i = 0; i <= existingIds.length; i++) {
            if (existingIds[i] !== i) {
                return i < 10 ? `0${i}` : i
            }
        }

        let newId = existingIds.length;
        return newId < 10 ? `0${newId}` : newId;
    }

    function extractId(fieldId) {
        return `${fieldId?.charAt(2)}${fieldId?.charAt(3)}`
    }

    function createConfigureFieldForm(fields, data, isDoc) {
        return fields?.map(field => {

            let selectedOption = "";
            let accessName = "";
            let lowercaseLabel = field?.label?.toLowerCase();

            if (
                lowercaseLabel == "control type" ||
                lowercaseLabel == "min length" ||
                lowercaseLabel == "max length" ||
                lowercaseLabel == 'pattern' ||
                lowercaseLabel == "rows" ||
                lowercaseLabel == "preview type" ||
                lowercaseLabel == "format" ||
                lowercaseLabel == "future date" ||
                lowercaseLabel == "edit extraction"
            ) {
                let fieldData = data?.validation?.constraints?.find(item => item?.name?.toLowerCase() == lowercaseLabel)
                data = fieldData ? { ...data, [fieldData?.name]: fieldData?.config } : data

                if (lowercaseLabel != 'pattern' && lowercaseLabel != 'rows' && lowercaseLabel != 'preview type' && lowercaseLabel != "edit extraction" && lowercaseLabel != "format" && lowercaseLabel != "future date") {
                    field = {
                        ...field, options: mapperObj[data?.type?.toLowerCase() || ""] || []
                    }
                }
            }

            if (field?.label == 'Option Type' && data?.master) {
                selectedOption = data?.master?.toLowerCase() == "custom" ? "custom" : "constants";
                $(`.${selectedOption}-options`).closest(".dependent-field").show();
            }

            if (field?.label.toLowerCase() == "attributes" || field?.label.toLowerCase() == "permissions") {
                let options = field?.options.map(item => item?.label);
                let fieldData = data?.validation?.constraints?.find(item => {
                    if (options?.includes(item?.name) && item?.config) {
                        return item
                    }
                })
                selectedOption = fieldData?.name.toLowerCase() || ''
            }

            if (field?.label.toLowerCase() == "file type") {
                let fieldData = data?.validation?.constraints?.find(item => {
                    if (item?.name?.toLowerCase() == "file type" && item?.config) {
                        return item
                    }
                })
                selectedOption = fieldData?.config?.toLowerCase() || ""
            }

            if (data?.master) {
                accessName = "master"
            }

            if (field.type == "text" || field.type == "number" || field.type == "date") {
                return `<div class="form-group ${field?.is_dependent ? "dependent-field" : ""}">
                    <label>${field?.label || ""}${field?.required ? `<span class="required-field text-danger">*</span>` : ""}</label>
                    <input type="${field?.type || "text"}" name="${field.name || ""}" placeholder="${field?.placeholder || ""}"
                        class="${field?.class || "form-control"} ${field?.required ? "required-form-field" : ""} configure-field-input" ${field?.readonly ? 'readonly' : ''} value="${data?.[field?.name] || ""}">
                </div>`
            }

            if (field.type == "dropdown") {
                return `
                <div class="form-group ${field?.is_dependent ? "dependent-field" : ""}">
                    <label>${field?.label || ""}${field?.required ? `<span class="required-field text-danger">*</span>` : ""}</label>
                    <select class="${field?.class || "form-control"} ${field?.required ? "required-form-field" : ""} configure-field-input" name="${field?.name}">
                        <option value="">${field?.placeholder || "Select option"}</option>
                        ${field?.options?.map(opt => `<option value="${opt?.value || ""}" ${opt?.value?.toLowerCase() == data?.[field?.name]?.toLowerCase() || opt?.value?.toLowerCase() == data?.[accessName]?.toLowerCase() ? "selected" : ""}>${opt?.label || ""}</option>`).join("")}
                    </select>
                </div>`
            }

            if (field.type == "radio") {
                return `
                <div class="form-group ${field?.is_dependent ? "dependent-field" : ""}">
                    <label>${field?.label || ""}${field?.required ? `<span class="required-field text-danger">*</span>` : ""}</label>
                    <div class="${field?.class || ""} configure-field-input">
                        ${field?.options?.map(opt => `<label class="radio-label"><input type="${opt.type || ""}" name="${field.label.toLowerCase().replaceAll(" ", "-")}-radio-button" value="${opt?.value}" data-value="${opt?.value}" class="${opt?.class || ""} ${field?.required ? "required-form-field" : ""}" ${opt?.value?.toLowerCase() == selectedOption?.toLowerCase() ? "checked" : ""} /><p class="radio-title">${opt?.label}</p></label>`).join("")}
                    </div>
                </div>`
            }

            if (field.type == "checkbox") {
                return `
                <div class="form-group ${field?.is_dependent ? "dependent-field" : ""}">
                    <label>${field?.label || ""}${field?.required ? `<span class="required-field text-danger">*</span>` : ""}</label>
                    <div class="${field?.class} configure-field-input">
                        ${field?.options?.map(opt => `
                            <div class="checkbox-wrapper">
                                <label class="checkbox-label">
                                    <input type="${opt.type || "checkbox"}" name="${opt?.label}" value="${opt?.value || ""}" data-value="${opt?.value}" class="${opt?.class || ""} ${field?.required ? "required-form-field" : ""}" ${opt?.value?.toLowerCase() == data?.[field?.name]?.toLowerCase() || data?.[field?.name] == "true" ? "checked" : ""} />
                                    <p class="field-label checkbox-title">${opt?.label}</p>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                </div>`
            }

            if (field.type == "options") {
                field = { ...field, options: data?.options || field?.options }
                return `
                <div class="form-group ${field?.is_dependent ? "dependent-field" : ""}">
                    <div class="option-header">
                        <label>${field?.label}</label>
                        <button type="button" class="btn option-btn add-option-btn" data-inputtype="${field?.inputType}"><i class="fa fa-plus"></i></button>
                    </div>
                    <div class="${field?.class || ""} options-master ${field?.options?.length <= 1 ? "hide-remove-btn" : ""}" data-inputtype="${field?.inputType}" name="${field?.name || ""}">
                        ${field?.options.map(opt => `
                            <div class="option-group" data-uuid="${opt?.id}">
                                <input type="text" class="form-control configure-field-input" name="option_val" data-name="label" value="${opt?.label || ""}" placeholder="Enter label" />
                                <input type="text" class="form-control configure-field-input" name="option_val" data-name="value" value="${opt?.value || ""}" placeholder="Enter value" />
                                <button type="button" class="btn option-btn remove-option-btn"><i class="fa fa-minus"></i></button>
                            </div>
                        `).join("")}
                    </div>
                </div>`
            }
            return ""
        }).join("");
    }

    function inputFieldHtml(inputType, field, actionType, $this) {

        let attributeMapper = {
            "Min Length": "min",
            "Max Length": "max",
            "Required": "required",
            "Readonly": "readonly",
            "Hidden": "hidden",
        }

        let validationsAttr = "";
        field?.validation?.constraints.forEach(item => {
            validationsAttr += attributeMapper[item.name] && item.config ? ` ${attributeMapper[item.name]}=${item?.config} ` : "";
        })

        if (inputType?.toLowerCase() == "text field" || inputType?.toLowerCase() == "number" || inputType?.toLowerCase() == "date") {
            return `
            <input type="${typeMaster[field?.type] || "text"}" name="${field?.name || "text_field"}" class="${field?.class || "form-control"} field-preview" value="${field?.defaultValue || ""}" ${validationsAttr}>`
        }

        if (inputType?.toLowerCase() == "text area") {
            let rows = field?.validation?.constraints.find(item => item?.name.toLowerCase() == "rows");
            return `
                <textarea rows="${rows?.config || 2}" name="${field?.name || ""}" class="${field?.class || "form-control"} field-preview" ${validationsAttr}></textarea>`
        }

        if (inputType?.toLowerCase() == "dropdown") {
            return `
                <select class="${field?.class || "form-control"} option-input-field field-preview" name="${field?.name}">
                    ${field?.options?.map(opt => `<option class="clickable-option" value="${opt?.value}">${opt?.label}</option>`).join("")}
                </select>`
        }

        if (inputType?.toLowerCase() == "radio") {
            return `
                <div class="check-field-btn-group option-input-field field-preview">
                    ${field?.options?.map(field => `
                        <label class="clickable-option">
                            <input type="radio" class="m-0" name="radio-button" value="${field?.value || ""}" data-value="${field?.value || ""}" />
                            <p class="clickable-option-label m-0">${field?.label}</p>
                        </label>`).join("")}
                </div>`
        }

        if (inputType?.toLowerCase() == "check box") {
            return `
                <div class="check-field-btn-group option-input-field field-preview">
                    ${field?.options?.map(field => `
                        <label class="clickable-option">
                            <input type="checkbox" class="m-0" name="checkbox-button" value="${field?.value || ""}" />
                            <p class="clickable-option-label m-0">${field?.label || ""}</p>
                        </label>`).join("")}
                </div>`
        }

        if (inputType?.toLowerCase() == "options") {
            if (actionType == "constants") {
                return `${field?.options.map(opt => `
                    <option value="${opt?.value}">${opt?.label}</option>
                `).join("")}`
            }
            return `
                ${field?.options.map(opt => `
                    <div class="option-group" data-uuid="${opt?.id}">
                        <input type="text" class="form-control configure-field-input" name="option_val" data-name="label" placeholder="Enter label" value="${opt?.label || ""}" />
                        <input type="text" class="form-control configure-field-input" name="option_val" data-name="value" placeholder="Enter value" value="${opt?.value || ""}" />
                        <button type="button" class="btn option-btn remove-option-btn"><i class="fa fa-minus"></i></button>
                    </div>
                `).join("")}`
        }

        if (inputType?.toLowerCase() == "document") {
            let docUploadType = field?.validation?.constraints?.find(item => item?.name?.toLowerCase() == "file type")?.config?.toLowerCase();
            let buttonHtml = `<button class="btn document-action-btn disabled">
                        <i class="fa fa-download text-primary" aria-hidden="true"></i>
                    </button>
                    <button class="btn document-action-btn disabled">
                        <i class="fa fa-eye text-primary" aria-hidden="true"></i>
                    </button>`;
            return `
                <div class="document-options field-preview">
                    <button class="btn document-action-btn">
                        <i class="fa fa-upload text-primary" aria-hidden="true"></i>
                    </button>
                    ${docUploadType ? docUploadType == "single" ? buttonHtml : "" : buttonHtml}
                </div>`
        }

        if (inputType?.toLowerCase() == "grid") {
            let permissions = {};
            field?.validation?.constraints.forEach(item => (permissions = { ...permissions, [item?.name]: item?.config }))

            if (actionType == "update") {
                return `
                ${permissions?.enable_add ? `<button class="btn"><i class="fa fa-plus-square"></i></button>` : ""}
                ${permissions?.enable_edit ? `<button class="btn"><i class="fa fa-edit"></i></button>` : ""}
                ${permissions?.enable_delete ? `<button class="btn"><i class="fa fa-trash-o"></i></button>` : ""}`
            }

            return `
            <div class="grid-wrapper field-preview">
                <div class="grid-action-buttons">
                    ${permissions?.enable_add ? `<button class="btn"><i class="fa fa-plus-square"></i></button>` : ""}
                    ${permissions?.enable_edit ? `<button class="btn"><i class="fa fa-edit"></i></button>` : ""}
                    ${permissions?.enable_delete ? `<button class="btn"><i class="fa fa-trash-o"></i></button>` : ""}
                </div> 
                <table class="table table-striped table-bordered table-layout-popup column-drop-body">
                    <thead class="dummy-table-field">
                        <tr class="table-header-wrapper edit-drop-wrapper">
                            ${draggableColumnUi({ id: "F_00Column_formFields", type: "column" }, $this)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-body-wrapper">
                            <td class="text-center table-body-info">Drag columns here</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        }

        return ""
    }

    function generateUniqueId() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let uniqueId = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            uniqueId += characters[randomIndex];
        }
        return uniqueId;
    }

    const accesskey = {
        row: "rows",
        col: "cols",
        section: "sections"
    }

    function createDraggableLayoutFieldUi(data, $this) {
        const { id, label, type, className } = data;
        let uuid = generateUniqueId();
        let traverseVal = $this?.closest(".dropped-element")?.attr("data-traverse");
        let traverse = traverseVal ? `${traverseVal},${uuid}` : uuid;

        return `
            <div class="${className} builder-layout-field ${type || ""}-builder-layout-field field-${uuid}" data-uuid="${id}" data-traverse="${traverse}" data-layouttype="${type}" data-accesskey="${accesskey[type]}">
                <div class="label-action-wrapper">
                    <label class="field-label m-0">${label}</label>
                    <div div class="configuration-options">
                        <div class="btn-wrapper-div">
                            <button class="btn btn-danger btn-sm configuration-btn remove-layout-btn remove-html-element-btn" data-ref="field-${uuid}">
                                <i class="fa fa-close"></i>
                            </button>
                        </div>
                        ${label != "Row" ?
                `<div class="btn-wrapper-div edit-btn-wrapper">
                                <button class="btn btn-info btn-sm configuration-btn edit-layout-field-btn" data-modaltitle="Configure layout element" data-type="layout" data-ref="field-${uuid}">
                                    <i class="fa fa-pencil"></i>
                                </button>
                            </div>` : ""
            }
                    </div>
                </div>
                ${type == "row" ? `<div class="row empty-row builder-row-section edit-drop-wrapper" data-acceptelement="col" data-uuid="${id}"></div>` : ""}
                ${type == "col" ? `
                <div class="empty-col builder-col-section edit-drop-wrapper" data-acceptelement="row,section,formFields,doc" data-uuid="${id}">
                    <div class="dummy-layout-elem"></div>
                </div>` : ""}
            </div>
        `
    }

    function sectionUi(section, $this) {
        let { id, label, columns, type, className } = section;
        let uuid = generateUniqueId();
        let traverseVal = $this?.closest(".dropped-element")?.attr("data-traverse");
        let traverse = traverseVal ? `${traverseVal},${uuid}` : uuid;

        return `
            <div class="section-wrapper dropped-field field-${uuid} ${className || ""}" data-traverse="${traverse}" data-uuid="${id}" data-accesskey="${accesskey[type]}" data-layouttype="${type}">
                <div class="panel-group m-0" id="accordion-${uuid}" role="tablist"
                    aria-multiselectable="true">
                    <div class="panel panel-default panel-primary">
                        <div class="panel-heading section-panel-heading">
                            <h4 class="panel-title" role="tab" id="headingOne" role="button"
                            data-toggle="collapse" data-parent="#accordion-${uuid}" href="#collapse-${uuid}"
                            aria-expanded="true" aria-controls="collapse-${uuid}">
                                ${label}
                            </h4>
                            <div div class="section-configuration-options configuration-options">
                                <div class="btn-wrapper-div">
                                    <button class="btn btn-danger btn-sm configuration-btn remove-section-btn remove-html-element-btn" data-ref="field-${uuid}">
                                        <i class="fa fa-close"></i>
                                    </button>
                                </div>
                                <div class="btn-wrapper-div edit-btn-wrapper">
                                    <button class="btn btn-info btn-sm configuration-btn edit-section-btn" data-modaltitle="Configure Section" data-type="section" data-ref="field-${uuid}">
                                        <i class="fa fa-pencil"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="collapse-${uuid}" class="panel-collapse collapse in" role="tabpanel"
                            aria-labelledby="headingOne">
                            <div class="panel-body section-panel-body">
                                <div class="section-element-wrapper edit-drop-wrapper empty-section" data-acceptelement="row,formFields" data-columns="${columns || "4"}">
                                    <div class="">
                                        <p class="m-0">Drop form fields here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    function draggableColumnUi(data, $this) {
        let { id, label, type } = data;
        let uuid = generateUniqueId();
        let traverseVal = $this?.closest(".dropped-element")?.attr("data-traverse");
        let traverse = traverseVal ? `${traverseVal},${uuid}` : uuid;
        return `
            <th class="table-heading field-${uuid}" data-uuid="${id}" data-traverse="${traverse}" data-layouttype="${type}" data-accesskey="${accesskey[type] || ""}">
                <p class="heading-element">${label || "Column"}</p>
                <div div class="configuration-options">
                    <div class="btn-wrapper-div">
                        <button class="btn btn-danger btn-sm configuration-btn remove-field-btn remove-html-element-btn" data-ref="field-${uuid}">
                            <i class="fa fa-close"></i>
                        </button>
                    </div>
                    <div class="btn-wrapper-div edit-btn-wrapper">
                        <button class="btn btn-info btn-sm configuration-btn edit-field-btn" data-type="tableField" data-ref="field-${uuid}" data-modaltitle="Configure Column">
                            <i class="fa fa-pencil"></i>
                        </button>
                    </div>
                </div>
            </th>
        `
    }

    function createDraggableFieldsUi(data, $this) {
        const { id, label, type, defaultValue, rows, options, className } = data;
        let uuid = generateUniqueId();
        let traverseVal = $this?.closest(".dropped-element")?.attr("data-traverse");
        let traverse = traverseVal ? `${traverseVal},${uuid}` : uuid;

        let layoutType = type == "document" || type == "grid" || type == "column" ? type : "formField"
        return `
            <div class="${className || "col-lg-12"} field-${uuid}" data-uuid="${id}" data-traverse="${traverse}" data-layouttype="${layoutType}" data-accesskey="${accesskey[type] || "formFields"}">
                <div class="label-action-wrapper form-field-label-wrapper">
                    <label class="field-label m-0">${label}</label>
                    <div div class="configuration-options">
                        <div class="btn-wrapper-div">
                            <button class="btn btn-danger btn-sm configuration-btn remove-field-btn remove-html-element-btn" data-ref="field-${uuid}">
                                <i class="fa fa-close"></i>
                            </button>
                        </div>
                        <div class="btn-wrapper-div edit-btn-wrapper">
                            <button class="btn btn-info btn-sm configuration-btn edit-field-btn" data-modaltitle="Configure Field" data-type="formFields" data-ref="field-${uuid}">
                                <i class="fa fa-pencil"></i>
                            </button>
                        </div>
                    </div>
                </div>
                ${inputFieldHtml(type, { type, rows, defaultValue, options }, "", $this)}
            </div>
        `
    }

    function createFieldObject(field, isTable) {
        let { id, label, type } = field;

        var validationConstraints = [
            {
                "name": "Control Type",
                "config": label?.toLowerCase() == "column" ? "Text Field" : label
            },
            {
                "name": "Required",
                "config": false
            },
            {
                "name": "Readonly",
                "config": false
            },
            {
                "name": "Hidden",
                "config": false
            }
        ]

        var gridConstraint = [
            {
                "name": "enable_add",
                "config": false
            },
            {
                "name": "enable_edit",
                "config": false
            },
            {
                "name": "enable_delete",
                "config": false
            }
        ];

        var docConstraint = [
            {
                name: "Preview Type",
                config: "Popup"
            }
        ]

        if (type?.toLowerCase() == "text area") {
            validationConstraints = [...validationConstraints, { "name": "Rows", "config": 2 }]
        }

        if (type.toLowerCase() == "document") {
            validationConstraints = [...validationConstraints, ...docConstraint]
        }

        if (type.toLowerCase() == "date") {
            validationConstraints = [...validationConstraints, { name: "Future Date", config: "false" }];
        }

        var defaultFieldObj = {
            id, label,
            type: inputType[type] || "String",
            defaultValue: "",
            validation: {
                constraints: validationConstraints
            }
        }

        if (type.toLowerCase() == "grid") {
            defaultFieldObj = {
                ...defaultFieldObj,
                table: [
                    {
                        "id": "F_00Column_formFields",
                        "label": "Column",
                        "type": "String",
                        "defaultValue": "",
                        "validation": {
                            "constraints": [
                                {
                                    "name": "Control Type",
                                    "config": "Text Field"
                                },
                                {
                                    "name": "Required",
                                    "config": false
                                },
                                {
                                    "name": "Readonly",
                                    "config": false
                                },
                                {
                                    "name": "Hidden",
                                    "config": false
                                }
                            ]
                        }
                    }
                ],
                validation: {
                    constraints: [...defaultFieldObj?.validation?.constraints, ...gridConstraint]
                }
            }
        }

        if (type.toLowerCase() == "dropdown" || type.toLowerCase() == "radio" || type.toLowerCase() == "check box") {
            defaultFieldObj = { ...defaultFieldObj, master: "Custom", options: mapperObj["options"] };
        }

        return defaultFieldObj;
    }

    function createDraggableFields(field) {
        const { id, label, className } = field;
        return `
            <div class="${className}" data-id="${id}">
                <h4 class="draggable-elements-heading m-0">${label}</h4>
            </div>`
    }

    // Creating draggable dummy elements of fields
    let configurationHtml = draggableFields.map(field => {
        return createDraggableFields(field);
    })

    textFieldConfigurationWrapper.html(configurationHtml);

    let formBuilderJson = {
        rows: []
    };
    let droppedElemCss = {
        "position": "relative",
        "top": "0",
        "left": "0",
    }

    $(".draggable-elements, .draggable-section-elements, .draggable-column-elements, .draggable-layout-elements").draggable({
        helper: "clone",
        revert: "invalid"
    });

    function updateFormBuilderJsonSequence(sectionId, gridId) {
        let newOrder;
        if (sectionId == "left-section") {
            newOrder = $(`.${sectionId} .section-wrapper`).map(function () {
                return $(this).attr('data-uuid');
            }).get();

            formBuilderJson = newOrder.map(id => {
                return formBuilderJson.find(section => section.id === id);
            });
        } else if (gridId) {
            newOrder = $(`[data-uuid='${gridId}'] .table-heading`).map(function () {
                return $(this).attr('data-uuid');
            }).get();
        } else {
            newOrder = $(`[data-uuid='${sectionId}'] .section-element-wrapper .dropped-field`).map(function () {
                return $(this).attr('data-uuid');
            }).get();
        }


        if (sectionId == "left-section") {
            formBuilderJson = newOrder.map(id => {
                return formBuilderJson.find(section => section.id === id);
            });
        } else {
            formBuilderJson = formBuilderJson.map(section => {
                if (section.id === sectionId) {
                    if (gridId) {
                        return section?.formFields.map(field => {
                            if (field?.id == gridId) {
                                const reorderedCols = newOrder.map(id => {
                                    return field.table.find(col => col.id === id);
                                });
                                return { ...field, table: reorderedCols };
                            }

                            return field
                        })
                    } else {
                        const reorderedFields = newOrder.map(id => {
                            return section.formFields.find(field => field.id === id);
                        });
                        return { ...section, formFields: reorderedFields };
                    }
                }
                return section;
            });
        }
    }

    let acceptCriteria = {
        "parent": ["row", "section"],
        "row": ["col"],
        "col": ["section", "formField", "row", "grid"],
        "section": ["row", "formField"],
        "grid": ["column"]
    }

    // function initializeSortable(applySoratableToElement, acceptElement) {
    //     $(".dropped-element, .left-section").sortable({
    //         items: ".dropped-element",
    //         cursor: "move",
    //         placeholder: "sortable-placeholder",
    //         update: function (event, ui) {
    //             var $this = $(this);
    //             let parent = $this.hasClass("left-section") ? $this : $this.closest(".dropped-element");
    //             let parentLayoutType = parent?.attr("data-layouttype");
    //             let itemLayoutType = ui.item.attr("data-layouttype");
    //             let allowToDrop = acceptCriteria[parentLayoutType].includes(itemLayoutType);

    //             if (allowToDrop) {
    //                 const { traverseIds, objectIds } = getTraverseIds(ui.item);
    //                 // let sortedElement = getElementById(formBuilderJson, objectIds, 0)
    //                 debugger
    //             } else {
    //                 console.info("not accepting")
    //             }
    //             // } else if ($this.hasClass("column-drop-body")) {
    //             //     updateFormBuilderJsonSequence(sectionUuid, gridId);
    //             // }
    //         }
    //     });
    // }

    function dropCallbackVar($this, uiHelper) {
        let elementType = {
            row: "layout",
            col: "layout",
            section: "section",
        }
        var droppedElement = uiHelper.clone();
        var uuid = getNextUniqueId($this);
        var fieldObj = draggableFields.find(field => field?.id == droppedElement.attr("data-id"));
        let droppedFieldId = `F_${uuid}${fieldObj?.label?.replaceAll(" ", "") || ""}_${elementType[fieldObj?.type] || "formFields"}`;
        return { droppedElement, uuid, fieldObj, droppedFieldId };
    }

    function updateJsonByTraverse(data, traverseIds, newElement, updateValues) {
        function traverse(jsonObject, ids, index) {
            let currentId = ids[index];
            let found = false;

            let idsLengthToCheck = updateValues ? ids?.length - 1 : ids?.length

            if (index < ids?.length) {
                // Traverse rows
                if (jsonObject.rows) {
                    for (let i = 0; i < jsonObject.rows.length; i++) {
                        if (index == idsLengthToCheck && jsonObject.rows[i].id === currentId) {
                            found = true;
                            jsonObject.rows[i] = { ...jsonObject.rows[i], ...newElement };
                        } else if (jsonObject.rows[i].id === currentId) {
                            found = true;
                            jsonObject.rows[i] = traverse(jsonObject.rows[i], ids, index + 1);
                        }
                    }
                }

                // Traverse cols
                if (jsonObject.cols && !found) {
                    for (let i = 0; i < jsonObject.cols.length; i++) {
                        if (index == idsLengthToCheck && jsonObject.cols[i].id == currentId) {
                            found = true;
                            jsonObject.cols[i] = { ...jsonObject.cols[i], ...newElement }
                        } else if (jsonObject.cols[i].id === currentId) {
                            found = true;
                            jsonObject.cols[i] = traverse(jsonObject.cols[i], ids, index + 1);
                        }
                    }
                }

                // Traverse sections
                if (jsonObject.sections && !found) {
                    for (let i = 0; i < jsonObject.sections.length; i++) {
                        if (index == idsLengthToCheck && jsonObject.sections[i].id === currentId) {
                            found = true;
                            jsonObject.sections[i] = { ...jsonObject.sections[i], ...newElement };
                        } else if (jsonObject.sections[i].id === currentId) {
                            found = true;
                            jsonObject.sections[i] = traverse(jsonObject.sections[i], ids, index + 1);
                        }
                    }
                }

                // Traverse Grid
                if (jsonObject.formFields && !found) {
                    for (let i = 0; i < jsonObject.formFields.length; i++) {
                        if (index == idsLengthToCheck && jsonObject.formFields[i].id === currentId) {
                            found = true;
                            jsonObject.formFields[i] = { ...jsonObject.formFields[i], ...newElement };
                        } else if (jsonObject.formFields[i].id === currentId) {
                            found = true;
                            jsonObject.formFields[i] = traverse(jsonObject.formFields[i], ids, index + 1);
                        }
                    }
                }
            }

            if (!found && index === ids.length) {
                if (newElement.label === "Row") {
                    if (jsonObject.rows) {
                        jsonObject.rows.push(newElement);
                    } else {
                        jsonObject.rows = [newElement];
                    }
                } else if (newElement.label === "Col") {
                    if (jsonObject.cols) {
                        jsonObject.cols.push(newElement);
                    } else {
                        jsonObject.cols = [newElement];
                    }
                } else if (newElement.label === "Section") {
                    if (jsonObject.sections) {
                        jsonObject.sections.push(newElement);
                    } else {
                        jsonObject.sections = [newElement];
                    }
                } else if (newElement.label === "Column") {
                    if (jsonObject.table) {
                        jsonObject.table.push(newElement);
                    } else {
                        jsonObject.table = [newElement];
                    }
                } else {
                    if (jsonObject.formFields) {
                        jsonObject.formFields.push(newElement);
                    } else {
                        jsonObject.formFields = [newElement];
                    }
                }

                return jsonObject;
            }
            return jsonObject;
        }

        return traverse(data, traverseIds, 0);
    }

    function removeElementById(jsonObject, ids, index, getElement) {
        let currentId = ids[index];
        let found = false;
        let sortableElementObj = null;

        if (index < ids.length) {
            // Traverse rows
            if (jsonObject.rows) {
                jsonObject.rows = jsonObject.rows.filter(row => {
                    if (row.id === currentId && index === ids.length - 1) {
                        found = true;
                        sortableElementObj = row;
                        return false; // Remove the element
                    } else if (row.id === currentId) {
                        found = true;
                        row = removeElementById(row, ids, index + 1, getElement); // Recurse for deeper traversal
                    }
                    return true;
                });
            }

            // Traverse cols
            if (jsonObject.cols && !found) {
                jsonObject.cols = jsonObject.cols.filter(col => {
                    if (col.id === currentId && index === ids.length - 1) {
                        found = true;
                        sortableElementObj = col
                        return false; // Remove the element
                    } else if (col.id === currentId) {
                        found = true;
                        col = removeElementById(col, ids, index + 1, getElement); // Recurse
                    }
                    return true;
                });
            }

            // Traverse sections
            if (jsonObject.sections && !found) {
                jsonObject.sections = jsonObject.sections.filter(section => {
                    if (section.id === currentId && index === ids.length - 1) {
                        found = true;
                        sortableElementObj = section
                        return false; // Remove the element
                    } else if (section.id === currentId) {
                        found = true;
                        section = removeElementById(section, ids, index + 1, getElement); // Recurse
                    }
                    return true;
                });
            }

            // Traverse form fields
            if (jsonObject.formFields && !found) {
                jsonObject.formFields = jsonObject.formFields.filter(field => {
                    if (field.id === currentId && index === ids.length - 1) {
                        found = true;
                        sortableElementObj = field
                        return false; // Remove the element
                    } else if (field.id === currentId) {
                        found = true;
                        field = removeElementById(field, ids, index + 1, getElement); // Recurse
                    }
                    return true;
                });
            }
        }
        if (getElement && sortableElementObj) {
            return sortableElementObj
        }
        if (!getElement) {
            return jsonObject;
        }
    }

    // Function to add a row to the parent area
    function addRowToParent(formBuilderJson, droppedFieldId, fieldObj) {
        return {
            ...formBuilderJson,
            rows: [
                ...formBuilderJson?.rows,
                {
                    id: droppedFieldId,
                    label: fieldObj?.label || "Row",
                    columns: "12",
                    cols: []
                }
            ]
        };
    }

    // Function to add a section to the parent area
    function addSectionToParent(formBuilderJson, droppedFieldId, fieldObj) {
        return {
            ...formBuilderJson,
            sections: [
                ...formBuilderJson?.sections || [],
                {
                    id: droppedFieldId,
                    label: fieldObj?.label || "Section",
                }
            ]
        };
    }

    function getTraverseIds($this) {
        let traverseIds = $this.closest(".dropped-element")?.attr("data-traverse")?.split(",");
        let objectIds = traverseIds?.map(id => $(`.field-${id}`).attr("data-uuid"));

        return { traverseIds, objectIds }
    }
    function getObjToUpdate(traverseIds, jsonObj) {
        traverseIds?.forEach(id => {
            let fieldElem = $(`.field-${id}`);
            let fieldId = fieldElem.attr("data-uuid");
            let fieldAccessKey = fieldElem.attr("data-accesskey");
            jsonObj = jsonObj[fieldAccessKey].find(item => item?.id == fieldId);
        })
        return jsonObj
    }

    function rowDropCallback($this, uiHelper, fieldType, classToRemove, nextDroppableInitCallback) {
        let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this, uiHelper, fieldType);

        fieldObj = { ...fieldObj, className: "dropped-element" }

        if ($this.hasClass(classToRemove)) {
            $this.html(createDraggableLayoutFieldUi({ ...fieldObj, id: droppedFieldId }, $this)).removeClass(classToRemove || "");
        } else {
            $this.append(createDraggableLayoutFieldUi({ ...fieldObj, id: droppedFieldId }, $this));
        }

        $this.find(".row-builder-layout-field").addClass("parent-row-builder-layout-field");
        const { traverseIds, objectIds } = getTraverseIds($this);
        if (objectIds) {
            formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, {
                id: droppedFieldId,
                label: fieldObj?.label || "",
                columns: "12",
            });
        } else {
            formBuilderJson = addRowToParent(formBuilderJson, droppedFieldId, fieldObj);
        }

        droppedElement.css(droppedElemCss);

        nextDroppableInitCallback($this);
        //initializeSortable();
    }

    function sectionDropCallback($this, uiHelper, classToRemove, nextDroppableInitCallback, data) {
        const { droppedElement, fieldObj, droppedFieldId } = data;
        if ($this.hasClass(classToRemove)) {
            $this.html(sectionUi({ ...fieldObj, id: droppedFieldId, className: "dropped-element" }, $this)).removeClass(classToRemove);
        } else {
            $this.append(sectionUi({ ...fieldObj, id: droppedFieldId, className: "dropped-element" }, $this));
        }

        const { traverseIds, objectIds } = getTraverseIds($this);

        if (objectIds) {
            formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, {
                id: droppedFieldId,
                label: fieldObj?.label || "",
            });
        } else {
            formBuilderJson = addSectionToParent(formBuilderJson, droppedFieldId, fieldObj);
        }

        droppedElement.css(droppedElemCss);

        nextDroppableInitCallback($this);
    }

    function fieldElementDropCallback($this, data, nextDroppableInitCallback) {
        const { fieldObj, droppedFieldId, classToRemove, droppedElement } = data;
        let isDoc = fieldObj.className.includes("doc-formfield") ? "doc-formfield" : "";

        let fieldData = {
            ...fieldObj,
            id: droppedFieldId,
            defaultValue: "",
            options: mapperObj["options"],
            className: `dropped-element dropped-field field-wrapper ${isDoc}`
        }

        if ($this.hasClass(classToRemove)) {
            $this.html(createDraggableFieldsUi(fieldData, $this)).removeClass(classToRemove);
        } else {
            $this.append(createDraggableFieldsUi(fieldData, $this));
        }

        const { traverseIds, objectIds } = getTraverseIds($this);

        formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, createFieldObject(fieldData));

        droppedElement.css(droppedElemCss);

        if ($this?.find(".column-drop-body").length) {
            nextDroppableInitCallback($this?.find(".column-drop-body"));
        }
    }

    function initializeDroppable() {
        $("#drop-area").droppable({
            accept: ".draggable-row-elements, .draggable-section-elements",
            greedy: true,
            drop: function (event, ui) {
                let $this = $(this);
                let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this, ui.helper, "section");
                if (fieldObj?.type == "section") {
                    sectionDropCallback($this, ui.helper, "empty-section", initializeDroppableForSection, { droppedElement, fieldObj, droppedFieldId, fieldType: "section" })
                } else {
                    rowDropCallback($this, ui.helper, "layout", "empty-section", initializeDroppableForLayoutRows);
                }
            }
        });
    }

    function initializeDroppableForLayoutRows(sectionElementWrapper) {
        sectionElementWrapper.find(".builder-row-section").droppable({
            accept: ".draggable-col-elements",
            greedy: true,
            drop: function (event, ui) {
                let $this = $(this);
                let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this, ui.helper, "layout");

                fieldObj = { ...fieldObj, className: "dropped-element col-lg-12" }
                if ($this.hasClass("empty-row")) {
                    $this.html(createDraggableLayoutFieldUi({ ...fieldObj, id: droppedFieldId }, $this)).removeClass("empty-row");
                } else {
                    $this.append(createDraggableLayoutFieldUi({ ...fieldObj, id: droppedFieldId }, $this));
                }

                if ($this.closest(".section-element-wrapper")?.length) {
                    $this.find(".col-builder-layout-field").addClass("section-col-builder-layout-field");
                } else {
                    $this.find(".col-builder-layout-field").addClass("parent-col-builder-layout-field");
                }

                const { traverseIds, objectIds } = getTraverseIds($this);

                formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, {
                    id: droppedFieldId,
                    label: fieldObj?.label || "Col",
                    columns: fieldObj?.columns || "12",
                });

                droppedElement.css(droppedElemCss);
                initializeDroppableForLayoutCols($this);
                //initializeSortable();
            }
        })
    }

    function initializeDroppableForLayoutCols(sectionElementWrapper) {
        sectionElementWrapper.find(".builder-col-section").droppable({
            accept: ".draggable-row-elements, .draggable-section-elements, .draggable-elements, .doc-formfield",
            greedy: true,
            drop: function (event, ui) {
                let $this = $(this);
                let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this, ui.helper, "section");

                if (fieldObj?.type == "section") {
                    if ($this.hasClass("empty-col")) {
                        $this.html(sectionUi({ ...fieldObj, id: droppedFieldId, className: "dropped-element" }, $this)).removeClass("empty-col");
                    } else {
                        $this.append(sectionUi({ ...fieldObj, id: droppedFieldId, className: "dropped-element" }, $this));
                    }

                    const { traverseIds, objectIds } = getTraverseIds($this);

                    formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, {
                        id: droppedFieldId,
                        label: fieldObj?.label || "",
                    });

                    droppedElement.css(droppedElemCss);

                    initializeDroppableForSection($this);
                } else if (fieldObj?.type == "row") {
                    rowDropCallback($this, ui.helper, "layout", "empty-col", initializeDroppableForLayoutRows);
                } else {
                    fieldElementDropCallback($this, { fieldObj, droppedFieldId, classToRemove: "empty-col", droppedElement }, initializeDroppableForColumns);
                }
                //initializeSortable();
            }
        })
    }

    function initializeDroppableForSection(sectionElementWrapper) {
        sectionElementWrapper.find(".section-element-wrapper").droppable({
            accept: ".draggable-row-elements, .draggable-elements",
            greedy: true,
            drop: function (event, ui) {
                let $this = $(this);
                let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this, ui.helper, "section");
                if (fieldObj?.type == "row") {
                    rowDropCallback($this, ui.helper, "layout", "empty-section", initializeDroppableForLayoutRows)
                } else {
                    fieldElementDropCallback($this, { fieldObj, droppedFieldId, classToRemove: "empty-section", droppedElement }, initializeDroppableForColumns);
                }
            }
        })
    }

    function initializeDroppableForColumns(tableBodyWrapper) {
        tableBodyWrapper.droppable({
            accept: ".draggable-column-elements",
            greedy: true,
            drop: function (event, ui) {
                let $this = $(this);
                let { droppedElement, uuid, fieldObj, droppedFieldId } = dropCallbackVar($this.find(".table-header-wrapper"), ui.helper, "formFields");

                let headerWrapper = $this.find(".table-header-wrapper");
                let bodyWrapper = $this.find(".table-body-wrapper");

                let fieldData = {
                    ...fieldObj,
                    id: droppedFieldId,
                    defaultValue: "",
                    options: mapperObj["options"],
                    className: `dropped-element dropped-field field-wrapper`
                }

                if ($this.hasClass("empty-section")) {
                    headerWrapper.html(draggableColumnUi({ id: droppedFieldId, type: "column" }, $this));
                    bodyWrapper.find(".table-body-info").attr("colspan", headerWrapper.children("th").length);
                    $this.removeClass("empty-section");
                } else {
                    headerWrapper.append(draggableColumnUi({ id: droppedFieldId, type: "column" }, $this));
                    bodyWrapper.find(".table-body-info").attr("colspan", headerWrapper.children("th").length);
                }

                const { traverseIds, objectIds } = getTraverseIds($this);

                formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, createFieldObject(fieldData, "tableField"));

                droppedElement.css(droppedElemCss);
                //initializeSortable();
            }
        })
    }

    // Initialized droppable section element
    initializeDroppable();
    //initializeSortable();

    // common functions to update json
    function updateSectionFields(id, filterCallback) {
        formBuilderJson = formBuilderJson.map(section => ({
            ...section,
            formFields: section.formFields.filter(filterCallback)
        }));
    }

    function updateLayoutColsUI(parent) {
        parent.attr("data-uuid", objToUpdate?.id);
        let parentClasses = parent?.[0]?.className?.split(" ")?.filter(classname => !classname.includes("col-"));
        parent.attr("class", [...parentClasses, `col-lg-${objToUpdate?.columns}`].join(" "));
    }

    function updateSectionUI(parent) {
        parent.attr("data-uuid", objToUpdate?.id);
        parent.find(".panel-title").html(objToUpdate?.label);
    }

    function updateFieldUI(parent, fieldId) {
        parent.attr("data-uuid", fieldId);

        var inputType = objToUpdate?.validation?.constraints.find(item => item?.name == "Control Type");
        var isRequired = objToUpdate?.validation?.constraints.find(item => item?.name == "Required");
        parent.find(".field-label").html(isRequired?.config ? `${objToUpdate?.label}<span class="required-field text-danger">*</span>` : objToUpdate?.label);

        if (inputType?.config == "Grid") {
            let gridbuttonsHtml = inputFieldHtml(inputType?.config, objToUpdate, "update");
            parent.find(".grid-action-buttons").html(gridbuttonsHtml);
        } else {
            parent.find(".field-preview").remove();
            parent.append(inputFieldHtml(inputType?.config, objToUpdate));
        }
    }

    function updateTableColumn(parent, colObjId) {
        parent.attr("data-uuid", colObjId);
        var fieldObj = objToUpdate?.table?.find(table => table?.id == colObjId);

        parent.find(".heading-element").text(fieldObj?.label);
    }

    function updateContraints(field, name, value, isPermissionData) {
        const constraints = [...(field?.validation?.constraints || [])];
        const index = constraints.findIndex(item => item.name === name);

        if (isPermissionData) {
            index !== -1 ? constraints[index] = { ...constraints[index], config: Boolean(value) } : constraints.push({ name: `enable_${name.toLowerCase()}`, config: value });
        } else {
            index !== -1 ? constraints[index] = { ...constraints[index], config: value } : constraints.push({ name: name, config: value });
        }

        return {
            ...field,
            validation: {
                ...field.validation,
                constraints
            }
        };
    }

    function updateConstaintAttribute(validation, value) {
        return validation?.constraints.map(item => {
            let configName = item?.name?.toLowerCase();
            if (configName == "required" || configName == "readonly" || configName == "hidden") {
                item.config = false
            }
            if (item?.name?.toLowerCase() == value) {
                item.config = true
            }
            return item
        })
    }

    function updateTableColumnById(table, colId, updateFn) {
        return table?.map(col => {
            if (col?.id === colId) {
                return updateFn(col);
            }
            return col;
        });
    }

    function updateKeyValue(item, name, value) {
        return { ...item, [name]: value };
    }

    $('body').on("change", ".form-control", (e) => {
        const { name, value } = e.target;
        const $this = $(e.target);
        const fieldId = configureFieldForm.attr("data-uuid");
        const colId = configureFieldForm.attr("data-colid");
        const configureFieldId = configureFieldForm.attr("data-type");

        configureFieldForm.find(".error-message").remove();

        if (!name || name === 'undefined') return;

        const isSectionOrLayout = configureFieldId === "section" || configureFieldId === "layout";
        const isConstraintField = $this.hasClass("constraint-field");
        const isTableField = configureFieldId === "tableField";

        if (isSectionOrLayout) {
            objToUpdate = { ...objToUpdate, [name]: value };
        }
        else if (isConstraintField) {
            objToUpdate = isTableField
                ? {
                    ...objToUpdate,
                    table: updateTableColumnById(objToUpdate?.table, colId, (col) =>
                        updateContraints(col, name, value)
                    )
                }
                : updateContraints(objToUpdate, name, value);
        }
        else if (isTableField) {
            objToUpdate = {
                ...objToUpdate,
                table: updateTableColumnById(objToUpdate?.table, colId, (col) =>
                    updateKeyValue(col, name, value)
                )
            };
        }
        else if (name !== "option_val") {
            objToUpdate = { ...objToUpdate, [name]: value };
        }
    });

    configureFieldForm.on("input", ".label-field", (e) => {
        let $this = $(e.target);
        let { name, value } = e.target;
        let idField = $this.closest(".configure-field-form");
        let fieldDataType = configureFieldForm.attr("data-type");
        let uuid = configureFieldForm.attr("data-uuid");
        let colid = configureFieldForm.attr("data-colid");
        let sectionId = `F_${extractId(uuid)}${$this.val().replaceAll(" ", "")}_${fieldDataType.toLowerCase() == "tablefield" ? "formFields" : fieldDataType}`;
        idField.find("[name='id']").val(sectionId);

        // $(`.${configureFieldForm.attr("data-ref")}`).attr("data-uuid", sectionId);

        if (fieldDataType == "section" || fieldDataType == "formFields") {
            objToUpdate = { ...objToUpdate, id: sectionId, [name]: value }
            configureFieldForm.attr("data-uuid", sectionId);
        }
        if (fieldDataType == "tableField") {
            objToUpdate = {
                ...objToUpdate,
                table: updateTableColumnById(objToUpdate?.table, colid, col => ({
                    ...col, id: sectionId, [name]: value
                }))
            }

            configureFieldForm.attr("data-colid", sectionId);
        }

    })

    leftSection.on("click", ".edit-layout-field-btn", (e) => {
        let $this = $(e.currentTarget);
        let elemId = $this.closest(".builder-layout-field").attr("data-uuid") || "";
        configureFieldModal.find(".modal-title").text($this.attr("data-modaltitle"));
        configureFieldForm.attr({
            "data-type": $this.attr("data-type") || "",
            "data-uuid": elemId,
            "data-sectionid": elemId,
            "data-ref": $this.attr("data-ref")
        });

        const { traverseIds } = getTraverseIds($this);
        objToUpdate = getObjToUpdate(traverseIds, formBuilderJson);

        basicDataFieldsSection.html(createConfigureFieldForm(layoutDataField, objToUpdate || {}));
        dependentFieldWrapper.hide();
        controlConfigFieldSection.hide();
        attributeFieldSection.hide()
        configureFieldModal.modal("show");
    });

    leftSection.on("click", ".edit-section-btn", (e) => {
        let $this = $(e.currentTarget);
        let elemId = $this.closest(".section-wrapper").attr("data-uuid") || "";
        configureFieldModal.find(".modal-title").text($this.attr("data-modaltitle"));
        configureFieldForm.attr({
            "data-type": $this.attr("data-type") || "",
            "data-uuid": elemId,
            "data-sectionid": elemId,
            "data-ref": $this.attr("data-ref")
        });

        const { traverseIds } = getTraverseIds($this);
        objToUpdate = getObjToUpdate(traverseIds, formBuilderJson);

        let fields = basicDataField?.filter(field => field.label != "Default Value");

        basicDataFieldsSection.html(createConfigureFieldForm(fields, objToUpdate));
        dependentFieldWrapper.hide();
        controlConfigFieldSection.hide();
        attributeFieldSection.hide()
        configureFieldModal.modal("show");
    });

    function populateFieldsWithTrigger(basicFields, fieldToUpdate, isDoc) {
        basicDataFieldsSection.html(createConfigureFieldForm(basicFields, fieldToUpdate));
        let controlConfigFieldHtml = isDoc ? createConfigureFieldForm(docConfigField, fieldToUpdate, isDoc) : createConfigureFieldForm(controlConfigField, fieldToUpdate)
        controlConfigFieldSection.html(controlConfigFieldHtml).show();
        attributeFieldSection.html(createConfigureFieldForm(attributeFields, fieldToUpdate)).show();
        if (isDoc) {
            fileConfigFieldSection.html(`${createConfigureFieldForm(filesConfigFields, fieldToUpdate, isDoc)}`).show();
            var previewHtml = $(".preview-type-input").html();
            $(".document-type-field").trigger("change");
            $(".preview-type-input").html(previewHtml);
        }
        $(".control-type-input").trigger("change");
        $(".preview-type-input").trigger("change");
        if (fieldToUpdate?.master) {
            var selectedOption = fieldToUpdate?.master?.toLowerCase() == "custom" ? "custom" : "constants";
            $(`.option-type-field[data-value='${selectedOption}']`).trigger("change");
        }
    }

    leftSection.on("click", ".edit-field-btn", (e) => {
        let $this = $(e.currentTarget);
        let dataType = $this.attr("data-type");
        let elemId = $this.closest(".field-wrapper").attr("data-uuid") || "";
        let colId = $this.closest(".table-heading").attr("data-uuid") || "";
        let sectionId = $this.closest(".section-wrapper").attr("data-uuid") || "";
        configureFieldModal.find(".modal-title").text($this.attr("data-modaltitle"));
        fileConfigFieldSection.hide();
        dependentFieldWrapper.show();
        configureFieldForm.attr({
            "data-type": dataType || "",
            "data-uuid": elemId,
            "data-sectionid": sectionId,
            "data-colid": colId,
            "data-ref": $this.attr("data-ref")
        });

        const { traverseIds } = getTraverseIds($this);
        objToUpdate = getObjToUpdate(traverseIds, formBuilderJson);

        let tableToUpdate = objToUpdate?.table?.find(column => column?.id == colId);
        let isDoc = $this.closest(".field-wrapper")[0]?.className?.includes("doc-formfield");

        if (objToUpdate && dataType == "formFields") {
            let basicFields = basicDataField?.filter(field => field.label != "Columns");
            populateFieldsWithTrigger(basicFields, objToUpdate, isDoc);

            configureFieldModal.modal("show");
        } else if (tableToUpdate && dataType == "tableField") {
            populateFieldsWithTrigger(tableColumnBasicField, tableToUpdate)
            configureFieldModal.modal("show");
        } else {
            console.log("data is not available in form builder json")
        }
    })

    configureFieldForm.on("change", ".control-type-input", (e) => {
        let controlType = e.target.value?.toLowerCase();
        configureFieldForm.find(".dependent-field").hide();
        dependentFieldMapper[controlType]?.forEach(className => {
            $(`.${className}`).closest(".dependent-field").show();
        })
    })

    configureFieldForm.on("change", ".preview-type-input", (e) => {
        let controlType = e.target.value?.toLowerCase();
        let typeVal = $(".document-type-field").val();
        if (typeVal.toLowerCase() == "maker checker") {
            dependentFieldMapper[controlType]?.forEach(className => {
                $(`.${className}`).closest(".dependent-field").show();
            })
        }
    })

    function toggleFieldsConditionally(placeholder, controlType) {
        configureFieldForm.find(".dependent-field").hide();
        var html = `<option value=''>${placeholder}</option>`;
        mapperObj[controlType]?.forEach(opt => html += `<option value="${opt?.value}">${opt?.label}</option>`);
        if (controlType == "previewtype") {
            configureFieldForm.find(".preview-type-input").html(html);
        } else {
            configureFieldForm.find(".control-type-input").html(html);
        }
    }

    configureFieldForm.on("change", ".input-type-field", (e) => {
        let controlType = e.target.value?.toLowerCase();
        toggleFieldsConditionally("Select control type", controlType);
    })

    configureFieldForm.on("change", ".document-type-field", (e) => {
        let controlType = e.target.value?.toLowerCase();
        var fieldId = configureFieldForm.attr("data-uuid");
        toggleFieldsConditionally("Select preview type", "previewtype");

        dependentFieldMapper[controlType]?.forEach(className => {
            $(`.${className}`).closest(".dependent-field").show();
        })

        if (controlType == "doc viewer") {
            configureFieldForm.find(".control-type-input").closest(".dependent-field").hide();
        }

        objToUpdate = {
            ...objToUpdate,
            validation: {
                constraints: objToUpdate?.validation?.constraints?.filter(item => item?.name?.toLowerCase() == "control type" || item?.name?.toLowerCase() == "readonly" || item?.name?.toLowerCase() == "required" || item?.name?.toLowerCase() == "hidden")
            }
        }
    })

    let fieldName = {
        "file-type-radio-button": "File Type"
    }

    configureFieldForm.on("change", ".check-button-field, .file-upload-type-field", (e) => {
        var $this = $(e.target);
        var { name, value } = e.target;
        var configureFieldId = configureFieldForm.attr("data-type");
        name = fieldName[name] || name;

        value = name == "Future Date" ? ($this.prop("checked")).toString() : value;

        if ($this.hasClass("constraint-field")) {
            if (configureFieldId == "tableField") {
                objToUpdate = {
                    ...objToUpdate,
                    table: updateTableColumnById(objToUpdate?.table, $this.attr("data-uuid"), col =>
                        updateContraints(col, name, value)
                    )
                }
            } else {
                objToUpdate = updateContraints(objToUpdate, name, value);
            }
        }
    })

    configureFieldForm.on("change", ".option-type-field", (e) => {
        let controlType = e.target.value?.toLowerCase();
        configureFieldForm.find(".option-type-dependent-field").closest(".dependent-field").hide();

        $(`.${controlType}-options`).closest(".dependent-field").show();

        objToUpdate = {
            ...objToUpdate,
            "master": controlType,
        }
    })

    configureFieldForm.on("change", ".constants-options", (e) => {
        if (configureFieldForm.attr("data-type") == "tableField") {
            objToUpdate = {
                ...objToUpdate,
                table: updateTableColumnById(objToUpdate?.table, configureFieldForm.attr("data-colid"), col => ({
                    ...col,
                    master: e.target.value,
                    options: constants.find(item => item.value == e.target.value)?.options || []
                }))
            }
        } else {
            objToUpdate = {
                ...objToUpdate,
                master: e.target.value,
                options: constants.find(item => item.value == e.target.value)?.options || []
            }
        }
    })

    configureFieldForm.on("change", ".attribute-field", (e) => {
        var $this = $(e.target);
        let value = $this.attr("data-value");
        let dataType = configureFieldForm.attr("data-type");
        let colId = configureFieldForm?.attr("data-colid");

        if (dataType == "tableField") {
            objToUpdate = {
                ...objToUpdate,
                table: objToUpdate?.table?.map(table => {
                    if (table?.id == colId) {
                        return {
                            ...table,
                            validation: {
                                constraints: updateConstaintAttribute(table?.validation, value)
                            }
                        }
                    }
                    return table;
                })
            }
        } else {
            objToUpdate = {
                ...objToUpdate,
                validation: {
                    constraints: updateConstaintAttribute(objToUpdate?.validation, value)
                }
            }
        }
    })

    configureFieldForm.on("change", ".permission-field", (e) => {
        var $this = $(e.target);
        var { name, value } = e.target;
        let dataValue = $this.attr("data-value");
        var fieldId = configureFieldForm.attr("data-uuid");
        let conditionVal;

        if ($this.prop("checked")) {
            $this.parents(".checkbox-wrapper").append(`<input type="text" name="enable_${dataValue}" class="form-control permission-config-input constraint-field">`);
            conditionVal = true;
        } else {
            $this.parents(".checkbox-wrapper").find(".permission-config-input").remove();
            conditionVal = false;
        }

        objToUpdate = updateContraints(objToUpdate, name, conditionVal, true)
    })

    $(".update-field-values-btn").on("click", function (e) {
        e.preventDefault();
        let $this = configureFieldForm;
        let isValid = true;
        let dataType = $this.attr("data-type");
        $this.find(".error-message").remove();

        $this.find(".required-form-field").each(function () {
            let $field = $(this);
            if (!$field.val() && $field.is(":visible")) {
                isValid = false;
                $field.addClass("validation-error");
                $field.after("<span class='error-message text-danger'>This field is required</span>");
            } else {
                $field.removeClass("validation-error");
                $field.next(".error-message").remove();
            }
        });

        if (!isValid) {
            return;
        }

        let id = $this.attr("data-sectionid");

        let updatedField = objToUpdate?.id == $this?.attr("data-uuid");
        let optionsData = [];

        if (updatedField && objToUpdate?.master?.toLowerCase() == "custom") {
            configureFieldForm.find(".option-group").each((i, field) => {
                let label = $(field).find("[data-name='label']").val() || "";
                let value = $(field).find("[data-name='value']").val() || "";
                optionsData.push({ label, value });
            })

            if (dataType == "tableField") {
                objToUpdate = {
                    ...objToUpdate,
                    table: updateTableColumnById(objToUpdate?.table, $this.attr("data-colid"), col =>
                        updateKeyValue(col, "options", optionsData)
                    )
                }
            } else {
                objToUpdate = {
                    ...objToUpdate,
                    options: optionsData
                }
            }
        }

        const { traverseIds, objectIds } = getTraverseIds($(`.${configureFieldForm?.attr("data-ref")}`));
        formBuilderJson = updateJsonByTraverse(formBuilderJson, objectIds, objToUpdate, true);

        if (dataType == "layout") {
            updateLayoutColsUI($(`.${$this.attr("data-ref")}`));
        }

        if (dataType == "section") {
            updateSectionUI($(`.${$this.attr("data-ref")}`));
        }

        if (dataType == "formFields") {
            updateFieldUI($(`.${$this.attr("data-ref")}`), $this.attr("data-uuid"));
        }

        if (dataType == "tableField") {
            updateTableColumn($(`.${$this.attr("data-ref")}`), $this.attr("data-colid"));
        }

        objToUpdate = {};

        $this.trigger("reset");
        $this.find(".dependent-field, .permission-config-input").hide();
        configureFieldModal.modal("hide");
    })

    leftSection.on("click", ".remove-html-element-btn", function (e) {
        let $this = $(this);
        let droppedElement = $this.closest(`.${$this?.attr("data-ref")}`);
        const { traverseIds, objectIds } = getTraverseIds($(`.${$this.attr("data-ref")}`));
        removeElementById(formBuilderJson, objectIds, 0);
        droppedElement.remove();
    })

    configureFieldForm.on("click", ".add-option-btn", (e) => {
        let optionParent = $(e.currentTarget).closest(".option-header").siblings(".options-master");

        optionParent.append(`
            <div class="option-group">
                <input type="text" class="form-control configure-field-input" name="option_val" data-name="label" value="" placeholder="Enter label">
                <input type="text" class="form-control configure-field-input" name="option_val" data-name="value" value="" placeholder="Enter value">
                <button class="btn option-btn remove-option-btn"><i class="fa fa-minus"></i></button>
            </div>`);
        optionParent.removeClass("hide-remove-btn");
    })

    configureFieldForm.on("click", ".remove-option-btn", (e) => {
        let $this = $(e.currentTarget);
        let optionParent = $this.closest(".options-master");
        $this.closest(".option-group").remove();
        if (optionParent.children().length <= 1) {
            optionParent.addClass("hide-remove-btn");
        }
    })

    const relationships = {
        "parent": ["rows", "sections"],
        "row": ["cols"],
        "col": ["sections", "formFields", "rows"],
        "section": ["rows", "formFields"],
        "formField": ["table"]
    };

    const draggableCallback = {
        "row": initializeDroppableForLayoutRows,
        "col": initializeDroppableForLayoutCols,
        "section": initializeDroppableForSection,
        "table": initializeDroppableForColumns
    }

    function createUIElement(type, obj, $this) {
        switch (type) {
            case "row":
                let rowLayoutDiv = document.createElement("div");
                rowLayoutDiv.innerHTML = createDraggableLayoutFieldUi({ ...obj, type }, $this);
                return rowLayoutDiv;
            case "col":
                let colLayoutDiv = document.createElement("div");
                colLayoutDiv.innerHTML = createDraggableLayoutFieldUi({ ...obj, type }, $this);
                return colLayoutDiv;
            case "section":
                let sectionDiv = document.createElement("div");
                sectionDiv.innerHTML = sectionUi({ ...obj, type }, $this);
                return sectionDiv;
            case "formField":
                let fieldDiv = document.createElement("div");
                let fieldType = obj?.validation?.constraints?.find(item => item?.name == "Control Type")
                fieldDiv.innerHTML = createDraggableFieldsUi({ ...obj, type: fieldType?.config?.toLowerCase() }, $this);
                return fieldDiv;
            case "table":
                let columnDiv = document.createElement("tr");
                columnDiv.innerHTML = draggableColumnUi({ ...obj, type }, $this);
                return columnDiv;
        }
    }

    function removeEmptyClass(parentElem) {
        let classToRemove = ["empty-row", "empty-col", "empty-section", "empty-formField"];
        classToRemove.forEach((cls) => {
            if (parentElem.hasClass(cls)) {
                parentElem.html("");
                parentElem.removeClass(cls);
            }
        })
    }

    let parentEmpty = true;
    let tableEmpty = true;

    // Function to traverse the object and generate UI
    function traverseAndCreateUI(jsonObject, parentElement, relationshipType) {
        const possibleChildren = relationships[relationshipType];

        if (possibleChildren) {
            possibleChildren.forEach(childArrayKey => {
                if (jsonObject[childArrayKey]) {
                    jsonObject[childArrayKey].forEach(childObject => {
                        let fieldType = childArrayKey == "table" ? childArrayKey : childArrayKey.slice(0, -1);
                        let className = "dropped-element";
                        if (fieldType == "col") {
                            className += ` col-lg-${childObject?.columns || "12"}`
                        }
                        const childElement = createUIElement(fieldType, { ...childObject, className });
                        const innerChild = $(childElement).children();

                        if (parentElement.hasClass("left-section")) {
                            if (parentEmpty) {
                                parentEmpty = false
                                parentElement.html("");
                            }
                            parentElement.append(innerChild);
                            draggableCallback[fieldType] && draggableCallback[fieldType](innerChild)
                            debugger
                        } else {

                            let parentElem = $(parentElement.find(".edit-drop-wrapper")[0]);
                            innerChild.attr("data-traverse", `${parentElement.attr("data-traverse") || ""},${innerChild.attr("data-traverse") || ""}`)
                            removeEmptyClass(parentElem);
                            if (fieldType == "table" && tableEmpty) {
                                tableEmpty = false;
                                parentElem.html(innerChild);
                            } else {
                                parentElem.append(innerChild);
                            }

                            draggableCallback[fieldType] && draggableCallback[fieldType](parentElement)

                            if (fieldType == "table") {
                                parentElement.find(".table-body-info").attr("colspan", parentElem.children("th").length);
                            }


                        }
                        traverseAndCreateUI(childObject, innerChild, fieldType);
                    });
                }
            });
        }
    }

    // fetch("./free-hand.json")
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error
    //                 (`HTTP error! Status: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         leftSection.removeClass("empty-section");
    //         formBuilderJson = data;
    //         traverseAndCreateUI(data, leftSection, "parent");
    //     })
    //     .catch((error) => console.error("Unable to fetch data:", error));

    $('.get-json').on('click', function (e) {
        e.preventDefault();
        console.log('Form Data:', formBuilderJson);
    });

    $(".page-preview").click(function () {
        leftSection.toggleClass("hide-layout-border");
    })
})