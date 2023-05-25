import type { PropType } from "vue";

export const ValidButtonThemes = ['primary', 'error', ''];

export const buttonProps = {
    label: {
        type: String,
        default: '',
    },
    loading: {
        type: Boolean
    },
    theme: {
        type: String,
        validator: (v: string) => ValidButtonThemes.includes(v),
        default: '',
    },
    onClick: {
        type: Function as PropType<(...args: any[]) => any>,
        default: null
    }
}