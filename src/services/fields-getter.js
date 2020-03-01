const mappingFields = {
  person: [
    { field: 'gender', label: 'Gender'},
    { field: 'birthYear', label: 'Birth Year'},
    { field: 'eyeColor', label: 'Eye Color'},
  ],
  planet: [
    { field: 'population', label: 'Population'},
    { field: 'rotationPeriod', label: 'Rotation Period'},
    { field: 'diameter', label: 'Diameter'},
  ],
  starship: [
    { field: 'model', label: 'Model'},
    { field: 'costInCredits', label: 'Cost'},
    { field: 'length', label: 'Length'},
    { field: 'passengers', label: 'Passengers'},
  ],
};

export default (type) => {
  return mappingFields[type];
};