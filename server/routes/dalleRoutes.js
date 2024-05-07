import express from 'express';
import fetch from 'node-fetch'
import * as dotenv from 'dotenv';

dotenv.config()
const router = express.Router()

const query = async (data) => {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: {
                    Authorization: `Bearer ${process.env.IMG_TOKEN}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: data,
            }
        );

        if (!response.ok) {
            throw new Error("Failed to query Stable Diffusion API");
        }

        // Assuming the API returns image/jpeg directly
        const result = await response.blob();
        return result;
    } catch (error) {
        console.error("Error querying Stable Diffusion API:", error);
        throw error;
    }
}

router.route('').get((req, res) => {
    res.status(200).json({ message: 'Hello from SD' })
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body
        const aiResponse = await query({ prompt });
        res.status(200).json({ photo: aiResponse });
        // res.status(200).send(aiResponse);
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
})

export default router;
