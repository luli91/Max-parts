const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-3513551349994681-091617-3a7d31101386ad8f97f8011bd3f27484-184125453",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../pages")));
app.use(express.static(path.join(__dirname,"../Javascript")));
app.use(cors());
app.get("/", function (req, res) {
	path.resolve(__dirname, "..", "pages", "tienda.html");
	path.resolve(__dirname, "..", "Javascript", "productos.js");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});