module.exports = {
    getAllProducts: async (req, res) => {
        const db = await req.app.get('db');
        console.log('getting to here')
        db.products.get_all_products()
        .then(products => res.status(200).send(products))
    },
    getIndividualProduct: async (req, res) => {
        const db = await req.app.get('db');
        const {product_id} = req.params;
        console.log('yes')
        db.products.get_individual_product(product_id)
        .then(results => res.status(200).send(results))
    }
}