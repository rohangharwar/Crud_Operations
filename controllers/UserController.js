const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res) {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching users', error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching user', error: error.message });
    }
  }

  async updateUserById(req, res) {
    try {
      const updatedUser = await this.userService.updateUserById(req.params.id, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: 'Error updating user', error: error.message });
    }
  }

  async deleteUserById(req, res) {
    try {
      const deletedUser = await this.userService.deleteUserById(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting user', error: error.message });
    }
  }
}

module.exports = new UserController(); // Export an instance of the class