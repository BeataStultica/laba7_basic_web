import React, { useEffect, useState } from 'react';
import GoodsCards from './GoodsCard';
import c from './Catalog.module.css';
const Catalog = () => {
    const [fruits, setFruit] = useState([]);

    useEffect(() => {
        setFruit(require('./fruits.json').fruits)
        // fetch('./fruits.json')
        //     .then((res) => res.json())
        //     .then((res) => setFruit(res));
    }, []);
    return (
        <div className="Catalog">
            <div className={c.container}>
                {fruits.map((fruit) => (
                    <GoodsCards key={fruit.id} props={fruit} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;