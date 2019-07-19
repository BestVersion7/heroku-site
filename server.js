const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cookieParser = require("cookie-parser");

const app = express();
const movieRouter = require("./api/routes/movie");
const userRouter = require("./api/routes/user");
const galleryRouter = require("./api/routes/gallery");
const drinkRouter = require("./api/routes/drink");
const sm = require("sitemap");

//cross origin sharing (different domain)
app.use(cors());
app.use(morgan("dev"));

//Bodyparser middleware
app.use(express.json());
app.use(cookieParser());

//connect database
const db = process.env.MONGO_URI;
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(console.log("mongoose running"))
    .catch(() => console.log("mongoose not running"));

//connect cloudinary
cloudinary.config({
    CLOUDINARY_URL: process.env.CLOUDINARY_URL
});

//Express routes
app.use("/api/movie", movieRouter);
app.use("/api/user", userRouter);
app.use("/api/drinks", drinkRouter);

//Gallery unused
app.use("/api/gallery", galleryRouter);

const sitemap = sm.createSitemap({
    hostname: "http://goldenwine.herokuapp.com",
    cacheTime: 600000, // 600 sec - cache purge period
    urls: [
        { url: "/page-1/", changefreq: "daily", priority: 0.3 },
        { url: "/page-2/", changefreq: "monthly", priority: 0.7 }
    ]
});

// sitemap
app.get("/sitemap.xml", (req, res) => {
    sitemap.toXML(function(err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header("Content-Type", "application/xml");
        res.send(xml);
    });
});

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

//Server port
const port = process.env.PORT || 4000;

//Start server
app.listen(port, () => {
    console.log(`Server is on ${port}`);
});
