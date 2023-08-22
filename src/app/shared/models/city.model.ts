export class City {
  constructor(public name: string,
              public country: string,
              public countryCode: string,
              public yearsVisited?: number[],
              public id?: number) {}
}
