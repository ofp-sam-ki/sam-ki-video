/*process.on('unhandledRejection', (reason, promise) => {
  console.error('unhandledRejection');
});*/

import Vue from "vue";

import VueDragSelector from "vue-drag-selector";
Vue.use(VueDragSelector);

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)

const Base = Vue.options.components["drag-selector-item"];
const CustomItem = Base.extend({
  data() {
    return {
      sl: ''//,
      //clear: false
    }
  },
  props: {
    value: {
      default: true
    },
    clear: {
      default: false
    }
  },
  methods: {
    handleClick: function() {
      this.handleSelectChange(!this.selected);
    },
    handleSelectChange(val) {
      if (this.selected === val) return;
      this.selected = val;
      this.dispatch('drag-selector', 'drag-selector-item-change', {
          selected: this.selected,
          value: this.value
      });
    },
    clearMethod() {
      this.selected = false;
      this.dispatch('drag-selector', 'drag-selector-item-change', {
        selected: this.selected,
        value: this.value
      });
    }
  },
  watch: {
    clear(newVal, oldVal) {
      console.log("clearm");
      /*if(newVal && !oldVal) {
        console.log("clearm2");
        this.handleSelectChange(false);
        this.clear = false;
      }*/
      if(newVal == !oldVal) {
        console.log("clearm2");
        this.handleSelectChange(false);
      }
    }
  }
})
Vue.component('drag-selector-item-c', CustomItem);

const Base2 = Vue.options.components["drag-selector"];
const CustomItem2 = Base2.extend({
  props: {
    clear: {
      default: false
    }
  },
  methods: {
    registerEvents() {
      this.$on('on-drag-selector-item-add', item => {
        if (item) this.childItems.push(item);
      });
      this.$on('on-drag-selector-item-remove', item => {
          const index = this.childItems.indexOf(item);
          if (index >= 0) this.childItems.splice(index, 1);
      });
      this.$on('drag-selector-item-change', ({ selected, value }) => {
        console.log("change");
        this.childItems.forEach(element => {
          element._data.clear = true;
        });
        
        const index = this.value.indexOf(value);
        if (selected) {
            this.value.push(value);
        }
        else if (index !== -1) {
            this.value.splice(index, 1);
        }
        this.emitChangeThrottled();
        console.log("selected: " + this.value);
      });
    },
    mClear() {
      console.log(Date.now() + ": drag selector mclear");
      this.childItems.forEach(element => {
        element._data.clear = true;
      });
    }
  },
  watch: {
    clear(newVal, oldVal) {
      console.log(Date.now() + ": clear drag selector");
      if(newVal && !oldVal) {
        this.mClear();
        this.clear = false;
      }
    }
  }
})
Vue.component('drag-selector-s', CustomItem2);


const BaseFormWizard = Vue.options.components["form-wizard"];
const CustomFormWizard = BaseFormWizard.extend({
  
})
Vue.component('form-wizard-c', CustomFormWizard);

import VueModal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
Vue.component('ModalComponent', VueModal)

Vue.config.productionTip = false;

import VideoAnruf from "./Video.vue";

new Vue({
  render: h => h(VideoAnruf)
}).$mount("#video");