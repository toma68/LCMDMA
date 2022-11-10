const _user_id = Symbol("users_id");
const _user_login = Symbol("users_login");
const _user_password = Symbol("users_password");
const _user_role = Symbol("users_role");

export class User {
    constructor(id, login, password, role) {
        this[_user_id] = id;
        this[_user_login] = login;
        this[_user_password] = password;
        this[_user_role] = role;
        this._id = id;
        this._login = login;
        this._password = password;
        this._role = role;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get login() {
        return this._login;
    }

    set login(value) {
        this._login = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get JSON() {
        return {
        id: this.id,
        login: this.login,
        password: this.password,
        role: this.role
        };
    }

    static fromJSON(json) {
        const data = JSON.parse(JSON.stringify(json));
        return new User(json.id, json.login, json.password, json.role);
    }
}