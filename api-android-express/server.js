const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Important to allow Android app to connect
app.use(express.json());

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Koko" },
        { id: 4, name: "Lolo" },
        { id: 5, name: "Jojo" },
        { id: 6, name: "iiiii" },
    ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
