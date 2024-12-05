const User = require('../models/User');

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUserById(id, userData) {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  }

  async deleteUserById(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = UserRepository;
