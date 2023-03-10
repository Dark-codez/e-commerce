export const get_species = async ({queryKey}) => {
    const res = await fetch(`http://swapi.dev/api/species/?page=${queryKey[1]}`);
    const data = await res.json();  
    return data;
}
export const get_person = async ({queryKey}) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${queryKey[1]}`);
    const data = await res.json();  
    return data;
}
export const get_product_category = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data;
}
export const get_single_product = async ({queryKey}) => {
    const res = await fetch(`https://dummyjson.com/products/${queryKey[1]}`);
    const data = await res.json();
    return data;
}

export const get_mobile_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/smartphones");
    const data = await res.json();
    return data;
}

export const get_laptop_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/laptops");
    const data = await res.json();
    return data;
}

export const get_fragrance_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/fragrances");
    const data = await res.json();
    return data;
}

export const get_skincare_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/skincare");
    const data = await res.json();
    return data;
}

export const get_groceries_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/groceries");
    const data = await res.json();
    return data;
}

export const get_decoration_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/home-decoration");
    const data = await res.json();
    return data;
}

export const get_furniture_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/furniture");
    const data = await res.json();
    return data;
}

export const get_tops_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/tops");
    const data = await res.json();
    return data;
}

export const get_womens_dresses_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/womens-dresses");
    const data = await res.json();
    return data;
}

export const get_womens_shoes_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/womens-shoes");
    const data = await res.json();
    return data;
}

export const get_mens_shirts_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/mens-shirts");
    const data = await res.json();
    return data;
}

export const get_mens_shoes_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/mens-shoes");
    const data = await res.json();
    return data;
}

export const get_mens_watches_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/mens-watches");
    const data = await res.json();
    return data;
}

export const get_womens_watches_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/womens-watches");
    const data = await res.json();
    return data;
}

export const get_womens_bags_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/womens-bags");
    const data = await res.json();
    return data;
}

export const get_womens_jewellery_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/womens-jewellery");
    const data = await res.json();
    return data;
}

export const get_sunglasses_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/sunglasses");
    const data = await res.json();
    return data;
}

export const get_automotive_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/automotive");
    const data = await res.json();
    return data;
}

export const get_motorcycle_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/motorcycle");
    const data = await res.json();
    return data;
}

export const get_lighting_products = async () => {
    const res = await fetch("https://dummyjson.com/products/category/lighting");
    const data = await res.json();
    return data;
}