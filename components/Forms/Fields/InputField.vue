<template>
  <div :class="{ 'mt-2': label }">
    <label v-if="label" :for="`${name}-input`" class="form-control-label">{{
        label
                                                                          }}</label>
    <div class="input-group">
      <slot></slot>

      <template v-if="mask">
        <the-mask class="form-control" masked :mask="maskData" v-model="content" @input="changeModelValue"/>
      </template>
      <template v-else>
        <input
          :id="`${name}-input`"
          v-model="content"
          :error="formErrors[name] ? [...formErrors[name]].shift() : ''"
          :name="name"
          :placeholder="placeholder ? placeholder : label"
          :type="showPassword ? 'text' : type"
          :inputmode="inputmode"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :prepend-icon="icon"
          :class="{
          'form-control': label || lg,
          'form-lg': lg,
          'is-invalid': errorFields.includes(name),
          [className]: className,
        }"
          @input="changeModelValue"
          :maxlength="maxlength"
          :required="required"
          class="input-content"
        />
      </template>

      <div
        v-if="type === 'password'"
        class="input-group-append eye-block-container"
        :class="{
           'icon-invalid': errorFields.includes(name)
        }"
        @click="showPassword = !showPassword"
      >
        <span class="input-group-text c-pointer">
          <EyeOutline :size="15" v-if="showPassword"/>
          <EyeOffOutline :size="15" v-else/>
        </span>
      </div>

    </div>
    <client-only>
      <InvalidFeedback
        :class="{ 'ellipsis-error': tooltip }"
        :state="errorFields.includes(name)"
      >
        {{ formErrors[name] ? [...formErrors[name]].shift() : "" }}
      </InvalidFeedback>

    </client-only>

  </div>
</template>

<script>
import InvalidFeedback from "@/components/Forms/Fields/InvalidFeedback";
import formField from "@/mixins/components/formField";
import EyeOffOutline from "vue-material-design-icons/EyeOffOutline.vue";
import EyeOutline from "vue-material-design-icons/EyeOutline.vue";


export default {
  name: "InputField",
  components: {
    InvalidFeedback,
    EyeOffOutline,
    EyeOutline,
  },
  mixins: [formField],
  props: {
    value: [Number, String],
    name: String,
    type: String,
    inputmode: String,
    icon: String,
    mask: false,
    maskData: "",
    autocomplete: String,
    placeholder: String,
    disabled: Boolean,
    label: String,
    tooltip: Boolean,
    className: String,
    maxlength: Number,
    required: Boolean,
    lg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>

<style scoped>
label {
  min-height: 18px;
}

.icon-invalid {
  border-left: 1px solid red;
}

.ellipsis-error {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
}

.eye-block-container {
  position: absolute;
  right: 0;
  z-index: 3;
}

.input-content {
  padding-right: 45px;
}
</style>
