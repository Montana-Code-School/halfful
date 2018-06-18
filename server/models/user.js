const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// define the User model schema
<<<<<<< HEAD
//Change how we save data to Sunday - Saturday and fetching said data
//Make a new object for day
const UserSchema = new mongoose.Schema({
=======
const UserSchema = new mongoose.Schema(
  {
>>>>>>> 2cd6dcb2e2c8c3a50e833e72a756ffeb8b338745
  email: {
    type: String,
    index: { unique: true }
  },
  day :{
    currentDay : Date,
    values: {
      0:String,
      1:String,
      2: String,
      3: String,
      4: String,
      5: String,
      6: String
    }
  },
  password: String,
  waterGoal: Number,
  totalAmountConsumed: Number,
  amountJustConsumed: Number,
  name: String
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);
