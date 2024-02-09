import React from 'react'

const ReviewDetails = ({params}) => {

    console.log(params)

  return (
    <div>
        <h1>Review {params.productId} for product {params.reviewId}</h1>
    </div>
  )
}

export default ReviewDetails