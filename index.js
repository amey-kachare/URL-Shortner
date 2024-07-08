const express = require("express");
const URL = require("./model/url");
require("dotenv/config");
const urlRoutes = require("./routes/url");
const userRoutes = require("./routes/user");
const staticRouters = require("./routes/staticRouters");
const { connectDB } = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const path = require("path");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");
const app = express();
const port = process.env._PORT;
//component to connect mongodb in config directory
connectDB(process.env.MONGO_URL);

//ejs configuration
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use(express.json()); //to accept the json file from frontend
app.use(express.urlencoded({ extended: false })); //to accept the table data can be a form
app.use(express.static(path.join(__dirname, "public"))); // for tailwind
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoutes);
app.use("/user", userRoutes);
app.use("/", staticRouters);

// app.get('/test',async(req,res)=>{
//     const allUrls=await URL.find({});
//     return res.render('home',{
//         urls:allUrls,
//     })
// })

//outside the routes so that url genearated can be short
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (entry) res.redirect(entry.redirectUrl);
});

app.listen(port, () => {
  console.log("Running on port ", port);
});
