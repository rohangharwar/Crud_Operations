const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    return await this.userRepository.createUser(data);
  }

  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }

  async getUserById(id) {
    return await this.userRepository.getUserById(id);
  }

  async updateUserById(id, data) {
    return await this.userRepository.updateUserById(id, data);
  }

  async deleteUserById(id) {
    return await this.userRepository.deleteUserById(id);
  }
}

module.exports = UserService;