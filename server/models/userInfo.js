//mongoose 가져오기
const mongoose = require("mongoose");
//Schema 생성하기
const userSchema = mongoose.Schema({
    key: {
        type: Number,
    },
    Buying: {
        type: Array,
    }
});

//BasicInfo 모델 생성
const UserInfo = mongoose.model("UserInfo", userSchema);
//BasicInfo 모델을 다른 파일에서도 사용할 수 있도록 모듈로 만들기
module.exports = { UserInfo };
