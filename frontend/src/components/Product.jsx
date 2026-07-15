import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
// import { productsdata } from '../categoriesdata';
import { publicRequest } from '../RequestMethods';
import ProductPageItem from './ProductPageItem';


const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`;

const Product = (props) => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        const getProducts = async ()=> {
            try{
                const res = await publicRequest.get(props.cat ? `products?categories=${props.cat}` : "products");
                setProducts(res.data);
            }
            catch(err){
                console.log(err);
            }   
        }
        getProducts();
    },[props.cat])
  return (
    <Wrapper>
        {  products.map((item) => (
            <ProductPageItem item={item} key={item._id} />
          ))}
    </Wrapper>
  )
}

export default Product;
