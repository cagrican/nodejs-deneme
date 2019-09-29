import mongoose from "mongoose";
const Schema = mongoose.Schema;
const recordSchema = new Schema({
    key: {
        type: String,
    },
    value: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    counts: {
        type: [Number]
    }
});
export default mongoose.model('Record', recordSchema);
