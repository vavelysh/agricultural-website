<template>
  <BusinessService
    to-back-text="Sezon zimowy"
    to-forward-text="Spis usług"
    to-back-path="/uslugi/sezon-zimowy"
    to-forward-path="/uslugi"
  >
    <template #title> Dzierżawa i sprzedaż </template>
    <template #content>
      <ContainerService
        name-alt="Dzierżawa i sprzedaż #1 image"
        :image="
          require(`~/assets/images/dzierzawa/1.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)
        "
        :imagewebp="
          require(`~/assets/images/dzierzawa/1.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)
        "
      >
        <h5>Dzierżawa</h5>
        <p>Wydzierżawię:</p>
        <ul>
          <li>grunty orne</li>
          <li>łąki</li>
          <li>nieużytki</li>
        </ul>
      </ContainerService>
      <ContainerService
        name-alt="Dzierżawa i sprzedaż #2 image"
        :image="
          require(`~/assets/images/dzierzawa/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)
        "
        :imagewebp="
          require(`~/assets/images/dzierzawa/main.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)
        "
      >
        <h5>Sprzedaż</h5>
        <p>Sprzedajemy kruszywa takie jak:</p>
        <ul>
          <li>kamienie</li>
          <li>klińce</li>
          <li>żwir</li>
          <li>piasek</li>
          <li>ziemie</li>
        </ul>
        <p>i wiele innych.</p>
      </ContainerService>
      <ContainerService
        name-alt="Dzierżawa i sprzedaż #3 image"
        :image="
          require(`~/assets/images/dzierzawa/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)
        "
        :imagewebp="
          require(`~/assets/images/dzierzawa/2.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)
        "
      >
        <h5>Przekształcanie nieużytków i ugorów</h5>
      </ContainerService>
      <ContainerService
        name-alt="Dzierżawa i sprzedaż #4 image"
        :image="
          require(`~/assets/images/dzierzawa/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200`)
        "
        :imagewebp="
          require(`~/assets/images/dzierzawa/3.jpg?resize&sizes[]=700&sizes[]=900&sizes[]=1200&format=webp`)
        "
      >
        <h5>Zagospodarowanie terenu</h5>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService';
import BusinessService from '../../components/BusinessService/BusinessService';

export default {
  components: { BusinessService, ContainerService },
  name: 'dzirzawa',
  data() {
    return {
      title: 'Dzierżawa i sprzedaż',
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
            'Dzierżawa i sprzedaż świadczona przez firmę Agro-Mar. Sprzedaż kamieni, piasku, klińca, żwiru itp. Zagospodarowanie terenu, przekształcanie nieużytków.',
        },
      ],
    };
  },
};
</script>
