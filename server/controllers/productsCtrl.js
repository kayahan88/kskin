module.exports = {
    getAllProducts: async (req, res) => {
        const db = await req.app.get('db');
        db.products.get_all_products()
        .then(products => res.status(200).send(products))
    },
    getIndividualProduct: async (req, res) => {
        const db = await req.app.get('db');
        const {product_id} = req.params;
        db.products.get_individual_product(product_id)
        .then(results => res.status(200).send(results))
    },
    getProductsByCollection: async (req, res) => {
        const db = await req.app.get('db');
        const {product_collection} = req.params;
        console.log('productsCtrl ' + product_collection)
        db.products.get_products_by_collection(product_collection)
        .then(results => res.status(200).send(results))
    }
}