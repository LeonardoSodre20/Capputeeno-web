import * as S from "./styles";

// HOOKS
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { push } = useRouter();
  const [toggle, setToggle] = useState<"true" | "false">("false");

  const handleOpenMenu = () => {
    if (toggle.includes("false")) {
      setToggle("true");
    } else {
      setToggle("false");
    }
  };

  return (
    <S.WrapperHeader>
      <S.Title>capputeeno</S.Title>

      <S.ContainerInputAndButtonCart>
        <S.ContainerInput>
          <S.InputSearchProducts placeholder="Procurando por algo específico?" />
          <S.IconSearchInput src="/search-icon.svg" alt="search-icon-menu" />
        </S.ContainerInput>

        <S.ContainerIconCartProducts>
          <S.IconCartMenu src="/cart-icon.svg" alt="icon-cart-menu" />
          <S.CountProducts>0</S.CountProducts>
        </S.ContainerIconCartProducts>
      </S.ContainerInputAndButtonCart>

      <>
        {toggle === "false" ? (
          <S.ButtonOpenMenuMobile onClick={handleOpenMenu} visible={toggle} />
        ) : (
          <S.ButtonCloseMobile onClick={handleOpenMenu} visible={toggle} />
        )}

        {
          <S.ContainerMenuMobile
            style={{
              transform:
                toggle === "true" ? "translateX(0)" : "translateX(-500px)",
            }}
            visible={toggle}
          >
            <S.InputSearchProductsMobile placeholder="Procurando por algo específico?" />
            <S.ButtonOpenCheckoutMobile
              onClick={() => {
                push("/checkout");
                setToggle("false");
              }}
            >
              Ver carrinho
              <S.IconCart src="/cart-icon-white.svg" alt="icon-cart-products" />
            </S.ButtonOpenCheckoutMobile>
          </S.ContainerMenuMobile>
        }
      </>
    </S.WrapperHeader>
  );
};

export default Header;
