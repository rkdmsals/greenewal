const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const app = express();
//const { PORT, MONGO_URI } = process.env;
const config = require('./config/key');
const PORT = 3005;
const MongoStore = require("connect-mongo");
var fs = require('fs')
const path = require("path");
//로그인 DB 가져오기
const { UserInfo } = require("./models/userInfo");

//Route 가져오기

// router 연결
// var routes = require('./routes/index');
// app.use('/', routes);
const FeedbackRouter = require("./routes/feedback");
const cartRouter = require("./routes/cartRoutes");

//몽고DB 연결
mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((e) => console.error(e));

// app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser());

//호스팅 에러 해결?


// app.use()


app.use("/api/feedback", FeedbackRouter);
app.use("/api/addToCart", cartRouter);

//로그인 관련 함수
app.post('/api/register', async (req, res) => {
  const userInfo = new UserInfo(req.body)

  await userInfo
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.post('/api/login', (req, res) => {
  // 요청된 이메일을 데이터베이스 찾기
  UserInfo.findOne({ id: req.body.id })
    .then(docs => {
      if (!docs) {
        return res.json({
          loginSuccess: false,
          messsage: "제공된 이메일에 해당하는 유저가 없습니다."
        })
      }
      docs.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) return res.json({ loginSuccess: false, messsage: "비밀번호가 틀렸습니다." })
        // Password가 일치하다면 토큰 생성
        docs.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          // 토큰을 저장
          res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
        })
      })
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
})

app.get('/api/auth', auth, (req, res) => {

  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    id: req.user.id,
    name: req.user.name,
    studentID: req.user.studentID,
    phoneNumber: req.user.phoneNumber,
    Ticket: req.user.Ticket,
    role: req.user.role,
  })
})

app.get('/api/logout', auth, (req, res) => {
  UserInfo
    .findOneAndUpdate({ _id: req.user._id }, { token: "" })
    .then((user) => {
      res.status(200).send({
        success: true
      })
    })
    .catch((err) => {
      res.json({ success: false, err });
    })
})
app.get('/', (req, res) => {
  res.sendFile(express.static(path.join(__dirname, '../client/build/')));
});
app.listen(PORT, () => {
  console.log(`greenewal server listening on port ${PORT}`);
});