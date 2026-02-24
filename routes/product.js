const app = express();
const router = app.router();
const productsController = require('../controllers/product')
router.get("/count", productsController.getProductsCount)
module.exports = router;