import { AbstractControl } from "@angular/forms";

export function BannedWordValidator(bannedWord:any[]){
    return (control: AbstractControl):{[key: string]: any} | null => {
        const value = control.value as string;
        let findBannedWord = bannedWord.find((word) => {
            return word.toLowerCase() === value.toLowerCase();
        })

        return findBannedWord
        ? {error:{findBannedWord}} : null
    }
}