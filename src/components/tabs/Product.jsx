import React from 'react'

export const Product = ({ product, src }) => (
  <div>
    <img src={`suppliers/${src}.gif`} alt={product} />
    {product}
  </div>
)
