<template>
  <BusinessService>
    <template #title> Roboty ziemne i drogowe </template>
    <template #content>
      <ContainerService :image='require(`~/assets/images/roboty/main.jpg?resize&size=700`)'>
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
      <ContainerService :image='require(`~/assets/images/roboty/4.jpg?resize&size=700`)'>
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
};
</script>
