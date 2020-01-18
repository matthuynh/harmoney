const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  hash: String,
  salt: String,
  firstName: String,
  lastName: String,
  accountBalance: Number,
  phoneNumber: String
});

// Generates a salt. Given a password, create a hash for that password. Salt the password.
// Fun fact: hashing algorithm used is SHA512. With the hash generated with SHA512, we re-hash with PBKDF2 (makes hashing process "slower" and more "secure" since the hash is being re-hashed)
UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

// Given a password, hash it, and check to see if it matches with the hash in the database
UserSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

// Save other personal information required to create a user
UserSchema.methods.setPersonalInformation = function(firstName, lastName, accountBalance, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.accountBalance = accountBalance;
  this.phoneNumber = phoneNumber;
}

// JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object
UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  // Sign the jwt token. Remember that signing a token ensures integrity (ie. if a token is modified by another user, you would be able to tell)
  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};


// Inserts the UsersSchema (a document) into the Users collection (third parameter forces Mongo to NOT add an extra s to the collection name)
mongoose.model('Users', UserSchema, 'Users');