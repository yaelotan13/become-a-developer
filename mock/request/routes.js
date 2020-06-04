function register(app) {
    app.get('/', (req, res) => {
        res.send('Welcome to the server')
    })
}

module.exports = {
    register: register
}