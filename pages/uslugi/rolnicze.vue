<template>
  <BusinessService>
    <template #title>
      Usługi rolnicze
    </template>
    <template #content>
      <ContainerService>
        <h5>Zbiór zbóż, rzepaku i kukurydzy</h5>
        <ul>
          <li>Zbiór płodów rolnych</li>
          <li>Koszenie kombajnem zbóż, rzepaku, kukurydzy</li>
          <li>Odbiór płodów rolnych z pola</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Orka</h5>
        <p>Świadczona pługiem obrotowym 4-skibowym.</p>
      </ContainerService>
      <ContainerService>
        <h5>Uprawa i siew</h5>
        <p>Siew agregatem uprawowo - siewnym z redlicami talerzowymi. Siejemy zboża, rzepak i inne rośliny.</p>
      </ContainerService>
      <ContainerService>
        <h5>Nawożenie i ochrona</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>Rozsiewanie nawozów mineralnych (sztucznych)</li>
          <li>Wysiew wapna - kredy</li>
          <li>Wywóz obornika</li>
          <li>Możliwość załadunku</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Mulczowanie resztek pożniwnych</h5>
        <ul>
          <li>Mulczowanie resztek po kukurydzy w celu zwalczania larw omacnicy prosowianki</li>
          <li>Ułatwiamy wykonanie późniejszych uprawek pożniwnych oraz przyśpieszamy rozkład masy</li>
          <li>Wykaszanie łąk, nieużytków, ugorów</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Transport - ciągnik + przyczepa</h5>
        <p>Transport - przewóz materiałów ciągnikiem rolniczym wraz z przyczepą. Praca pod koparką, sieczkarnią do kukurydzy itd.</p>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService'
import BusinessService from '../../components/BusinessService/BusinessService'

export default {
  components: { BusinessService, ContainerService },
  name: 'rolnicze'
}
</script>

