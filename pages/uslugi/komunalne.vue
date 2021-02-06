<template>
  <BusinessService
    to-back-text="Spis usług"
    to-forward-text="Usługi rolnicze"
    to-back-path="/uslugi"
    to-forward-path="/uslugi/rolnicze">
    <template #title> Usługi komunalne </template>
    <template #content>
      <ContainerService
        name-alt="Usługi komunalne #1 image"
        :image="require(`~/assets/images/komunalne/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)"
        :imagewebp="require(`~/assets/images/komunalne/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Koszenie poboczy drogowych, łąk i nieużytków</h5>
        <p>
          Odbywa się za pomocą kosiarek bijakowych o różnej szerokości roboczej
          i zasięgu pracy.
        </p>
        <ul>
          <li>kosiarki bijakowe tylno-boczne</li>
          <li>kosiarki bijakowe czołowe</li>
          <li>kosiarka wysięgnikowa</li>
          <li>kosiarka spalinowa ( miejsca trudnodostępne )</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi komunalne #2 image"
        :image="require(`~/assets/images/komunalne/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)"
        :imagewebp="require(`~/assets/images/komunalne/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Utrzymanie zieleni</h5>
        <p>Koszenie:</p>
        <ul>
          <li>traktorkami</li>
          <li>kosiarkami samobieżnymi</li>
          <li>kosami spalinowymi</li>
        </ul>
        <p>Zbiór dmuchawami i odkurzaczami traw i liści.</p>
        <p>Oferujemy także:</p>
        <ul>
          <li>wywóz pozostałości</li>
          <li>
            całoroczne utrzymanie zieleni miejskiej, parków, boisk, ogrodów,
            skwerów
          </li>
          <li>nasadzenia drzew, krzewów, roślin</li>
          <li>wertykulacja</li>
          <li>piaskowanie</li>
          <li>oprysk</li>
          <li>nawożenie</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi komunalne #3 image"
        :image="require(`~/assets/images/komunalne/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)"
        :imagewebp="require(`~/assets/images/komunalne/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
        <h5>Wycinka i pielęgnacja drzew - usługi rębakiem</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>wycinka drzew i samosiejek</li>
          <li>cięcia pielęgnacyjne</li>
          <li>prześwietlanie koron</li>
          <li>karczowanie</li>
          <li>przygotowanie terenu pod inwestycje i budowę</li>
          <li>zrębkowanie gałęzi</li>
          <li>wycinka z podnośnika koszowego</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Usługi komunalne #4 image"
        :image="require(`~/assets/images/komunalne/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)"
        :imagewebp="require(`~/assets/images/komunalne/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Utrzymanie czystości i porządku</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>sprzątanie placów, dróg, chodników i innych terenów</li>
          <li>zamiatanie powierzchni mechaniczne, jak i ręczne</li>
          <li>mycie znaków, przystanków.</li>
          <li>opróżnianie kubłów na śmieci</li>
          <li>usuwanie piasku, błota, liści i innych zanieczyszczeń</li>
          <li>obsługa - utrzymanie czystości na budowach itd.</li>
        </ul>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService';
import BusinessService from '../../components/BusinessService/BusinessService';

export default {
  components: { BusinessService, ContainerService },
  name: 'komunalne',
  data() {
    return {
      title: 'Usługi komunalne',
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
            'Usługi komunalne świadczone przez firmę Agro-Mar. Koszenie poboczy drogowych, łąk i nieużytków, utrzymanie zieleni, wycinka i pielęgnacja drzew, utrzymanie czystości i porządku',
        },
      ],
    };
  },
};
</script>
