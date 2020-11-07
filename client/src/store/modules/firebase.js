const firebase = require('firebase/app');

require('firebase/database');

export default {
    state: {},
    mutations: {},
    actions: {
        async FIREBASE({}, data) {
            try {
                await firebase
                        .database()
                        .ref('users/' + 4)
                        .set(data);
                console.log('ready');
            } catch (e) {
                console.log(e);
            }

        },
        async FIREBASE_READ({}, data) {
            try {
                const response = (await firebase
                        .database()
                        .ref('users/' + 3)
                        .once('value')).val()
                console.log(response);
            } catch (e) {
                console.log(e);
            }

        }
    },
    getters: {}
}
