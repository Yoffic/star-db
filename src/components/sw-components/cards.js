import CreatureCard from '../CreatureCard';
import { renderCardData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getImageUrl,
  getFields,
} = swapiService;

const PersonCard = renderCardData(CreatureCard, getPerson, getImageUrl, getFields);
const PlanetCard = renderCardData(CreatureCard, getPlanet, getImageUrl, getFields);
const StarshipCard = renderCardData(CreatureCard, getStarship, getImageUrl, getFields);

export {
  PersonCard,
  PlanetCard,
  StarshipCard,
};