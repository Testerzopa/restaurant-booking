require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/booking', async (req, res) => {

    const { date, time } = req.body;

    try {

        await axios.post(
            'https://api.line.me/v2/bot/message/push',
            {
                to: 'C703feb43c1e9fe1dc18376a28bfe7ec1',
                messages: [
                    {
                        type: 'text',
                        text: `🚨 มีคิวจองโต๊ะใหม่!\n📅 วันที่: ${date}\n⏰ เวลา: ${time}`
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({ success: true });

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );

        res.status(500).json({
            success: false
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});