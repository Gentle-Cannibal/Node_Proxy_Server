import "dotenv/config";

const config = {
    NASA_API_URL: process.env.NASA_API_URL,
    NASA_API_KEY: process.env.NASA_API_KEY,
    PORT: 4000,
    START_DATE: "2024-11-25",
    END_DATE: "2024-11-29"
};

export default config;