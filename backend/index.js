require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Models & Schemas
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const User = require("./schemas/UserSchema");

// Utils & Middleware
const asyncWrap = require("./utils/asyncWrap");
const errorHandler = require("./middleware/errorHandler");

// ENV
const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// 🔐 Register Route
app.post(
  "/api/register",
  asyncWrap(async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered" });
  })
);

// 🔐 Login Route
app.post(
  "/api/login",
  asyncWrap(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  })
);

// ✅ Protected Route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

// 📊 Holdings Route
app.get(
  "/allHoldings",
  asyncWrap(async (req, res, next) => {
    const allData = await HoldingsModel.find();
    res.json(allData);
  })
);

// 📈 Positions Route
app.get(
  "/allPositions",
  asyncWrap(async (req, res, next) => {
    const allData = await PositionsModel.find();
    res.json(allData);
  })
);

// 🛒 Create Order Route
app.post(
  "/newOrder",
  asyncWrap(async (req, res, next) => {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.send("Order saved");
  })
);

// 🧠 Connect to MongoDB
async function main() {
  await mongoose.connect(URL);
}
main()
  .then(() => console.log("✅ DB CONNECTED"))
  .catch((e) => console.log("❌ DB ERROR", e));

// ❌ Global Error Handler
app.use(errorHandler);

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
