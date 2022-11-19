<script>
import NavBar from "@/components/NavigationBar.vue";

import CarEvaluationService from "@/api-services/CarEvaluation.service";

export default {
  components: { NavBar },

  data() {
    return {
      formData: {
        selManufacturers: [],
        dateOfBirth: "",
        address: "",
      },

      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },

  created() {
    CarEvaluationService.getManufacturers().then((response) => {
      const carMans = response.data;

      //console.log(carMans);

      const carMansKeys = Object.keys(response.data);

      this.formData.selManufacturers = [];
      carMansKeys.forEach((key, index) => {
        this.formData.selManufacturers.push({ id: key, name: carMans[key] });
      });

      //console.log(this.formData.selManufacturers[2]);

      // this.formData.name = response.data[0].id; // response.data.name;
      // this.formData.dateOfBirth = new Date().toISOString().split('T')[0]; // response.data.dateOfBirth.split('T')[0];
      // this.formData.address = response.data[0].value; // response.data.address;
    });
  },
};
</script>

<template>
  <NavBar />
  <form>
    <div class="row mb-3">
      <label for="inputSelMans" class="col-sm-2 col-form-label">Manufacturer</label>
      <div class="col-sm-10">
        <select class="form-select" id="inputSelMans">
          <option v-for="(manufacturer, index) in formData.selManufacturers" :key="index" :value="manufacturer.id">
            {{ manufacturer.name }}
          </option>
        </select>
      </div>
    </div>
  </form>
</template>
