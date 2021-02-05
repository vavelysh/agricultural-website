<template>
  <BusinessService>
    <template #title>
      Dzierżawa i sprzedaż
    </template>
    <template #content>
      <ContainerService :image='require(`~/assets/images/dzierzawa/1.jpg?resize&size=700`)'>
        <h5>Dzierżawa</h5>
        <p>Wydzierżawię:</p>
        <ul>
          <li>grunty orne</li>
          <li>łąki</li>
          <li>nieużytki</li>
        </ul>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/dzierzawa/main.jpg?resize&size=700`)'>
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
      <ContainerService :image='require(`~/assets/images/dzierzawa/2.jpg?resize&size=700`)'>
        <h5>Przekształcanie nieużytków i ugorów</h5>
      </ContainerService>
      <ContainerService :image='require(`~/assets/images/dzierzawa/3.jpg?resize&size=700`)'>
        <h5>Zagospodarowanie terenu</h5>
      </ContainerService>
    </template>
  </BusinessService>
</template>

<script>
import ContainerService from '../../components/BusinessService/ContainerService'
import BusinessService from '../../components/BusinessService/BusinessService'

export default {
  components: { BusinessService, ContainerService },
  name: 'dzirzawa'
}
</script>
