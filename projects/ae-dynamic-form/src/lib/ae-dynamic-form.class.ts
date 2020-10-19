import { ValidationErrors, ValidatorFn, } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType, InputAutocompleteType } from 'form-input-type';


export interface AeDynamicForm {
    formTitle?: string;
    formInputs: AeFormControl[];
    submitButton?: { value: string, color: 'accent' | 'warn' | 'primary' };
}

export class AeDynamicFormBuilder {

    private dynamicForm: AeDynamicForm;

    private newFormControlHolder: AeFormControl;

    public newForm(title?: string): AeDynamicFormBuilder {
        this.dynamicForm = {
            formTitle: title || 'Form Title',
            submitButton: { value: '', color: 'accent' },
            formInputs: []
        };
        return this;
    }

    public submitButtonLabel(value: string): AeDynamicFormBuilder {
        this.dynamicForm.submitButton.value = value;
        return this;
    }

    public submitButtonColor(value: 'accent' | 'primary' | 'warn'): AeDynamicFormBuilder {
        this.dynamicForm.submitButton.color = value;
        return this;
    }

    public newControl(name: string): AeDynamicFormBuilder {
        this.newFormControlHolder = { name };
        return this;
    }

    public state(state: string): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, state };
        return this;
    }

    public type(type: InputType): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, type };
        return this;
    }

    public autocomplete(autocomplete: InputAutocompleteType): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, autocomplete };
        return this;
    }

    public placeholder(placeholder: string): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, placeholder };
        return this;
    }

    public hint(hint: string): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, hint };
        return this;
    }

    public label(label: string): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, label };
        return this;
    }

    public options(options: string[]): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, options };
        return this;
    }

    public icon(icon: IconType): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, icon };
        return this;
    }

    public customValidator(validator: (value: string) => ValidationErrors): void {
        this.newFormControlHolder.validators.push((control) => validator(control.value));
    }

    public required(): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, required: true };
        return this;
    }
    public min(min: number): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, min };
        return this;
    }

    public max(max: number): AeDynamicFormBuilder {
        this.newFormControlHolder = { ...this.newFormControlHolder, max };
        return this;
    }

    public buildFormControl(): AeDynamicFormBuilder {
        this.dynamicForm.formInputs.push({ ...this.newFormControlHolder });
        this.newFormControlHolder = null;
        return this;
    }

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

