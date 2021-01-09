import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepHeader from './StepsHeader';
import './style.css';
import { Product, OrderLocationData } from './typess';


function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] =  useState<OrderLocationData>();
    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>

    )
}

export default Orders;