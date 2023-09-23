import * as S from "./styles";

// TYPES
interface PropsCardProdut {
  name: string;
  image_url: string;
  price: number;
}

const CardProduct = ({ name, image_url, price }: PropsCardProdut) => {
  return (
    <S.ContainerCard>
      <S.ImageProduct src={image_url} alt="product-image" />
      <S.Name>{name}</S.Name>
      <S.Price>R$ {price}</S.Price>
    </S.ContainerCard>
  );
};

export default CardProduct;
