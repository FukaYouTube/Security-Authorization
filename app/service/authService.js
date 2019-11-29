exports.loginPost = async (req, res) => {
    const { username, password } = req.body
}

exports.registerPost = async (req, res) => {
    const { username, first_name, email, password } = req.body
}