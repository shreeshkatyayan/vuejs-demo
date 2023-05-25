import type { FormElement } from '../FormConfiguration';
import { ref } from 'vue';

const firstName = ref('Shreesh');

const exampleLoginForm: FormElement[] = [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'First name',
    value: firstName,
  },
];

export default exampleLoginForm;
