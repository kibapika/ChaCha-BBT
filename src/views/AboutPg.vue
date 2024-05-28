<script setup>
import tea from '../assets/tea.jpg'
</script>

<template>
  <div id="aboutdiv">
    <img id="teapic" width="40%" alt="teaaboutpg" :src="tea" />
    <section id="aboutsec">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eius officia. Eaque
        similique qui ducimus, iusto est nulla, beatae a quidem ad facilis dolores repudiandae hic
        optio modi id quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
        soluta corrupti, veritatis ut alias sint dolorem voluptates enim, excepturi est eos laborum
        omnis voluptatem, ratione magni facilis sit exercitationem!<br />Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Fuga aut cumque repellendus, neque maiores laborum accusamus
        in temporibus atque minus sint et incidunt harum ex omnis numquam impedit voluptatibus
        sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias sunt
        exercitationem dolore eaque tenetur labore maiores, illum ut quod impedit quas est, facilis
        minus dignissimos recusandae amet iusto? Odio. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quos quis nesciunt, repellat mollitia sunt repudiandae expedita in atque
        molestias ex, dolorum iste explicabo suscipit ducimus vel non, at modi soluta.
      </p>
    </section>
  </div>
</template>

<style scoped>
#teapic {
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
}

#aboutdiv{
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: space-around;

}

#aboutsec{
    width: 50%;
}
</style>
