const { useAuth } = require("./useAuth")

const getUser = () => {
    const { auth } = useAuth();
    return auth.email
}