const express = require("express");
const userRoutes = require("./routes/userRoute");
const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on this ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Express Js project is running");
});
