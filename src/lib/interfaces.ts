export interface ILanguage {
  name: string
}

export interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: number;
  emoji: string;
  capital: string;
  currency: string;
  languages: ILanguage[]
}

export interface IContinent {
  code: string;
  name: string;
  countries: ICountry[]
}
export interface IContinentData {
  continent: IContinent;
}

export interface IContinentListData {
  continents: IContinent[];
}

export interface IContinentVars {
  code: string;
}