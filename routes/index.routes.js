const router = require("express").Router();
const authRoutes = require("./auth.routes");

const productsRoutes = require("./product.routes");
const ordersRoutes = require("./order.routes")
/* GET home page */
//http:localhost:5005/api
router.get("/", (req, res, next) => {
  res.json("Movar Diseño");
});


router.use("/auth", authRoutes);

router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes)

module.exports = router;
