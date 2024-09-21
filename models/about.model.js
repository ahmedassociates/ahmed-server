import mongoose, {Schema} from 'mongoose';

const AboutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);
export default mongoose.model('About', AboutSchema);
