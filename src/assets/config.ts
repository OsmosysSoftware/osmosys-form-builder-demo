export const configs = {
  simpleForm: {
    "title": {
      "text": "Simple Form",
      "class": "text-center mb-4"
    },
    "layout": {
      "type": "grid",
      "rows": [
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Name",
                  "name": "name",
                  "inputType": "text",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-name",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Name is required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "input",
                  "label": "Email",
                  "name": "email",
                  "inputType": "email",
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-email",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Email is required"
                    },
                    {
                      "name": "pattern",
                      "validator": "pattern",
                      "value": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                      "message": "Invalid email format"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "textarea",
                  "label": "Comments",
                  "name": "comments",
                  "rows": 5,
                  "value": "",
                  "class": "form-control",
                  "styleClass": "custom-comments",
                  "validations": [
                    {
                      "name": "required",
                      "validator": "required",
                      "message": "Comments are required"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "columns": [
            {
              "span": 12,
              "elements": [
                {
                  "type": "button",
                  "label": "Reset",
                  "action": "reset",
                  "class": "btn btn-warning me-2",
                  "styleClass": "custom-reset"
                },
                {
                  "type": "button",
                  "label": "Custom Action",
                  "action": "customAction",
                  "class": "btn btn-info me-2",
                  "styleClass": "custom-action"
                },
                {
                  "type": "button",
                  "label": "Submit",
                  "action": "submit",
                  "class": "btn btn-success",
                  "styleClass": "custom-submit"
                }
              ],
              "styleClass": "d-flex justify-content-start"
            }
          ]
        }
      ]
    }
  }
}