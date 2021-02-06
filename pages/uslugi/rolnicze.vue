<template>
  <BusinessService
    to-back-text="Usługi komunalne"
    to-forward-text="Roboty ziemne i drogowe"
    to-back-path="/uslugi/komunalne"
    to-forward-path="/uslugi/roboty">
    <template #title>
      Usługi rolnicze
    </template>
    <template #content>
      <ContainerService
        name-alt="Usługi rolnicze #1 image"
        :image='require(`~/assets/images/rolnicze/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Zbiór zbóż, rzepaku i kukurydzy</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>zbiór płodów rolnych</li>
          <li>koszenie kombajnem zbóż, rzepaku, kukurydzy</li>
          <li>odbiór płodów rolnych z pola</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi rolnicze #2 image"
        :image='require(`~/assets/images/rolnicze/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
        <h5>Orka</h5>
        <p>Świadczona pługiem obrotowym 4-skibowym.</p>
      </ContainerService>
      <ContainerService
        name-alt="Usługi rolnicze #3 image"
        :image='require(`~/assets/images/rolnicze/1.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/1.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Uprawa i siew</h5>
        <p>Siew agregatem uprawowo - siewnym z redlicami talerzowymi. Siejemy zboża, rzepak i inne rośliny.</p>
      </ContainerService>
      <ContainerService
        name-alt="Usługi rolnicze #4 image"
        :image='require(`~/assets/images/rolnicze/5.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/5.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
        <h5>Nawożenie i ochrona</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>rozsiewanie nawozów mineralnych (sztucznych)</li>
          <li>wysiew wapna - kredy</li>
          <li>wywóz obornika</li>
          <li>możliwość załadunku</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi rolnicze #5 image"
        :image='require(`~/assets/images/rolnicze/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
        <h5>Mulczowanie resztek pożniwnych</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>mulczowanie resztek po kukurydzy w celu zwalczania larw omacnicy prosowianki</li>
          <li>ułatwiamy wykonanie późniejszych uprawek pożniwnych oraz przyśpieszamy rozkład masy</li>
          <li>wykaszanie łąk, nieużytków, ugorów</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi rolnicze #6 image"
        :image='require(`~/assets/images/rolnicze/6.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/rolnicze/6.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
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
  name: 'rolnicze',
  data() {
    return {
      title: 'Usługi rolnicze',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Usługi rolnicze świadczone przez firmę Agro-Mar. Zbiór plonów, orka, uprawa i siew, mulczowanie.',
        },
      ],
    };
  },
}
</script>

