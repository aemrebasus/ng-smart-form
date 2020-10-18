import { FormControl, ValidatorFn, } from '@angular/forms';
import { IconType } from 'ng-icon-type';
import { InputType } from 'form-input-type';

export class ExtendedFormControl {
    public get validators(): ValidatorFn | ValidatorFn[] { return this.validators$; }
    public set validators(value: ValidatorFn | ValidatorFn[]) { this.validators$ = value; }

    public get state(): string | number { return this.state$; }
    public set state(value: string | number) { this.state$ = value; }

    public get name(): string { return this.name$; }
    public set name(value: string) { this.name$ = value; }

    public get icon(): IconType { return this.icon$; }
    public set icon(value: IconType) { this.icon$ = value; }

    public get type(): InputType { return this.type$; }
    public set type(value: InputType) { this.type$ = value; }

    public control$: FormControl;
    public get control(): FormControl { return this.control$; }
    public set control(value: FormControl) { this.control$ = value; }

    constructor(
        public name$: string,
        public type$: InputType,
        private state$: string | number,
        private validators$: ValidatorFn | ValidatorFn[],
        public icon$: IconType) {
        this.control = new FormControl(state$, validators$);
    }

}

