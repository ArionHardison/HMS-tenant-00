<template>
  <div class="row">
    <div class="col-12">
      <label class="mt-2">Country</label>
      <Multiselect
        v-model="selectedCountry"
        track-by="id"
        :multiple="false"
        :options="countries"
        label="nicename"
        class="mb-2"
        @search-change="findCountry"
        @select="setCountry"
      ></Multiselect>
      <InvalidFeedback :state="errorFields.includes(countryFieldName)">
        {{
          formErrors[countryFieldName]
            ? [...formErrors[countryFieldName]].shift()
            : ""
        }}
      </InvalidFeedback>
    </div>
    <template v-if="selectedCountry">
      <div class="col-5">
        <div class="form-control phone-prefix text-center">
          +{{ selectedCountry.phonecode }}
        </div>
      </div>
      <div class="col-7">
        <InputField
          v-model="phoneNumber"
          :disabled="country === 0"
          name="phone"
          type="text"
          :label="country === 0 ? 'Select your country first' : 'Phone'"
          @input="submitData"
        />
      </div>
    </template>
  </div>
</template>

<script>
import InputField from "@/components/Forms/Fields/InputField";
import Multiselect from "vue-multiselect";
import api from "@/mixins/api";
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback";

export default {
  name: "PhoneField",
  components: { InvalidFeedback, InputField, Multiselect },
  mixins: [api],
  props: {
    countryFieldName: String,
    tenant: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Object],
      default: "",
    },
    onlyPhone: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      countries: [],
      replacePrefix: false,
      selectedCountry: "",
      country: 0,
      searchTimeout: null,
      phoneNumber: null,
    };
  },
  computed: {
    errorFields() {
      return this.$store.state.errorFields;
    },
    formErrors() {
      return this.$store.state.errors;
    },
  },
  created() {
    if (typeof this.value === "object" && this.value !== null) {
      this.countries.push(this.value.country);
      this.selectedCountry = this.value.country;
      this.country = this.value.country.id;
      this.phoneNumber = this.value.phone
        .toString()
        .replace(this.value.country.phonecode, "");
    }
  },
  methods: {
    setCountry(selectedCountry) {
      this.country = selectedCountry.id;
      this.$store.commit("api/HIDE_ERROR", this.countryFieldName);
    },
    findCountry(searchQuery) {
      clearTimeout(this.searchTimeout);
      if (searchQuery !== "") {
        this.searchTimeout = setTimeout(async () => {
          this.countries = await this.get(`public/countries/${searchQuery}`);
        }, 500);
      }
    },
    submitData() {
      if (this.onlyPhone) {
        this.$emit(
          "input",
          `${this.selectedCountry.phonecode}${this.phoneNumber}`
        );
      } else {
        this.$emit("input", {
          country: this.country,
          phone: `${this.selectedCountry.phonecode}${this.phoneNumber}`,
        });
      }
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
</style>
<style scoped>
.phone-prefix {
  margin-top: 40px;
  padding-top: 12px;
  background-color: #e9ecef;
}
</style>
