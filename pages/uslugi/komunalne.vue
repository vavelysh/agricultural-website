<template>
  <BusinessService>
    <template #title>
      Usługi komunalne
    </template>
    <template #content>
      <ContainerService>
        <h5>Koszenie poboczy drogowych, łąk i nieużytków</h5>
        <p>Odbywa się za pomocą kosiarek bijakowych o różnej szerokości roboczej i zasięgu pracy.</p>
        <ul>
          <li>kosiarki bijakowe tylno-boczne</li>
          <li>kosiarki bijakowe czołowe</li>
          <li>kosiarka wysięgnikowa</li>
          <li>kosiarka spalinowa ( miejsca trudnodostępne )</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Utrzymanie zieleni</h5>
        <p>Koszenie</p>
        <ul>
          <li>traktorkami</li>
          <li>kosiarkami samobieżnymi</li>
          <li>kosami spalinowymi</li>
        </ul>
        <p>Zbiór dmuchawami i odkurzaczami traw i liści</p>
        <p>Oferujemy także:</p>
        <ul>
          <li>Wywóz pozostałości</li>
          <li>Całoroczne utrzymanie zieleni miejskiej, parków, boisk, ogrodów, skwerów</li>
          <li>Nasadzenia drzew, krzewów, roślin</li>
          <li>Wertykulacja</li>
          <li>Piaskowanie</li>
          <li>Oprysk</li>
          <li>Nawożenie</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Wycinka i pielęgnacja drzew - usługi rębakiem</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>Wycinka drzew i samosiejek</li>
          <li>Cięcia pielęgnacyjne</li>
          <li>Prześwietlanie koron</li>
          <li>Karczowanie</li>
          <li>Przygotowanie terenu pod inwestycje i budowę</li>
          <li>Zrębkowanie gałęzi</li>
          <li>Wycinka z podnośnika koszowego</li>
        </ul>
      </ContainerService>
      <ContainerService>
        <h5>Utrzymanie czystości i porządku</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>Sprzątanie placów, dróg, chodników i innych terenów</li>
          <li>Zamiatanie powierzchni mechaniczne, jak i ręczne</li>
          <li>Mycie znaków, przystanków.</li>
          <li>Opróżnianie kubłów na śmieci</li>
          <li>Usuwanie piasku, błota, liści i innych zanieczyszczeń</li>
          <li>Obsługa - utrzymanie czystości na budowach itd.</li>
        </ul>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService'
import BusinessService from '../../components/BusinessService/BusinessService'

export default {
  components: { BusinessService, ContainerService },
  name: 'komunalne'
}
</script>
