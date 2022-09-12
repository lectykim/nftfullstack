const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
let cors = require('cors');
const port = 5000;
dotenv.config();
const signinRouter = require('./routes/sign_in');
const crudNftRouter = require('./routes/crudNft');
const tagsRouter = require('./routes/tags');
const { sequelize } = require('./models');
const passport = require("passport");
const passportConfig = require('./passport');
const db = require('./models');




app.set('port',process.env.PORT || port);

app.use(cors());

passportConfig(passport);
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/",signinRouter );
app.use("/crud",crudNftRouter);
app.use("/tags",tagsRouter);

db.sequelize.sync({ force: false})
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });




app.listen(port,()=>console.log(`${port} 번 포트에서 대기 중`));