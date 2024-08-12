import express from "express";
const router = express.Router();
import Alien from "../models/model.js";

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    sku: req.body.sku,
    price: req.body.price,
    cat:req.body.cat,
    inStock:req.body.inStock
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    console.log("Error: ",err)
    res.send("Error");
  }
});

const A_router = router;
export default A_router;
