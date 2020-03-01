export default class Converter {
  getId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  convertPerson = (person) => {
    return {
      id: this.getId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }

  convertPlanet = (planet) => {
    return {
      id: this.getId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  convertStarship = (starship) => {
    return {
      id: this.getId(starship),
      name: starship.name,
      model: starship.model,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      passengers: starship.passengers,
    };
  }
}
