const {Router} = require('express');
const Dog = require('../controller/Dog');
const router = Router();
const dog = new Dog();

router.route("/").get(dog.getDog);
router.get("/:id",dog.getDogId);

module.exports = router;