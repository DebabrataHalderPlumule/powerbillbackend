// import express from "express";
// import mysql from "mysql";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "electricbills",
// });

// app.get("/", (req, res) => {
//   res.json("hello");
// });



// app.get("/consumer/:id", (req, res) => {
//   const id = req.params.id; // Get the "id" parameter from the URL

//   // Create a SQL query to retrieve consumer data by ID
//   const q = "SELECT * FROM consumer WHERE id = ?";

//   db.query(q, [id], (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }

//     if (data.length === 0) {
//       // If no data is found, return a 404 status and a message
//       return res.status(404).json({ message: "consumer not found" });
//     }

//     // Return the data of the consumer with the specified ID
//     return res.json(data[0]); // Assuming there's only one matching consumer
//   });
// });

// app.listen(8800, () => {
//   console.log("Connected to backend.");
// });













import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT||8800

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12658117",
  password: "ML5qtfTQ1w",
  database: "sql12658117"
});

app.get("/", (req, res) => {
  res.json("hello");
});



app.get("/consumer/:id", (req, res) => {
  const id = req.params.id; // Get the "id" parameter from the URL

  // Create a SQL query to retrieve consumer data by ID
  const q = "SELECT * FROM consumer WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    if (data.length === 0) {
      // If no data is found, return a 404 status and a message
      return res.status(404).json({ message: "consumer not found" });
    }

    // Return the data of the consumer with the specified ID
    return res.json(data[0]); // Assuming there's only one matching consumer
  });
});



app.listen(port, () => {
  console.log("Connected to backend.");
});