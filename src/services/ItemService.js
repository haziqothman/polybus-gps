import { firebase }  from '../config/db';

export const addItem =  (item) => {
    firebase.database().ref('UsersList/').push({
        name: item,
        age :item,
        email:iteme
    });
}