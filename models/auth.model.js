import mongoose, {Schema} from 'mongoose';

const AuthSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Auth', AuthSchema);
