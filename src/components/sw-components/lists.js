import ItemsList from '../ItemsList';
import { renderListData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const PeopleList = renderListData(ItemsList, getAllPeople);
const PlanetsList = renderListData(ItemsList, getAllPlanets);
const StarshipsList = renderListData(ItemsList, getAllStarships);

export {
  PeopleList,
  PlanetsList,
  StarshipsList,
};