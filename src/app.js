import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      countries: [],
      selected: null
    },
    mounted() {
      this.fetchCountries()
    },
    computed: {
      totalWorldPopulation: function () {
        return this.countries.reduce((sum, country) => {
          return sum + country.population
        }, 0);
      },
    },
    methods: {
      fetchCountries: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(fetchedCountries => this.countries = fetchedCountries)
      }
      // fetchName: function() {
      //   const request = fetch("https://restcountries.eu/rest/v2/name/Algeria")
      //   .then(response => response.json())
      //   .then(data => this.countryNameLink = data[0].name)
      // },
      // fetchPopulation: function() {
      //   const request = fetch("https://restcountries.eu/rest/v2/name/Algeria")
      //   .then(response => response.json())
      //   .then(data => this.countryPopulation = data[0].population)
      // }
    }
  })
});
