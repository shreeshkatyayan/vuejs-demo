import type { ValidButtonThemes } from "@/components/StyledButton/props";
import type { Ref } from "vue";

export const FormElementTypes = <const>['text', 'email', 'password', 'hidden'];
export const APIMethod = <const>['GET', 'POST'];

export interface FormElement {
    name: string,
    type: typeof FormElementTypes[number],
    value: Ref<any>,
    placeholder: string,
}

export interface FormAction {
    label: string,
    type: typeof ValidButtonThemes[number],
}

export interface FormConfiguration {
    elements: FormElement[],
    action: FormAction
}