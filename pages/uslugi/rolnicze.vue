<template>
  <BusinessService>
    <template #title>
      Usługi rolnicze
    </template>
    <template #content>
      <ContainerService :image='require(`~/assets/images/rolnicze/3.jpg?resize&size=700`)'>
        <h5>Zbiór zbóż, rzepaku i kukurydzy</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>zbiór płodów rolnych</li>
          <li>koszenie kombajnem zbóż, rzepaku, kukurydzy</li>
          <li>odbiór płodów rolnych z pola</li>
        </ul>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/rolnicze/1.jpg?resize&size=700`)'>
        <h5>Orka</h5>
        <p>Świadczona pługiem obrotowym 4-skibowym.</p>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/rolnicze/2.jpg?resize&size=700`)'>
        <h5>Uprawa i siew</h5>
        <p>Siew agregatem uprawowo - siewnym z redlicami talerzowymi. Siejemy zboża, rzepak i inne rośliny.</p>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/rolnicze/4.jpg?resize&size=700`)'>
        <h5>Nawożenie i ochrona</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>rozsiewanie nawozów mineralnych (sztucznych)</li>
          <li>wysiew wapna - kredy</li>
          <li>wywóz obornika</li>
          <li>możliwość załadunku</li>
        </ul>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/rolnicze/5.jpg?resize&size=700`)'>
        <h5>Mulczowanie resztek pożniwnych</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>mulczowanie resztek po kukurydzy w celu zwalczania larw omacnicy prosowianki</li>
          <li>ułatwiamy wykonanie późniejszych uprawek pożniwnych oraz przyśpieszamy rozkład masy</li>
          <li>wykaszanie łąk, nieużytków, ugorów</li>
        </ul>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/rolnicze/6.jpg?resize&size=700`)'>
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

