const app = require("./app");

const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db");
connectDB();


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
