const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.get("/adminsignup", authController.signup_get);
router.post("/adminsignup", authController.signup_post);
router.get("/adminlogin", authController.login_get);
router.post("/adminlogin", authController.login_post);
router.get("/adminlogout", authController.logout_get);

module.exports = router;
 