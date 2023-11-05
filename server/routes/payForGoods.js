const express = require("express");
const { UserInfo } = require("../models/userInfo");
const PayForGoodsRouter = express.Router();
PayForGoodsRouter.get("/payForGoods", async (req, res) => {
    return ("연결됨")
});


PayForGoodsRouter.put("/payForGoods", async (req, res) => {
    // const { _id, date } = req.body;
    try {
        // const result = await UserInfo.findByIdAndUpdate(_id, {

        // });

        return res.json({
            // result,
            message: "수정 완료",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ err: err.message });
    }
});

module.exports = PayForGoodsRouter;