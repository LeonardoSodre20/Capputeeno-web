"use client";

import * as S from "./styles";

const TabNavigator = () => {
  return (
    <S.WrapperTabNavigator>
      <S.ContainerTabLinks>
        <S.TabLink>Todos os produtos</S.TabLink>
        <S.TabLink>Camisetas</S.TabLink>
        <S.TabLink>Canecas</S.TabLink>
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
