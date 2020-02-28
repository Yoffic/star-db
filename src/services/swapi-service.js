export default class SwapiService {
  _baseApi = 'https://swapi.co/api';
  
  async getData(url) {
    const response = await fetch(`${this._baseApi}${url}`);
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}, response ${response.status}`);
    }
    return await response.json();
    
  }

  async getAllPeople() {
    const data = await this.getData('/people/');
    return data.results;
  }

  getPerson(id) {
    return this.getData(`/people/${id}/`);
  }

  async getAllPlanets() {
    const data = await this.getData('/planets/');
    return data.results;
  }

  getPlanet(id) {
    return this.getData(`/planets/${id}/`);
  }

  async getAllStarships() {
    const data = await this.getData('/starships/');
    return data.results;
  }

  getStarship(id) {
    return this.getData(`/starships/${id}/`);
  }
}
