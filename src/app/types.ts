export interface Response<T> {
  Count: number;
  Message: string;
  Results: T[];
  SearchCriteria: string | null;
}

export interface Manufacturer {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
}

export interface Make {
  Make_ID: number;
  Make_Name: string;
  Mfr_Name: string;
}

export interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export type ManufacturerResponse = Response<Manufacturer>;
export type MakeResponse = Response<Make>;
export type ModelResponse = Response<Model>;
