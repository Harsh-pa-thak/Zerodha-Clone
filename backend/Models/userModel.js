import mongoose from 'mongoose';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const _plm = require('passport-local-mongoose');
const passportLocalMongoose = typeof _plm === 'function' ? _plm : _plm.default;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const userModel = mongoose.model('User', userSchema);
export default userModel;
