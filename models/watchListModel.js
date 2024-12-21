const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
    original_title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const WatchList = mongoose.models.watch || mongoose.model("watch", movieSchema);
export default WatchList;