import mongoose, {Schema} from 'mongoose';

const TeamSchema = new Schema(
  {
    img: {
      type: String,
    },
    imgId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    location: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Team', TeamSchema);
