import { Router } from "express";

import ProductsController from "../controllers/products";

const productController = new ProductsController();

const routes = Router();

routes.get("/", productController.index);
routes.get("/:id", productController.show);

export default routes;
