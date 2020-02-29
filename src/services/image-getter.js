const mappingType = {
  person: 'characters',
  planet: 'planets',
  starship: 'starships',
};
    
export default (id, type) => {
  const imgApi = `https://starwars-visualguide.com/assets/img`;
  const category = mappingType[type];
  return `${imgApi}/${category}/${id}.jpg`;
}