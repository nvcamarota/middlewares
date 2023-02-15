module.exports = {
    index: (req, res) => res.render('index'),
    admin: (req, res) => res.render('admin'),
    denied: (req, res) => res.render('access-denied')
}