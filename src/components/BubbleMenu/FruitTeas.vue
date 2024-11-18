<script>
export default {
  name: 'FruitTeas'
}
</script>
<template>
  <div>
    <h1>Fruit Teas</h1>
    <ul>
      <li>
        <strong>Mango Green Tea</strong>
        <span> — Green Tea, Mango Flavor, Mango Jelly</span>
      </li>
      <li>
        <strong>Passion Fruit Black Tea</strong>
        <span> — Black Tea, Passion Fruit, Popping Boba</span>
      </li>
      <li>
        <strong>Strawberry Lemonade Tea</strong>
        <span> — Black Tea, Strawberry Flavor, Lemon + Strawberry Slices</span>
      </li>
      <li>
        <strong>Peach Oolong Tea</strong>
        <span> — Oolong Tea, Peach Flavor, Lychee Jelly</span>
      </li>
      <li>
        <strong>Lychee Green Tea</strong>
        <span> — Green Tea, Lychee Flavor, Fresh Lychee</span>
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
  font-size: 28px;
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
