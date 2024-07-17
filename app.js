import express from "express";
import { Liquid } from "liquidjs";

const __dirname = import.meta.dirname;

const app = express();
const engine = new Liquid({
	root: __dirname,
	extname: ".liquid",
});

app.use(express.static("public"));

app.engine("liquid", engine.express());
app.set("views", ["./src/pages", "./src/layouts"]);
app.set("view engine", "liquid");

// INDEX PAGE
app.get("/", function (req, res) {
	res.render("index-page", {
		pageTitle: "Portfolio - MikeNewXYZ",
	});
});

// CONTACT PAGE
app.get("/contact", function (req, res) {
	res.render("contact-page", {
		pageTitle: "Portfolio - Contact",
	});
});

// RESUME PAGE
app.get("/resume", function (req, res) {
	res.render("resume-page", {
		pageTitle: "Portfolio - Resume",
	});
});

// PROJECTS PAGE
app.get("/projects", function (req, res) {
	res.render("projects-page", {
		pageTitle: "Portfolio - Projects",
	});
});

export default app;
