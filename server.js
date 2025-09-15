const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
const api_key = [sua_api_aqui];

app.get("/weather", async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
        return res.status(400).json({ error: "Informe a cidade ou país" });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric&lang=pt_BR`);
        const data = response.data;

        const temperature = data.main?.temp ?? 0;
        const humidity = data.main?.humidity ?? 0;
        const windSpeed = data.main?.speed ? data.wind.speed * 3.6 : 0;
        const rainChance = data.rain?.['1h'] ?? 0;
        const weatherCondition = data.weather?.[0]?.description ?? "Desconhecido";

        res.json({ temperature, humidity, windSpeed, rainChance, weatherCondition });
    } catch(err) {
        if (err.response?.status === 404) {
            return res.status(404).json({ error: "Cidade não encontrada" });
        }
        res.status(500).json({ error: "Erro ao obter dados do clima" });
    }
})

app.get("/multiple", async (req, res) => {
    const { cities } = req.query;

    if (!cities) {
        return res.status(400).json({ error: "Informe pelo menos uma cidade." });
    }

    const cityList = cities.split(',');
    const results = [];

    try {
        for (let city of cityList) {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=pt_BR`
            );

            results.push({
                city,
                temperature: response.data.main?.temperature ?? 0,
                weather: response.data.weather?.[0]?.description ?? "Desconhecido"
            })
        }

        res.json(results);
    } catch (err) {
        res.status(500).json({ error: "Erro ao consultar API para múltiplas cidades" });
    }
})

app.get("/alert", async (req, res) => {
    const { city, country } = req.query;
    
    if (!city || !country) {
        return res.status(400).json({ error: "Informe cidade e país." });
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric&lang=pt_BR`
        );

        const temp = response.data.main?.temp ?? 0;

        let alert = temp > 30 ? "Quente" : temp < 10 ? "Frio" : "Agradável";

        res.json({ city, temperature: temp, alert });
    } catch (err) {
        res.status(500).json({ error: "Erro ao obter dados do clima." });
    }
})

app.listen(3000, () => {
    console.log("Server rodando! Acesse: http://localhost:3000/");
})
