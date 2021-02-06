<template>
  <BusinessService
    to-back-text="Roboty ziemne i drogowe"
    to-forward-text="Dzierżawa i sprzedaż"
    to-back-path="/uslugi/roboty"
    to-forward-path="/uslugi/dzierzawa">
    <template #title>Sezon zimowy</template>
    <template #content>
      <ContainerService
        name-alt="Sezon zimowy #1 image"
        :image='require(`~/assets/images/zimowy/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)'
        :imagewebp="require(`~/assets/images/zimowy/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)"

      >
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
  data() {
    return {
      title: 'Usługi w sezonie zimowym',
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
            'Usługi w sezonie zimowym świadczone przez firmę Agro-Mar. Zimowe utrzymanie dróg, parkingów, chodników itp. Zwalczanie śliskości, załadunek i wywóz śniegu.',
        },
      ],
    };
  },
};
</script>
