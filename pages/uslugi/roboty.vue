<template>
  <BusinessService
    to-back-text="Usługi rolnicze"
    to-forward-text="Sezon zimowy"
    to-back-path="/uslugi/rolnicze"
    to-forward-path="/uslugi/sezon-zimowy">
    <template #title> Roboty ziemne i drogowe </template>
    <template #content>
      <ContainerService
        name-alt="Roboty ziemne i drogowe #1 image"
        :image='require(`~/assets/images/roboty/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/roboty/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
        <h5>Usługi koparko-ładowarką</h5>
        <p>Oferujemy:</p>
        <ul>
          <li>Utwardzenie terenu</li>
          <li>Budowa dróg, zjazdów, mostków itd.</li>
          <li>Podbudowy</li>
          <li>
            Wszelakiego rodzaju wykopy (pod fundamenty, szamba, oczyszczalnie,
            studnie, media)
          </li>
          <li>Wyburzenia, rozbiórki</li>
          <li>Czyszczenie rowów i kanałów</li>
          <li>Usługa i wynajem walca - zagęszczarki</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Roboty ziemne i drogowe #2 image"
        :image='require(`~/assets/images/roboty/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/roboty/4.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"
      >
        <h5>Transport - bus wywrotka - do 3,5t</h5>
        <p>
          Transport samochodem ciężarowym - busem do 3,5t. Skrzynia wywrotka.
        </p>
        <p>Przewóz:</p>
        <ul>
          <li>opału</li>
          <li>drewna</li>
          <li>piasku</li>
          <li>roślin</li>
        </ul>
        <p>
          i innych kruszyw
        </p>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService';
import BusinessService from '../../components/BusinessService/BusinessService';

export default {
  components: { BusinessService, ContainerService },
  name: 'roboty',
  data() {
    return {
      title: 'Roboty ziemne i drogowe',
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
            'Usługi robotami ziemnymi i drogowymi świadczone przez firmę Agro-Mar. Budowa dróg, zjazdów itp. Wyburzenia, rozbiórki, podbudowy. Przewóz kruszyw.',
        },
      ],
    };
  },
};
</script>
