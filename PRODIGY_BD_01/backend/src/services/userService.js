const User = require("../models/user");

class UserService{

    async createUser(name, email, age) {
        const newUser = new User({name, email, age});
        return await newUser.save();
    }

    async getAllUser() {
        return await User.find();
    }

    async getUserById(userId){
        return await User.findById(userId);
    }

    async updateUser(userId, updatedData){
       return await User.findByIdAndUpdate(userId,updatedData, {
            new:true
        });
    }

    async deleteUser(userId){
        return await User.findByIdAndDelete(userId);
    }

};
module.exports = new UserService();