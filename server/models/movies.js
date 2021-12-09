import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title required'],
    minlength:[5,'Minimun title length 5 characters']
  },
  year: {
    type: Number,
    required: [true, 'Year required'],
    min: [2000, 'Minimun quantity is 2000']
  },
  released: {
    type: Date,
    default: Date.now
  },
  genre: String,
  director: String,
  actors: String,
  plot: String,
  ratings: [{source:String, value:String}]
});

export default mongoose.model('Movie', movieSchema);