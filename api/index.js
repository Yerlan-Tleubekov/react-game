const express = require("express");
const Joi = require("joi"); //used for validation
const app = express();
const gameProcess = require("./src/view/gameprocess/index");
const router = require('./src/view/routes');
const cors = require('cors');

require('./src/model/knex')

const corsOptions = {

}



app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))
app.use(express.json());
app.use(router)
// const books = [
//   { title: "Harry Potter", id: 1 },
//   { title: "Twilight", id: 2 },
//   { title: "Lorien Legacies", id: 3 },
// ];

//READ Request Handlers





// app.get("/api/books/:id", (req, res) => {
//   const book = books.find((c) => c.id === parseInt(req.params.id));

//   if (!book)
//     res
//       .status(404)
//       .send(
//         '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
//       );
//   res.send(book);
// });

// //CREATE Request Handler
// app.post("/api/books", (req, res) => {
//   const { error } = validateBook(req.body);
//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   }
//   const book = {
//     id: books.length + 1,
//     title: req.body.title,
//   };
//   books.push(book);
//   res.send(book);
// });

// //UPDATE Request Handler
// app.put("/api/books/:id", (req, res) => {
//   const book = books.find((c) => c.id === parseInt(req.params.id));
//   if (!book)
//     res
//       .status(404)
//       .send(
//         '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'
//       );
//   post;
//   const book = books.find((c) => c.id === parseInt(req.params.id));
//   if (!book)
//     res
//       .status(404)
//       .send(
//         '<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>'
//       );

//   const index = books.indexOf(book);
//   books.splice(index, 1);

//   res.send(book);
// });

// function validateBook(book) {
//   const schema = {
//     title: Joi.string().min(3).required(),
//   };
//   return Joi.validate(book, schema);
// }

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
