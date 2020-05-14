import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Response } from '../types';
import { startWith, map } from 'rxjs/operators';

const comp = (str1: string, str2: string) => str1.toLowerCase().indexOf(str2.toLowerCase()) === 0;

type OptionSelected<T> = (input: T) => void;

export interface AutocompleteControl<T> {
  control: FormControl;
  options: T[];
  filteredOptions: Observable<T[]>;
  displayFn: (input: T)  => string;
  filter: (input: string) => T[];
  setup: (value?: unknown) => void;
  optionSelected: OptionSelected<T>;
  value: T | null;
  reset: () => void;
}

interface CreateConfConfig<T> extends Pick<AutocompleteControl<T>, 'reset' | 'optionSelected'> {
  fieldname: keyof T;
  setup: (value?: unknown) => Observable<Response<T>>;
}
export function createConf<T>(params: CreateConfConfig<T>) {
  const target = {
    ...params,
    value: null,
    control: new FormControl(),
    options: [],
    filteredOptions: null,
    displayFn: (value: T) => value && value[params.fieldname] || '',
    filter(name: string) {
      return target.options.filter(option => comp(option[params.fieldname] as unknown as string, name));
    },
    reset : () => {
      target.value = null;
      target.control.reset();
      target.options = [];
      if (params.reset) {
        params.reset();
      }
    },
    setup: (value) => {
      params.setup(value).subscribe(res => target.options = res.Results);
      target.filteredOptions = target.control.valueChanges
        .pipe(
          startWith(''),
          map(v => typeof v === 'string' ? v : v ? v[params.fieldname] : ''),
          map(name => name ? target.filter(name) : target.options.slice())
        );
    },
    optionSelected: (value: T) => {
      target.value = value;
      params.optionSelected(value);
    },
  } as AutocompleteControl<T>;

  return target;
}

