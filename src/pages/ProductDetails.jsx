import { useState } from "react";
import { ProductMenu } from "../components/productMenu/ProductMenu";

const [id, setId] = useState(1);

const { data, isLoading, error } = useGet(
  `https://api.mediehuset.net/bakeonline/categories/${id}`
);

console.log("Produkter, data");

const ProductDetails = () => {
  return (
    <div>
      <h2>{data?.item.title}</h2>
      <ProductMenu setId={setId} />
      <GridContainer colums={4}>
        {data?.item.products.map((product) => {
          return (
            <ProductCard
              imgSrc={product.image.fullpath}
              numberComments={product.num_comments}
              title={product.title}
              text={product.teaser}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};
