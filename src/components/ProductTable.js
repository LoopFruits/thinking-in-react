import React from "react";
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable({ products, search, showStocked }) {

  

  
  const filteredProducts = products
    .filter(product => {
      if (showStocked) {
        return product.stocked
      } else {
        return true
      }
    })
    // searches for whaever is in our useState
    .filter(product => product.name.includes(search))

  // we get partial matches 
  //const filteredProducts = products.filter(product => product.name.includes(search)
  const rows = [];
  let lastCategory;
  for (const product of filteredProducts) {
      if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
      }
      rows.push(<ProductRow key={product.name} name={product.name} stocked={product.stocked} price={product.price} />)
      lastCategory = product.category
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

    
export default ProductTable;