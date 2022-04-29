import DOMHandler from "../dom-handler.js";
import { showProductsByCategory } from "../services/products-service.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventChangeCategory() {
  const categoriesList = document.querySelectorAll(".js-category");
  categoriesList.forEach((category) => {
    category.addEventListener("click", async (event) => {
      const categoryId = event.target.dataset.id;
      const products = await showProductsByCategory(categoryId);
      saveToLocalStorage("products", products);
      saveToLocalStorage("category selected", categoryId);
      saveToLocalStorage("product to search", null);
      saveToLocalStorage("sort selected", null);
      DOMHandler.reload();
    });
  });
}