const ShortUrl = require("../models/ShortUrl");
const dns = require("dns");
const urlParser = require("url");

const createShortUrl = async (req, res) => {
    let { url: inputUrl } = req.body;
    //console.log(inputUrl);
    const valid = dns.lookup(
        urlParser.parse(inputUrl).host,
        (error, address) => {
            if (!address) {
                res.json({ error: "invalid url" });
            } else {
                const newUrl = new ShortUrl({ url: inputUrl });
                newUrl.save((err, data) => {
                    res.json({
                        original_url: data.url,
                        short_url: data.short,
                    });
                });
            }
            //console.log("dns", error);
            //console.log("address", address);
        }
    );
    //console.log("test", valid);
};

const getShortUrl = async (req, res) => {
    const { id: short } = req.params;
    if (!short) {
        res.json({ error: "URL not found" });
    }
    const urlShort = await ShortUrl.findOne({ short: short });
    if (urlShort) {
        res.redirect(urlShort.url);
    } else {
        res.json({ error: "URL not found" });
    }
};

module.exports = {
    createShortUrl,
    getShortUrl,
};
