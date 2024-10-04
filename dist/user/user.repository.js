"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryUser = void 0;
class RepositoryUser {
    constructor() {
        this.users = [];
    }
    salvar(user) {
        this.users.push(user);
    }
    async list() {
        return this.users;
    }
}
exports.RepositoryUser = RepositoryUser;
//# sourceMappingURL=user.repository.js.map