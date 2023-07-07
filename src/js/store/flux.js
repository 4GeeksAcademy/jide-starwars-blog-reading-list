const { json } = require("react-router");

const getState = ({ getStore, getActions, setStore }) => {

	const loadData = async (serverUrl) => {
		try{
			const response = await fetch(serverUrl)
			if (!response.ok){
				console.log(response.ok)
			}else{
				const jsonData = await response.json();
				console.log(jsonData)
				return jsonData
			}
		}catch (error) {
			console.log(error)
		};
	};

	return {
		store: {
			demo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/* exampleFunction: () => {
				getActions().changeColor(0, "green");
			}, */
			loadSomeData: async () => {
					
				const serverUrl = "https://www.swapi.tech/api/people"
				const unspecificApiData = await loadData(serverUrl)
				console.log("unspecificApiData", unspecificApiData);
				const peopleArr = []

				for (const item of unspecificApiData.results){
					console.log(item.url)
					let temp = await loadData(item.url)
					peopleArr.push (temp.result.properties)
				};
				console.log("DONE")
				console.log(peopleArr)
				setStore({people: peopleArr})
				
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
