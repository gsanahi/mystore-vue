import { Product } from "@/models/product";
import axios from "axios";

class ProductsService {
  allProducts(): Promise<Product[]> {
    return axios
      .get<Product[]>("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.data);
  }

  oneProduct(id: number): Promise<Product> {
    return axios
      .get<Product>("https://api.escuelajs.co/api/v1/products/" + id)
      .then((response) => response.data);
  }
}

export default new ProductsService();
