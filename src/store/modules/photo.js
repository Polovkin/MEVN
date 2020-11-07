const url ='https://jsonplaceholder.typicode.com/';

export default {
    state: {
        photo: []
    },
    mutations: {
      SET_PHOTO: (state,data) => {
          state.photo = data
      }
    },
    actions: {
        async GET_PHOTO({commit}) {
            try {
                const response = await fetch(`${url}albums/1/photos`);
                if (response.ok) {
                    let json = await response.json();
                    console.log(json);
                    commit('SET_PHOTO',json);
                } else {
                    console.log("HTTP error: " + response.status);
                }

            } catch (e) {
                console.log(e);
            }
        }
    },
    getters: {
        GET_PHOTOS: (state) => {
            return state.photo
        }
    }
}
