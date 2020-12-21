var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var { ApolloServer } = require("apollo-server-express");
var https = require("https");
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var homeRouter = require("./routes/home");
var signupRouter = require("./routes/signup");
var loginRouter = require("./routes/login");
// var jwt = require("jsonwebtoken");

var typeDefs = require("./graphql/typeDefs");
var Query = require("./graphql/Query");
var Mutation = require("./graphql/Mutation");
var Date = require("./graphql/Date");
var context = require("./graphql/context");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cacsffutmx", {
  useNewUrlParser: true,
});

// const req = https.request(
//   "https://api.dropboxapi.com/2/file_requests/count",
//   {
//     method: "POST",
//     headers: {
//       Authorization:
//         "Bearer gEnnOaFgejMAAAAAAAAAASOFdhDwWUuvRVZ8LET4ZPWIRSC90JfUKvcyJpHeQcxV",
//     },
//   },
//   (res) => {
//     console.log("StatusCode ", res.statusCode);
//     console.log("headers: ", res.headers);
//     res.on("data", (d) => {
//       process.stdout.write(d);
//     });
//   }
// );

// req.end();

//
// mongoose.connect(
//     "mongodb+srv://emmanuelite4:<Abiodun1>@cacsffutmx-tcocy.mongodb.net/test?retryWrites=true&w=majority"
// );
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

const corsOptions = {
  origin: "http://localhost:3000",
  // origin: "https://cacsffutmx.herokuapp.com",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, IsoDate: Date.IsoDate },
  // context,
  cors: false,
});
server.applyMiddleware({ app, cors: false });

app.use("/", signupRouter);
app.use("/", homeRouter);
app.use("/", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
  console.log(err.message);
});

module.exports = app;
