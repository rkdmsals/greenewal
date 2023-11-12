//mongoose 가져오기
const mongoose = require("mongoose");
//비밀번호 암호화하기
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const { dblClick } = require("@testing-library/user-event/dist/click");
//Schema 생성하기
const userSchema = mongoose.Schema({
    key: {
        type: Number,
    },
    Buying: {
        type: Array,
    },

    name: {
        type: String,
    },
    id: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    studentID: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
    },
    seatNumber: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    },


});

userSchema.pre('save', function( next ){
    var user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds,function(err, salt){
            if(err) return (err)
    
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash 
                next()
            })
        }) 
    } else {
        next()
    }
    

})

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
            cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    //user._id + 'secretToekn' = token
    user.token = token
    user
    .save()
    .then(()=> {
        cb(null, user)
    })
    .catch((err) => {
        cb(err)
    });

}

userSchema.statics.findByToken = function(token,cb) {
    var user = this;

    jwt.verify(token, 'secretToken', function(err, decoded) {
        user.findOne({"_id": decoded, "token": token})
        .then((user)=> {
            cb(null, user)
        })
        .catch((err) => {
            cb(err)
        });
    } ) 
}


//BasicInfo 모델 생성
const UserInfo = mongoose.model("UserInfo", userSchema);
//BasicInfo 모델을 다른 파일에서도 사용할 수 있도록 모듈로 만들기
module.exports = { UserInfo };
