const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: "Ashik",
        min: 2,
        max: 12
    },
    lastName: {
        type: String,
        default: "Hasan",
        min: 2,
        max: 12
    },
    email: {
        type: String,
        default: "Ashik",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 2,
    }
})
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User