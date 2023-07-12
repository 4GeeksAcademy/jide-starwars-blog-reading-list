const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			person: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			setPeopleData: (results) => {
				const store = getStore();
				setStore({ ...store, people: results });
			},
			setPlanetsData: (results) => {
				const store = getStore();
				setStore({ ...store, planets: results });
			},
			setVehiclesData: (results) => {
				const store = getStore();
				setStore({...store, vehicles: results });
			},
			setPersonData: (uid, properties) => {
				const store = getStore();

				const newPeopleArray = store.people.map(person => {
					if (person.uid === uid) {
						person.properties = properties;
					}
					return person;
				})
				setStore({ ...store, people: newPeopleArray})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				}); 

				//reset the global store
				setStore({ demo: demo }); 
			}
		}
	};
};

export default getState;
