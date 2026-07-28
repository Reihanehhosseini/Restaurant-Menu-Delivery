export async function getProducts() {
    const res = await fetch(`/api/products`,{
        cache:"no-store"
    });
    return res.json()
    
}