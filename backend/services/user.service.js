import {User} from "../models/user.model"

export default class FSUser {
    async readAllUsers() {
        try {
            const dataBuffer = fs.readFileSync("users.json");
            let dataJSON = dataBuffer.toString();
            dataJSON = JSON.parse(dataJSON);
            const users = [];
            dataJSON.forEach((user) => {
                users.push(new User(user.id, user.login, user.password, user.role));
            });
            return users;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }

    //Lister tout les users (id, login, password, role)
    async list(callback) {
        const users = await this.readAllUsers();
        if (users.length === 0) {
            return callback([]);
        }
        let results = [];
        users.forEach((user) => {
            results.push(user.JSON);
        });
        return callback(null, results);
    }
}