"use client";

import { useState } from "react";
import * as S from "./styles";

// UTILS
import { links } from "./links";

const Links = () => {
  const [id, setId] = useState<number>(0);

  return Array.from(links, (item, index) => {
    return (
      <S.TabLink
        key={item.id}
        onClick={() => setId(index)}
        weigth={index === id ? "700" : "400"}
        border={index === id ? "4px solid #FFA585" : "4px solid transparent"}
      >
        {item.name}
      </S.TabLink>
    );
  });
};

const TabNavigator = () => {
  return (
    <S.WrapperTabNavigator>
      <S.ContainerTabLinks>
        <Links />
      </S.ContainerTabLinks>

      <S.SelectFilterProducts>
        <S.OptionFilter value="none" disabled selected hidden>
          Organizar por
        </S.OptionFilter>
        <S.OptionFilter value="Novidades">Novidades</S.OptionFilter>
        <S.OptionFilter value="Preço: Maior - menor">
          Preço: Maior - menor
        </S.OptionFilter>
        <S.OptionFilter value="Preço: Menor - maior">
          Preço: Menor - maior
        </S.OptionFilter>
        <S.OptionFilter value="Mais vendidos">Mais vendidos</S.OptionFilter>
      </S.SelectFilterProducts>
    </S.WrapperTabNavigator>
  );
};

export default TabNavigator;
