import { getShoppingCart } from "./localStroage.jsx";

const cartRecipesLoader = async () => {

    const loadedProducts = await  fetch(`https://bangladesh-food-server-git-main-mufizul27.vercel.app/recipe`);
    const arrayOfResponce = await loadedProducts.json();
    var totalRecipes=[];

    for(const chef of arrayOfResponce){
        chef.recipesList.map((e)=>totalRecipes.push(e));
    }
    console.log("cartRecipesLoader");
    console.log(totalRecipes);

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = totalRecipes.find(pd => pd.id == id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    console.log(savedCart);

    // if you need to send two things
    // return [products, savedCart]
    // another options
    // return { products, cart: savedCart }

    return savedCart;
}

export default cartRecipesLoader;