module.exports = {
    list: (req, res) => {
        return res.render('products')
    },
    detail: (req, res) => {
        return res.render('productDetail', {
            id: +req.params.id
        })
    }
}