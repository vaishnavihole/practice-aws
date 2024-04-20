import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('Test');
});

app.get('/health', (req, res) => {
    res.send('API is OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});