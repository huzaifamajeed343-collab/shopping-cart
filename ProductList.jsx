import React, { useState } from "react";
import { addToCart } from "./CartSlice";
import Navbar from "./Navbar";

const plants = [
  // Indoor (6)
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor", img: "https://images.unsplash.com/photo-1598887142487-2e782f1b9c6b" },
  { id: 2, name: "Peace Lily", price: 18, category: "Indoor", img: "https://images.unsplash.com/photo-1587502537104-4e8c1c8f3c6c" },
  { id: 3, name: "Spider Plant", price: 12, category: "Indoor", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0" },
  { id: 4, name: "Fern", price: 14, category: "Indoor", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 5, name: "Rubber Plant", price: 20, category: "Indoor", img: "https://images.unsplash.com/photo-1592841200221-3f2b6a3c7c2f" },
  { id: 6, name: "Monstera", price: 25, category: "Indoor", img: "https://images.unsplash.com/photo-1600857062241-98e5dba7b6b7" },

  // Succulents (6)
  { id: 7, name: "Aloe Vera", price: 10, category: "Succulents", img: "https://images.unsplash.com/photo-1587502537104-4e8c1c8f3c6c" },
  { id: 8, name: "Cactus", price: 12, category: "Succulents", img: "https://images.unsplash.com/photo-1512427691650-1a9c8b5c8c7b" },
  { id: 9, name: "Echeveria", price: 11, category: "Succulents", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 10, name: "Haworthia", price: 9, category: "Succulents", img: "https://images.unsplash.com/photo-1592841200221-3f2b6a3c7c2f" },
  { id: 11, name: "Jade Plant", price: 13, category: "Succulents", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0" },
  { id: 12, name: "Sedum", price: 8, category: "Succulents", img: "https://images.unsplash.com/photo-1600857062241-98e5dba7b6b7" },

  // Flowering (6)
  { id: 13, name: "Rose", price: 20, category: "Flowering", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946" },
  { id: 14, name: "Tulip", price: 14, category: "Flowering", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 15, name: "Orchid", price: 22, category: "Flowering", img: "https://images.unsplash.com/photo-1587502537104-4e8c1c8f3c6c" },
  { id: 16, name: "Daisy", price: 10, category: "Flowering", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0" },
  { id: 17, name: "Sunflower", price: 16, category: "Flowering", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { id: 18, name: "Lavender", price: 18, category: "Flowering", img: "https://images.unsplash.com/photo-1600857062241-98e5dba7b6b7" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <Navbar />
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === cat).map(p => (
              <div className="card" key={p.id}>
                <img src={p.img} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
                <button
                  disabled={added.includes(p.id)}
                  onClick={() => {
                    dispatch(addToCart(p));
                    setAdded([...added, p.id]);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
