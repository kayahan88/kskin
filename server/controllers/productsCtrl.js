module.exports = {
    getAllProducts: async (req, res) => {
        const db = await req.app.get('db');
        console.log('getting to here')
        db.products.get_all_products()
        .then(products => res.status(200).send(products))
    }
}