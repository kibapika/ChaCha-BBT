<script>
export default {
  name: 'SpecialTeas'
}
</script>

<template>
  <div>
    <h1>Specialty Teas</h1>
    <ul>
      <li>
        <strong>Brown Sugar Milk Tea</strong>
        <span> — Black Tea, Milk, Brown Sugar Syrup</span>
      </li>
      <li>
        <strong>Matcha Latte</strong>
        <span> — Matcha Green Tea, Milk</span>
      </li>
      <li>
        <strong>Honeydew Milk Tea</strong>
        <span> — Honeydew Flavor, Milk</span>
      </li>
      <li>
        <strong>Mango Smoothie</strong>
        <span> — Mango, Milk, Ice, Cubed Mangos</span>
      </li>
      <li>
        <strong>Red Bean Milk Tea</strong>
        <span> — Black Tea, Milk, Red Bean</span>
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
