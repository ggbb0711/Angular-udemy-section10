import { AbstractControl, FormControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword') as FormControl;
        let confirmPassword = control.get('confirmPassword') as FormControl;

        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }
}