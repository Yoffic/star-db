import Converter from './converter';

export default class SwapiService {
  _baseApi = 'https://swapi.co/api';
  
  constructor() {
    this.converter = new Converter();
  }
  
  async getData(url) {
    const response = await fetch(`${this._baseApi}${url}`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}, response ${response.status}`);
    }
    return await response.json();
    
  }

  async getAllPeople() {
    const data = await this.getData('/people/');
    return data.results.map(this.converter.convertPerson);
  }

  async getPerson(id) {
    const person = await this.getData(`/people/${id}/`);
    return this.converter.convertPerson(person);
  }

  async getAllPlanets() {
    const data = await this.getData('/planets/');
    return data.results.map(this.converter.convertPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getData(`/planets/${id}/`);
    return this.converter.convertPlanet(planet);
  }

  async getAllStarships() {
    const data = await this.getData('/starships/');
    return data.results.map(this.converter.convertStarship);
  }

  async getStarship(id) {
    const starship = await this.getData(`/starships/${id}/`);
    return this.converter.convertStarship(starship);
  }
}
