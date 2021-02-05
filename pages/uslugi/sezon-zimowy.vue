<template>
  <BusinessService>
    <template #title>Sezon zimowy</template>
    <template #content>
      <ContainerService :image='require(`~/assets/images/zimowy/main.jpg?resize&size=700`)'>
        <p>Oferujemy zimowe utrzymanie:</p>
        <ul>
          <li>dróg</li>
          <li>parkingów</li>
          <li>chodników</li>
          <li>
            placów i innych terenów
          </li>
        </ul>
        <p>Oferujemy także:</p>
        <ul>
          <li>odśnieżanie powierzchni</li>
          <li>zwalczanie śliskości (posypywanie) solą, piaskiem, szlaką itd.</li>
          <li>załadunek i wywóz śniegu</li>
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
  name: 'szimowy',
};
</script>
