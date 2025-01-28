const User = require('../models/user');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  
  
  try {
    const { name, number, email, password } = req.body;
    if(!name || !number ||!email || !password){
      return res.send(400).json({message:'all fields are reqiured'})
    }
    const chekExistingUser= await User.findOne({email});
    if(chekExistingUser){
      return res.send(400).json({message:'email already in use'})
    }

    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   

    // Creating a new User
    const newUser = new User({
      name,
      number,
      email,
      password: hashedPassword,
    });

    // Save the user to DB
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { registerUser };
