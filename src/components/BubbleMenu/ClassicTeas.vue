<script>
export default {
  name: 'ClassicTeas'
}
</script>
<template>
  <div>
    <h1>Classic Milk Teas</h1>
    <ul>
      <li>
        <strong>Classic Milk Tea</strong>
        <span> — Black Tea, Milk</span>
      </li>
      <li>
        <strong>Jasmine Green Tea</strong>
        <span> — Green Tea, Milk</span>
      </li>
      <li>
        <strong>Oolong Milk Tea</strong>
        <span> — Oolong Tea, Milk</span>
      </li>
      <li>
        <strong>Thai Milk Tea</strong>
        <span> — Thai Tea, Milk</span>
      </li>
      <li>
        <strong>Taro Milk Tea</strong>
        <span> — Fresh Taro, Milk</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

h1 {
  font-size: 30px;
  font-weight: bolder;
  text-align: center;

}

ul {
  list-style: none;
  padding: 0%;
}


li {
  margin-bottom: 8px;
}

strong {
  font-size: 18px;
  font-weight: bold;
}

span {
  color: #555;
  font-size: 15px;
}
</style>
