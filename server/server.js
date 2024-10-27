const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const comedyRoutes = require("./routes/comedyRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/comedy", comedyRoutes);

app.get('/', (req, res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
