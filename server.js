const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware pentru parsarea JSON
app.use(express.json());

// Folosim path.join pentru a specifica calea absolută către folderul public
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/submit-form', (req, res) => {
    const submission = {
        timestamp: new Date().toISOString(),
        ...req.body
    };

    const submissionString = JSON.stringify(submission) + '\n';
    const filePath = path.join(__dirname, 'submissions.json');

    fs.appendFile(filePath, submissionString, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ error: 'Failed to save submission' });
            return;
        }
        res.json({ message: 'Submission saved successfully' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});