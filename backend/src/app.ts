import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { log } from "console";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
};

type AddProduct = Omit<Product, "id">;

type UpdateProduct = Partial<AddProduct>;

app.use(express.json());

const data: Product[] = [
  {
    id: 1,
    name: "Sample Product 1",
    price: 10.99,
    category: "Electronics",
    stock: 15
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: 29.99,
    category: "Books",
    stock: 10
  }
];
let nextId = 2;

app.get("/", (req: Request, res: Response) => {
  res.send(
    data
  );
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  const newProduct: Product = {
    id: ++nextId,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock
  };

  data.push(newProduct);
  res.status(201).json(newProduct);
});

app.patch("/:id", (req: Request<{ id: string }, any, UpdateProduct>, res: Response) => {
  data.forEach((product) => {
    if(product.id === parseInt(req.params.id)) {
      product.name = req.body.name ?? product.name;
      product.price = req.body.price ?? product.price;
      product.category = req.body.category ?? product.category;
      product.stock = req.body.stock ?? product.stock;
    }
  });
  res.status(200).send(data);
});

app.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((product) => product.id === id);
  if(index !== -1) {
    data.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});