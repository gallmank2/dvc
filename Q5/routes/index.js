const express = require('express');
const app = express();
const router = express.Router();

let users = [
  {
    "name": "John Doe",
    "email": "john@example.com",
    "birthday": "1990-05-15"
  },
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "birthday": "1988-10-20"
  },
  {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "birthday": "1995-02-28"
  },
  {
    "name": "Bob Brown",
    "email": "bob@example.com",
    "birthday": "1985-07-12"
  }
];

router.get('/', (req,res)=>{
  res.render('index');
});

module.exports = router;
