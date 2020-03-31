import { Observable, of } from 'rxjs';
import { FormGroup, FormControl, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



export function ValidaPreenchimentoForm (chaves: any[]){
    return (formGroup: FormGroup) => {
        console.log(chaves);
        // const control = formGroup.controls[controlName];
        // const matchingControl = formGroup.controls[matchingControlName];

        // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        //     // return if another validator has already found an error on the matchingControl
        //     return;
        // }

        // // set error on matchingControl if validation fails
        // if (control.value !== matchingControl.value) {
        //     matchingControl.setErrors({ mustMatch: true });
        // } else {
        //     matchingControl.setErrors(null);
        // }
    }
}