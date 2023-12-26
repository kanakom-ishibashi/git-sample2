<div id="app">
  <select>
    <option v-for="(msg, index) in msgs" :key="index">{{ msg }}</option>
  </select>
</div>