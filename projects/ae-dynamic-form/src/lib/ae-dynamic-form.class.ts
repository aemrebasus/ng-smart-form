import { FormBuilder, ValidationErrors, ValidatorFn, } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType, InputAutocompleteType } from 'form-input-type';


export interface AeDynamicForm {
    formTitle?: string;
    formInputs: AeFormControl[];
    submitButton?: { value: string, color: 'accent' | 'warn' | 'primary' };
}


/**
 * @description Build forms using builder methods.
 */
export class AeFormBuilder {

    /**
     * @description AeDynamicForm instance.
     */
    private dynamicForm: AeDynamicForm = {
        formTitle: 'Form Title',
        submitButton: { value: '', color: 'accent' },
        formInputs: []
    };

    /**
     * @description  FormControl holder to store each formControl before adding it to the formInputs in the dynamicForm.
     */
    private newFormControlHolder: AeFormControl;

    /**
     * @description set the title of the form.
     */
    public title(title?: string): AeFormBuilder {
        this.dynamicForm.formTitle = title;
        return this;
    }

    /**
     * @description set the value of submit button.
     */
    public submitButtonLabel(value: string): AeFormBuilder {
        this.dynamicForm.submitButton.value = value;
        return this;
    }

    /**
     * @description set the color of submit button.
     */
    public submitButtonColor(value: 'accent' | 'primary' | 'warn'): AeFormBuilder {
        this.dynamicForm.submitButton.color = value;
        return this;
    }

    /**
     * @description set the name of the current controller.
     */
    public newControl(name: string): AeFormBuilder {
        this.newFormControlHolder = { name };
        return this;
    }

    /**
     * @description set the state of the controller.
     */
    public state(state: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, state };
        return this;
    }

    /**
     * @description set the type of the controller.
     */
    public type(type: InputType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, type };
        return this;
    }

    /**
     * @description set the autocomplete of the input element.
     */
    public autocomplete(autocomplete: InputAutocompleteType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, autocomplete };
        return this;
    }

    /**
     * @description set the placeholder of the input element.
     */
    public placeholder(placeholder: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, placeholder };
        return this;
    }
    /**
     * @description set the hint element value.
     */
    public hint(hint: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, hint };
        return this;
    }

    /**
     * @description set the value of lavel element.
     */
    public label(label: string): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, label };
        return this;
    }

    /**
     * @description set the options of input element (only for the types like select)
     */
    public options(options: string[]): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, options };
        return this;
    }

    /**
     * @description set the icon of the input element.
     */
    public icon(icon: IconType): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, icon };
        return this;
    }

    /**
     * @description add a custom validator function for the input value.
     */
    public customValidator(validator: (value: string) => ValidationErrors): void {
        this.newFormControlHolder.validators.push((control) => validator(control.value));
    }

    /**
     * @description set the input field required.
     */
    public required(): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, required: true };
        return this;
    }

    /**
     * @description set the min length or date value of the value of the input element.
     */
    public min(min: number): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, min };
        return this;
    }

    /**
     * @description set the max length or date value of the value of the input element.
     */
    public max(max: number): AeFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, max };
        return this;
    }

    /**
     * @description after configuring the input control, run this method to add the input control to the form.
     * Then, another input control can be added. 
     */
    public buildFormControl(): AeFormBuilder {
        this.dynamicForm.formInputs.push({ ...this.newFormControlHolder });
        this.newFormControlHolder = null;
        return this;
    }

    /**
     * @description After configuring everything, run this method to get the instance of the AeDyanmicForm.
     */
    public buildForm(): AeDynamicForm {
        return this.dynamicForm;
    }

}

/**
 * @field name: string;
 * @field type?: InputType;
 * @field state?: string | number;
 * @field validators?: ValidatorFn | ValidatorFn[];
 * @field autocomplete?: InputAutocompleteType;
 * @field hint?: string;
 * @field placeholder?: string;
 * @field label?: string;
 * @field options?: string[];
 * @field icon?: IconType;
 */
export interface AeFormControl {
    name: string;
    type?: InputType;
    state?: string | number;
    validators?: ValidatorFn[];
    autocomplete?: InputAutocompleteType;
    hint?: string;
    placeholder?: string;
    label?: string;
    options?: string[];
    min?: number;
    max?: number;
    required?: boolean;
    icon?: IconType;
}

