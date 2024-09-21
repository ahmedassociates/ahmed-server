import mongoose, {Schema} from 'mongoose';

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },
  {timestamps: true}
);
export default mongoose.model('Job', JobSchema);
