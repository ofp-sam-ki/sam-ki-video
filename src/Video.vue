<template>
  <div>
    <div class="wizard-header">
      <h4 class="wizard-title" style="font-size:x-large">SAM-KI-Video</h4>
      <p class="category" style="font-size:14px;color:#9a9a9a;text-align:center">Stand 12.4.2023 (Beta v0.1.2)</p>
    </div>
    <div v-for="Abteilung in Modell.RepertoireAbteilungen" :key="Abteilung" class="block">
      <div id="rectangle">
        <div>
          {{Abteilung}}
        </div><br>
        <drag-selector v-model="Auswahl" class="drag-selector" ref="dragAnsprechpartner">
          <drag-selector-item-c v-for="(item, index) in Modell.RepertoireVerantwortliche[Abteilung]"
                              :value="item"
                              :key="index" class="drag-selector__item">
              {{ item }}
          </drag-selector-item-c>
        </drag-selector>
      </div>
    </div>
    <br>
    <div style="text-align:center" >
      <button class="button taste" v-on:click="ausloesen()">
        Teams-Videoanruf
      </button>
    </div>
    <br>
    
    <div style="text-align:center">
      <button type="button" class="button" @click="showModalEinst=true" style="background-color: #FFFFFF;">
        <img src="./assets/feld_einstellungen3.png" style="height:50px;width:50px;border-radius:50%;box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3)">
      </button>
      <button type="button" class="button" @click="showModalLizenz=true" style="background-color: #FFFFFF;">
        <img src="./assets/feld_info.png" style="height:50px;width:50px;border-radius:50%;box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3)">
      </button>
    </div>
    <div>
    <ModalComponent v-model="showModalEinst" title="Einstellungen" @before-close="einstellungenSpeichern" @before-open="modellSelectedSetzen">
      Montageplatz: <input type="text" id="inputBoxHost" :placeholder='montageplatz' v-model='montageplatz'><br>
      Host für Modelle: <input type="text" id="inputBoxHost" :placeholder='modelhost' v-model='modelhost' @onchange="hostGeaendert"><br>
      Informationsmodell:
      <select v-model="selected" id="modellSelect">
        <option v-for="Modellname in Modelle" :key="Modellname" :value="Modellname">
          {{Modellname}}
        </option>
      </select>
    </ModalComponent>
    </div>
    <ModalComponent v-model="showModalLizenz" title="Informationen und Lizenzen">
Implementierung im Förderprojekt SAM-KI<br>
(c) 2023 Fraunhofer Institut für Produktionstechnik<br>und Automatisierung (FhG IPA)<br><br>
Module und Lizenzen:<br>
@achrinza/node-ipc@9.2.6 [license(s): MIT]<br>
@ampproject/remapping@2.2.0 [license(s): Apache, Apache-2.0]<br>
@babel/code-frame@7.18.6 [license(s): MIT]<br>
@babel/compat-data@7.20.10 [license(s): MIT]<br>
@babel/core@7.20.12 [license(s): MIT]<br>
@babel/eslint-parser@7.19.1 [license(s): MIT]<br>
@babel/generator@7.20.7 [license(s): MIT]<br>
@babel/helper-annotate-as-pure@7.18.6 [license(s): MIT]<br>
@babel/helper-builder-binary-assignment-operator-visitor@7.18.9 [license(s): MIT]<br>
@babel/helper-compilation-targets@7.20.7 [license(s): MIT]<br>
@babel/helper-create-class-features-plugin@7.20.12 [license(s): MIT]<br>
@babel/helper-create-regexp-features-plugin@7.20.5 [license(s): MIT]<br>
@babel/helper-define-polyfill-provider@0.3.3 [license(s): MIT]<br>
@babel/helper-environment-visitor@7.18.9 [license(s): MIT]<br>
@babel/helper-explode-assignable-expression@7.18.6 [license(s): MIT]<br>
@babel/helper-function-name@7.19.0 [license(s): MIT]<br>
@babel/helper-hoist-variables@7.18.6 [license(s): MIT]<br>
@babel/helper-member-expression-to-functions@7.20.7 [license(s): MIT]<br>
@babel/helper-module-imports@7.18.6 [license(s): MIT]<br>
@babel/helper-module-transforms@7.20.11 [license(s): MIT]<br>
@babel/helper-optimise-call-expression@7.18.6 [license(s): MIT]<br>
@babel/helper-plugin-utils@7.20.2 [license(s): MIT]<br>
@babel/helper-remap-async-to-generator@7.18.9 [license(s): MIT]<br>
@babel/helper-replace-supers@7.20.7 [license(s): MIT]<br>
@babel/helper-simple-access@7.20.2 [license(s): MIT]<br>
@babel/helper-skip-transparent-expression-wrappers@7.20.0 [license(s): MIT]<br>
@babel/helper-split-export-declaration@7.18.6 [license(s): MIT]<br>
@babel/helper-string-parser@7.19.4 [license(s): MIT]<br>
@babel/helper-validator-identifier@7.19.1 [license(s): MIT]<br>
@babel/helper-validator-option@7.18.6 [license(s): MIT]<br>
@babel/helper-wrap-function@7.20.5 [license(s): MIT]<br>
@babel/helpers@7.20.7 [license(s): MIT]<br>
@babel/highlight@7.18.6 [license(s): MIT]<br>
@babel/parser@7.20.7 [license(s): MIT]<br>
@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.18.6 [license(s): MIT]<br>
@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-async-generator-functions@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-class-properties@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-class-static-block@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-decorators@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-dynamic-import@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-export-namespace-from@7.18.9 [license(s): MIT]<br>
@babel/plugin-proposal-json-strings@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-logical-assignment-operators@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-nullish-coalescing-operator@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-numeric-separator@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-object-rest-spread@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-optional-catch-binding@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-optional-chaining@7.20.7 [license(s): MIT]<br>
@babel/plugin-proposal-private-methods@7.18.6 [license(s): MIT]<br>
@babel/plugin-proposal-private-property-in-object@7.20.5 [license(s): MIT]<br>
@babel/plugin-proposal-unicode-property-regex@7.18.6 [license(s): MIT]<br>
@babel/plugin-syntax-async-generators@7.8.4 [license(s): MIT]<br>
@babel/plugin-syntax-class-properties@7.12.13 [license(s): MIT]<br>
@babel/plugin-syntax-class-static-block@7.14.5 [license(s): MIT]<br>
@babel/plugin-syntax-decorators@7.19.0 [license(s): MIT]<br>
@babel/plugin-syntax-dynamic-import@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-export-namespace-from@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-import-assertions@7.20.0 [license(s): MIT]<br>
@babel/plugin-syntax-json-strings@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-jsx@7.18.6 [license(s): MIT]<br>
@babel/plugin-syntax-logical-assignment-operators@7.10.4 [license(s): MIT]<br>
@babel/plugin-syntax-nullish-coalescing-operator@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-numeric-separator@7.10.4 [license(s): MIT]<br>
@babel/plugin-syntax-object-rest-spread@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-optional-catch-binding@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-optional-chaining@7.8.3 [license(s): MIT]<br>
@babel/plugin-syntax-private-property-in-object@7.14.5 [license(s): MIT]<br>
@babel/plugin-syntax-top-level-await@7.14.5 [license(s): MIT]<br>
@babel/plugin-transform-arrow-functions@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-async-to-generator@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-block-scoped-functions@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-block-scoping@7.20.11 [license(s): MIT]<br>
@babel/plugin-transform-classes@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-computed-properties@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-destructuring@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-dotall-regex@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-duplicate-keys@7.18.9 [license(s): MIT]<br>
@babel/plugin-transform-exponentiation-operator@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-for-of@7.18.8 [license(s): MIT]<br>
@babel/plugin-transform-function-name@7.18.9 [license(s): MIT]<br>
@babel/plugin-transform-literals@7.18.9 [license(s): MIT]<br>
@babel/plugin-transform-member-expression-literals@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-modules-amd@7.20.11 [license(s): MIT]<br>
@babel/plugin-transform-modules-commonjs@7.20.11 [license(s): MIT]<br>
@babel/plugin-transform-modules-systemjs@7.20.11 [license(s): MIT]<br>
@babel/plugin-transform-modules-umd@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-named-capturing-groups-regex@7.20.5 [license(s): MIT]<br>
@babel/plugin-transform-new-target@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-object-super@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-parameters@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-property-literals@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-regenerator@7.20.5 [license(s): MIT]<br>
@babel/plugin-transform-reserved-words@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-runtime@7.19.6 [license(s): MIT]<br>
@babel/plugin-transform-shorthand-properties@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-spread@7.20.7 [license(s): MIT]<br>
@babel/plugin-transform-sticky-regex@7.18.6 [license(s): MIT]<br>
@babel/plugin-transform-template-literals@7.18.9 [license(s): MIT]<br>
@babel/plugin-transform-typeof-symbol@7.18.9 [license(s): MIT]<br>
@babel/plugin-transform-unicode-escapes@7.18.10 [license(s): MIT]<br>
@babel/plugin-transform-unicode-regex@7.18.6 [license(s): MIT]<br>
@babel/preset-env@7.20.2 [license(s): MIT]<br>
@babel/preset-modules@0.1.5 [license(s): MIT]<br>
@babel/runtime@7.20.7 [license(s): MIT]<br>
@babel/template@7.20.7 [license(s): MIT]<br>
@babel/traverse@7.20.12 [license(s): MIT]<br>
@babel/types@7.20.7 [license(s): MIT]<br>
@capacitor/android@4.6.1 [license(s): MIT]<br>
@capacitor/cli@3.9.0 [license(s): MIT]<br>
@capacitor/cli@4.6.1 [license(s): MIT]<br>
@capacitor/core@3.9.0 [license(s): MIT]<br>
@capacitor/core@4.6.1 [license(s): MIT]<br>
@capacitor/filesystem@4.1.4 [license(s): MIT]<br>
@capacitor/ios@4.6.1 [license(s): MIT]<br>
@capacitor/preferences@4.0.2 [license(s): MIT]<br>
@eslint/eslintrc@1.4.1 [license(s): MIT]<br>
@hapi/hoek@9.3.0 [license(s): BSD-3-Clause]<br>
@hapi/topo@5.1.0 [license(s): BSD-3-Clause]<br>
@humanwhocodes/config-array@0.11.8 [license(s): Apache, Apache-2.0]<br>
@humanwhocodes/module-importer@1.0.1 [license(s): Apache, Apache-2.0]<br>
@humanwhocodes/object-schema@1.2.1 [license(s): BSD, BSD-3-Clause]<br>
@ionic/cli-framework-output@2.2.5 [license(s): MIT]<br>
@ionic/utils-array@2.1.5 [license(s): MIT]<br>
@ionic/utils-fs@3.1.6 [license(s): MIT]<br>
@ionic/utils-object@2.1.5 [license(s): MIT]<br>
@ionic/utils-process@2.1.10 [license(s): MIT]<br>
@ionic/utils-stream@3.1.5 [license(s): MIT]<br>
@ionic/utils-subprocess@2.1.11 [license(s): MIT]<br>
@ionic/utils-terminal@2.3.3 [license(s): MIT]<br>
@jridgewell/gen-mapping@0.1.1 [license(s): MIT]<br>
@jridgewell/gen-mapping@0.3.2 [license(s): MIT]<br>
@jridgewell/resolve-uri@3.1.0 [license(s): MIT]<br>
@jridgewell/set-array@1.1.2 [license(s): MIT]<br>
@jridgewell/source-map@0.3.2 [license(s): MIT]<br>
@jridgewell/sourcemap-codec@1.4.14 [license(s): MIT]<br>
@jridgewell/trace-mapping@0.3.17 [license(s): MIT]<br>
@kouts/vue-modal@2.1.11 [license(s): MIT]<br>
@leichtgewicht/ip-codec@2.0.4 [license(s): MIT]<br>
@nicolo-ribaudo/eslint-scope-5-internals@5.1.1-v1 [license(s): MIT]<br>
@node-ipc/js-queue@2.0.3 [license(s): MIT]<br>
@nodelib/fs.scandir@2.1.5 [license(s): MIT]<br>
@nodelib/fs.stat@2.0.5 [license(s): MIT]<br>
@nodelib/fs.walk@1.2.8 [license(s): MIT]<br>
@polka/url@1.0.0-next.21 [license(s): MIT]<br>
@sideway/address@4.1.4 [license(s): BSD-3-Clause]<br>
@sideway/formula@3.0.1 [license(s): BSD-3-Clause]<br>
@sideway/pinpoint@2.0.0 [license(s): BSD-3-Clause]<br>
@soda/friendly-errors-webpack-plugin@1.8.1 [license(s): MIT]<br>
@soda/get-current-script@1.0.2 [license(s): MIT]<br>
@trysound/sax@0.2.0 [license(s): ISC]<br>
@types/body-parser@1.19.2 [license(s): MIT]<br>
@types/bonjour@3.5.10 [license(s): MIT]<br>
@types/connect@3.4.35 [license(s): MIT]<br>
@types/connect-history-api-fallback@1.3.5 [license(s): MIT]<br>
@types/eslint@8.4.10 [license(s): MIT]<br>
@types/eslint-scope@3.7.4 [license(s): MIT]<br>
@types/estree@0.0.51 [license(s): MIT]<br>
@types/estree@1.0.0 [license(s): MIT]<br>
@types/express@4.17.15 [license(s): MIT]<br>
@types/express-serve-static-core@4.17.32 [license(s): MIT]<br>
@types/fs-extra@8.1.2 [license(s): MIT]<br>
@types/html-minifier-terser@6.1.0 [license(s): MIT]<br>
@types/http-proxy@1.17.9 [license(s): MIT]<br>
@types/json-schema@7.0.11 [license(s): MIT]<br>
@types/mime@3.0.1 [license(s): MIT]<br>
@types/minimist@1.2.2 [license(s): MIT]<br>
@types/node@18.11.18 [license(s): MIT]<br>
@types/normalize-package-data@2.4.1 [license(s): MIT]<br>
@types/parse-json@4.0.0 [license(s): MIT]<br>
@types/qs@6.9.7 [license(s): MIT]<br>
@types/range-parser@1.2.4 [license(s): MIT]<br>
@types/retry@0.12.0 [license(s): MIT]<br>
@types/serve-index@1.9.1 [license(s): MIT]<br>
@types/serve-static@1.15.0 [license(s): MIT]<br>
@types/slice-ansi@4.0.0 [license(s): MIT]<br>
@types/sockjs@0.3.33 [license(s): MIT]<br>
@types/ws@8.5.4 [license(s): MIT]<br>
@vue/babel-helper-vue-jsx-merge-props@1.4.0 [license(s): MIT]<br>
@vue/babel-helper-vue-transform-on@1.0.2 [license(s): MIT]<br>
@vue/babel-plugin-jsx@1.1.1 [license(s): MIT]<br>
@vue/babel-plugin-transform-vue-jsx@1.4.0 [license(s): MIT]<br>
@vue/babel-preset-app@5.0.8 [license(s): MIT]<br>
@vue/babel-preset-jsx@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-composition-api-inject-h@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-composition-api-render-instance@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-functional-vue@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-inject-h@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-v-model@1.4.0 [license(s): MIT]<br>
@vue/babel-sugar-v-on@1.4.0 [license(s): MIT]<br>
@vue/cli-overlay@5.0.8 [license(s): MIT]<br>
@vue/cli-plugin-babel@5.0.8 [license(s): MIT]<br>
@vue/cli-plugin-eslint@5.0.8 [license(s): MIT]<br>
@vue/cli-plugin-router@5.0.8 [license(s): MIT]<br>
@vue/cli-plugin-vuex@5.0.8 [license(s): MIT]<br>
@vue/cli-service@5.0.8 [license(s): MIT]<br>
@vue/cli-shared-utils@5.0.8 [license(s): MIT]<br>
@vue/compiler-sfc@2.7.14 [license(s): MIT]<br>
@vue/component-compiler-utils@3.3.0 [license(s): MIT]<br>
@vue/web-component-wrapper@1.3.0 [license(s): MIT]<br>
@webassemblyjs/ast@1.11.1 [license(s): MIT]<br>
@webassemblyjs/floating-point-hex-parser@1.11.1 [license(s): MIT]<br>
@webassemblyjs/helper-api-error@1.11.1 [license(s): MIT]<br>
@webassemblyjs/helper-buffer@1.11.1 [license(s): MIT]<br>
@webassemblyjs/helper-numbers@1.11.1 [license(s): MIT]<br>
@webassemblyjs/helper-wasm-bytecode@1.11.1 [license(s): MIT]<br>
@webassemblyjs/helper-wasm-section@1.11.1 [license(s): MIT]<br>
@webassemblyjs/ieee754@1.11.1 [license(s): MIT]<br>
@webassemblyjs/leb128@1.11.1 [license(s): Apache, Apache-2.0]<br>
@webassemblyjs/utf8@1.11.1 [license(s): MIT]<br>
@webassemblyjs/wasm-edit@1.11.1 [license(s): MIT]<br>
@webassemblyjs/wasm-gen@1.11.1 [license(s): MIT]<br>
@webassemblyjs/wasm-opt@1.11.1 [license(s): MIT]<br>
@webassemblyjs/wasm-parser@1.11.1 [license(s): MIT]<br>
@webassemblyjs/wast-printer@1.11.1 [license(s): MIT]<br>
@xtuc/ieee754@1.2.0 [license(s): BSD, BSD-3-Clause]<br>
@xtuc/long@4.2.2 [license(s): Apache, Apache-2.0]<br>
accepts@1.0.7 [license(s): MIT]<br>
accepts@1.3.8 [license(s): MIT]<br>
acorn@8.8.1 [license(s): MIT]<br>
acorn-import-assertions@1.8.0 [license(s): MIT]<br>
acorn-jsx@5.3.2 [license(s): MIT]<br>
acorn-walk@8.2.0 [license(s): MIT]<br>
address@1.2.2 [license(s): MIT]<br>
after@0.8.1 [license(s): MIT]<br>
ajv@6.12.6 [license(s): MIT]<br>
ajv@8.12.0 [license(s): MIT]<br>
ajv-formats@2.1.1 [license(s): MIT]<br>
ajv-keywords@3.5.2 [license(s): MIT]<br>
ajv-keywords@5.1.0 [license(s): MIT]<br>
ansi-escapes@3.2.0 [license(s): MIT]<br>
ansi-html-community@0.0.8 [license(s): Apache, Apache-2.0]<br>
ansi-regex@3.0.1 [license(s): MIT]<br>
ansi-regex@5.0.1 [license(s): MIT]<br>
ansi-styles@3.2.1 [license(s): MIT]<br>
ansi-styles@4.3.0 [license(s): MIT]<br>
any-promise@1.3.0 [license(s): MIT]<br>
anymatch@3.1.3 [license(s): ISC]<br>
arch@2.2.0 [license(s): MIT]<br>
argparse@2.0.1 [license(s): GPL, Python-2.0]
array-flatten@1.1.1 [license(s): MIT]<br>
array-flatten@2.1.2 [license(s): MIT]<br>
array-union@2.1.0 [license(s): MIT]<br>
arraybuffer.slice@0.0.6 [license(s): MIT]<br>
assert-plus@1.0.0 [license(s): MIT]<br>
astral-regex@2.0.0 [license(s): MIT]<br>
async@0.2.10 [license(s): MIT]<br>
async@2.6.4 [license(s): MIT]<br>
asynckit@0.4.0 [license(s): MIT]<br>
at-least-node@1.0.0 [license(s): ISC]<br>
autoprefixer@10.4.13 [license(s): MIT]<br>
aws-sign@0.2.0 [license(s): Unknown]<br>
axios@0.27.2 [license(s): MIT]<br>
babel-loader@8.3.0 [license(s): MIT]<br>
babel-plugin-dynamic-import-node@2.3.3 [license(s): MIT]<br>
babel-plugin-polyfill-corejs2@0.3.3 [license(s): MIT]<br>
babel-plugin-polyfill-corejs3@0.6.0 [license(s): MIT]<br>
babel-plugin-polyfill-regenerator@0.4.1 [license(s): MIT]<br>
balanced-match@1.0.2 [license(s): MIT]<br>
base64-arraybuffer@0.1.2 [license(s): MIT]<br>
base64-js@1.5.1 [license(s): MIT]<br>
base64id@0.1.0 [license(s): Unknown]<br>
basic-auth@1.0.0 [license(s): MIT]<br>
batch@0.6.1 [license(s): MIT]<br>
better-assert@1.0.2 [license(s): MIT]<br>
big-integer@1.6.51 [license(s): Unlicense]
big.js@5.2.2 [license(s): MIT]<br>
binary-extensions@2.2.0 [license(s): MIT]<br>
binaryheap@0.0.3 [license(s): Unknown]<br>
bl@4.1.0 [license(s): MIT]<br>
blob@0.0.2 [license(s): Unknown]<br>
bluebird@3.7.2 [license(s): MIT]<br>
body-parser@1.5.0 [license(s): MIT]<br>
body-parser@1.20.1 [license(s): MIT]<br>
bonjour-service@1.1.0 [license(s): MIT]<br>
boolbase@1.0.0 [license(s): ISC]<br>
boom@0.3.1 [license(s): BSD]<br>
bplist-parser@0.3.2 [license(s): MIT]<br>
brace-expansion@1.1.11 [license(s): MIT]<br>
braces@3.0.2 [license(s): MIT]<br>
browserslist@4.21.4 [license(s): MIT]<br>
buffer@5.7.1 [license(s): MIT]<br>
buffer-crc32@0.2.3 [license(s): Unknown]<br>
buffer-from@1.1.2 [license(s): MIT]<br>
buffercursor@0.0.12 [license(s): Unknown]<br>
bytes@1.0.0 [license(s): MIT]<br>
bytes@3.0.0 [license(s): MIT]<br>
bytes@3.1.2 [license(s): MIT]<br>
call-bind@1.0.2 [license(s): MIT]<br>
callsite@1.0.0 [license(s): MIT]<br>
callsites@3.1.0 [license(s): MIT]<br>
camel-case@4.1.2 [license(s): MIT]<br>
camelcase@5.3.1 [license(s): MIT]<br>
camelcase@6.3.0 [license(s): MIT]<br>
caniuse-api@3.0.0 [license(s): MIT]<br>
caniuse-lite@1.0.30001442 [license(s): CC-BY-4.0, Public Domain]<br>
case-sensitive-paths-webpack-plugin@2.4.0 [license(s): MIT]<br>
chalk@2.4.2 [license(s): MIT]<br>
chalk@3.0.0 [license(s): MIT]<br>
chalk@4.1.2 [license(s): MIT]<br>
chokidar@3.5.3 [license(s): MIT]<br>
chownr@2.0.0 [license(s): ISC]<br>
chrome-trace-event@1.0.3 [license(s): MIT]<br>
ci-info@1.6.0 [license(s): MIT]<br>
clean-css@5.3.1 [license(s): MIT]<br>
cli-cursor@2.1.0 [license(s): MIT]<br>
cli-cursor@3.1.0 [license(s): MIT]<br>
cli-highlight@2.1.11 [license(s): ISC]<br>
cli-spinners@2.7.0 [license(s): MIT]<br>
clipboardy@2.3.0 [license(s): MIT]<br>
cliui@7.0.4 [license(s): ISC]<br>
clone@1.0.4 [license(s): MIT]<br>
clone-deep@4.0.1 [license(s): MIT]<br>
color-convert@1.9.3 [license(s): MIT]<br>
color-convert@2.0.1 [license(s): MIT]<br>
color-name@1.1.3 [license(s): MIT]<br>
color-name@1.1.4 [license(s): MIT]<br>
colord@2.9.3 [license(s): MIT]<br>
colorette@2.0.19 [license(s): MIT]<br>
colors@0.6.2 [license(s): Unknown]<br>
combined-stream@0.0.7 [license(s): MIT]<br>
combined-stream@1.0.8 [license(s): MIT]<br>
commander@0.6.1 [license(s): MIT]<br>
commander@2.20.3 [license(s): MIT]<br>
commander@6.2.1 [license(s): MIT]<br>
commander@7.2.0 [license(s): MIT]<br>
commander@8.3.0 [license(s): MIT]<br>
commander@9.5.0 [license(s): MIT]<br>
commondir@1.0.1 [license(s): MIT]<br>
component-bind@1.0.0 [license(s): MIT]<br>
component-emitter@1.1.2 [license(s): MIT]<br>
component-inherit@0.0.3 [license(s): MIT]<br>
compressible@2.0.18 [license(s): MIT]<br>
compression@1.7.4 [license(s): MIT]<br>
concat-map@0.0.1 [license(s): MIT]<br>
connect@3.0.2 [license(s): MIT]<br>
connect-history-api-fallback@2.0.0 [license(s): MIT]<br>
consolidate@0.15.1 [license(s): MIT]<br>
content-disposition@0.5.4 [license(s): MIT]<br>
content-type@1.0.4 [license(s): MIT]<br>
convert-source-map@1.9.0 [license(s): MIT]<br>
cookie@0.1.2 [license(s): MIT]<br>
cookie@0.5.0 [license(s): MIT]<br>
cookie-jar@0.2.0 [license(s): Unknown]<br>
cookie-signature@1.0.4 [license(s): MIT]<br>
cookie-signature@1.0.6 [license(s): MIT]<br>
copy-webpack-plugin@9.1.0 [license(s): MIT]<br>
core-js@3.27.1 [license(s): MIT]<br>
core-js-compat@3.27.1 [license(s): MIT]<br>
core-util-is@1.0.2 [license(s): MIT]<br>
cosmiconfig@7.1.0 [license(s): MIT]<br>
cross-spawn@5.1.0 [license(s): MIT]<br>
cross-spawn@6.0.5 [license(s): MIT]<br>
cross-spawn@7.0.3 [license(s): MIT]<br>
cryptiles@0.1.0 [license(s): BSD]<br>
css-declaration-sorter@6.3.1 [license(s): ISC]<br>
css-loader@6.7.3 [license(s): MIT]<br>
css-minimizer-webpack-plugin@3.4.1 [license(s): MIT]<br>
css-select@4.3.0 [license(s): BSD-2-Clause]<br>
css-tree@1.1.3 [license(s): MIT]<br>
css-what@6.1.0 [license(s): BSD-2-Clause]<br>
cssesc@3.0.0 [license(s): MIT]<br>
cssnano@5.1.14 [license(s): MIT]<br>
cssnano-preset-default@5.2.13 [license(s): MIT]<br>
cssnano-utils@3.1.0 [license(s): MIT]<br>
csso@4.2.0 [license(s): MIT]<br>
csstype@3.1.1 [license(s): MIT]<br>
cycle@1.0.3 [license(s): Unknown]<br>
de-indent@1.0.2 [license(s): MIT]<br>
debug@0.6.0 [license(s): MIT]<br>
debug@0.7.4 [license(s): MIT]<br>
debug@1.0.2 [license(s): MIT]<br>
debug@1.0.3 [license(s): MIT]<br>
debug@2.6.9 [license(s): MIT]<br>
debug@3.2.7 [license(s): MIT]<br>
debug@4.3.4 [license(s): MIT]<br>
deep-is@0.1.4 [license(s): MIT]<br>
deepmerge@1.5.2 [license(s): MIT]<br>
default-gateway@6.0.3 [license(s): BSD, BSD-2-Clause]<br>
defaultable@0.7.2 [license(s): Apache]<br>
defaults@1.0.4 [license(s): MIT]<br>
define-lazy-prop@2.0.0 [license(s): MIT]<br>
define-properties@1.1.4 [license(s): MIT]<br>
delayed-stream@0.0.5 [license(s): MIT]<br>
delayed-stream@1.0.0 [license(s): MIT]<br>
depd@0.3.0 [license(s): MIT]<br>
depd@0.4.2 [license(s): MIT]<br>
depd@1.1.2 [license(s): MIT]<br>
depd@2.0.0 [license(s): MIT]<br>
destroy@1.2.0 [license(s): MIT]<br>
detect-node@2.1.0 [license(s): MIT]<br>
dir-glob@3.0.1 [license(s): MIT]<br>
dns@0.2.2 [license(s): Unknown]<br>
dns-equal@1.0.0 [license(s): MIT]<br>
dns-packet@5.4.0 [license(s): MIT]<br>
doctrine@3.0.0 [license(s): Apache, Apache-2.0]<br>
dom-converter@0.2.0 [license(s): MIT]<br>
dom-serializer@1.4.1 [license(s): MIT]<br>
domelementtype@2.3.0 [license(s): BSD-2-Clause]<br>
domhandler@4.3.1 [license(s): BSD-2-Clause]<br>
domutils@2.8.0 [license(s): BSD-2-Clause]<br>
dot-case@3.0.4 [license(s): MIT]<br>
dotenv@10.0.0 [license(s): BSD-2-Clause]<br>
dotenv-expand@5.1.0 [license(s): BSD-2-Clause]<br>
duplexer@0.1.2 [license(s): MIT]<br>
easy-stack@1.0.1 [license(s): MIT]<br>
ee-first@1.0.3 [license(s): MIT]<br>
ee-first@1.1.1 [license(s): MIT]<br>
electron-to-chromium@1.4.284 [license(s): ISC]<br>
elementtree@0.1.7 [license(s): Apache, Apache-2.0]<br>
emailjs-com@3.2.0 [license(s): MIT]<br>
emitter@1.0.1 [license(s): Unknown]<br>
emoji-regex@8.0.0 [license(s): MIT]<br>
emojis-list@3.0.0 [license(s): MIT]<br>
encodeurl@1.0.2 [license(s): MIT]<br>
end-of-stream@1.4.4 [license(s): MIT]<br>
engine.io@1.3.1 [license(s): MIT]<br>
engine.io-client@1.3.1 [license(s): MIT]<br>
engine.io-parser@1.0.6 [license(s): MIT]<br>
enhanced-resolve@5.12.0 [license(s): MIT]<br>
entities@2.2.0 [license(s): BSD-2-Clause]<br>
env-paths@2.2.1 [license(s): MIT]<br>
error-ex@1.3.2 [license(s): MIT]<br>
error-stack-parser@2.1.4 [license(s): MIT]<br>
errorhandler@1.1.1 [license(s): MIT]<br>
es-module-lexer@0.9.3 [license(s): MIT]<br>
escalade@3.1.1 [license(s): MIT]<br>
escape-html@1.0.1 [license(s): MIT]<br>
escape-html@1.0.3 [license(s): MIT]<br>
escape-string-regexp@1.0.5 [license(s): MIT]<br>
escape-string-regexp@4.0.0 [license(s): MIT]<br>
eslint@8.31.0 [license(s): MIT]<br>
eslint-plugin-vue@9.8.0 [license(s): MIT]<br>
eslint-scope@5.1.1 [license(s): BSD, BSD-2-Clause]<br>
eslint-scope@7.1.1 [license(s): BSD, BSD-2-Clause]<br>
eslint-utils@3.0.0 [license(s): MIT]<br>
eslint-visitor-keys@2.1.0 [license(s): Apache, Apache-2.0]<br>
eslint-visitor-keys@3.3.0 [license(s): Apache, Apache-2.0]<br>
eslint-webpack-plugin@3.2.0 [license(s): MIT]<br>
espree@9.4.1 [license(s): BSD, BSD-2-Clause]<br>
esquery@1.4.0 [license(s): BSD-3-Clause]<br>
esrecurse@4.3.0 [license(s): BSD-2-Clause]<br>
estraverse@4.3.0 [license(s): BSD-2-Clause]<br>
estraverse@5.3.0 [license(s): BSD-2-Clause]<br>
esutils@2.0.3 [license(s): BSD-2-Clause]<br>
etag@1.8.1 [license(s): MIT]<br>
event-pubsub@4.3.0 [license(s): Unlicense]
eventemitter3@4.0.7 [license(s): MIT]<br>
events@3.3.0 [license(s): MIT]<br>
execa@0.8.0 [license(s): MIT]<br>
execa@1.0.0 [license(s): MIT]<br>
execa@5.1.1 [license(s): MIT]<br>
express@4.6.1 [license(s): MIT]<br>
express@4.18.2 [license(s): MIT]<br>
extsprintf@1.4.1 [license(s): MIT]<br>
eyes@0.1.8 [license(s): MIT]<br>
fast-deep-equal@3.1.3 [license(s): MIT]<br>
fast-glob@3.2.12 [license(s): MIT]<br>
fast-json-stable-stringify@2.1.0 [license(s): MIT]<br>
fast-levenshtein@2.0.6 [license(s): MIT]<br>
fastq@1.15.0 [license(s): ISC]<br>
faye-websocket@0.11.4 [license(s): Apache-2.0]<br>
fd-slicer@1.1.0 [license(s): MIT]<br>
figures@2.0.0 [license(s): MIT]<br>
file-entry-cache@6.0.1 [license(s): MIT]<br>
fill-range@7.0.1 [license(s): MIT]<br>
finalhandler@0.0.2 [license(s): MIT]<br>
finalhandler@0.0.3 [license(s): MIT]<br>
finalhandler@1.2.0 [license(s): MIT]<br>
find-cache-dir@3.3.2 [license(s): MIT]<br>
find-up@4.1.0 [license(s): MIT]<br>
find-up@5.0.0 [license(s): MIT]<br>
finished@1.2.2 [license(s): MIT]<br>
flat-cache@3.0.4 [license(s): MIT]<br>
flatted@3.2.7 [license(s): ISC]<br>
follow-redirects@1.15.2 [license(s): MIT]<br>
forever-agent@0.2.0 [license(s): Unknown]<br>
form-data@0.0.10 [license(s): MIT]<br>
form-data@4.0.0 [license(s): MIT]<br>
forwarded@0.2.0 [license(s): MIT]<br>
fraction.js@4.2.0 [license(s): GPL, MIT]<br>
fresh@0.2.2 [license(s): MIT]<br>
fresh@0.5.2 [license(s): MIT]<br>
fs-extra@9.1.0 [license(s): MIT]<br>
fs-minipass@2.1.0 [license(s): ISC]<br>
fs-monkey@1.0.3 [license(s): Unlicense]
fs.realpath@1.0.0 [license(s): ISC, MIT]<br>
fsevents@2.3.2 [license(s): MIT]<br>
function-bind@1.1.1 [license(s): MIT]<br>
gensync@1.0.0-beta.2 [license(s): MIT]<br>
get-caller-file@2.0.5 [license(s): ISC]<br>
get-intrinsic@1.1.3 [license(s): MIT]<br>
get-stream@3.0.0 [license(s): MIT]<br>
get-stream@4.1.0 [license(s): MIT]<br>
get-stream@6.0.1 [license(s): MIT]<br>
glob@7.2.3 [license(s): ISC]<br>
glob-parent@5.1.2 [license(s): ISC]<br>
glob-parent@6.0.2 [license(s): ISC]<br>
glob-to-regexp@0.4.1 [license(s): BSD-2-Clause]<br>
global@2.0.1 [license(s): MIT]<br>
globals@11.12.0 [license(s): MIT]<br>
globals@13.19.0 [license(s): MIT]<br>
globby@11.1.0 [license(s): MIT]<br>
graceful-fs@4.2.10 [license(s): ISC]<br>
grapheme-splitter@1.0.4 [license(s): MIT]<br>
gzip-size@6.0.0 [license(s): MIT]<br>
handle-thing@2.0.1 [license(s): MIT]<br>
has@1.0.3 [license(s): MIT]<br>
has-binary-data@0.1.1 [license(s): ISC, MIT]<br>
has-cors@1.0.3 [license(s): MIT]<br>
has-flag@3.0.0 [license(s): MIT]<br>
has-flag@4.0.0 [license(s): MIT]<br>
has-property-descriptors@1.0.0 [license(s): MIT]<br>
has-symbols@1.0.3 [license(s): MIT]<br>
hash-sum@1.0.2 [license(s): MIT]<br>
hash-sum@2.0.0 [license(s): MIT]<br>
hawk@0.10.2 [license(s): BSD]<br>
hbo-dnsd@0.9.8 [license(s): Apache]<br>
he@1.2.0 [license(s): MIT]<br>
highlight.js@10.7.3 [license(s): BSD, BSD-3-Clause]<br>
hoek@0.4.2 [license(s): BSD]<br>
hoek@0.7.6 [license(s): BSD]<br>
hosted-git-info@2.8.9 [license(s): ISC]<br>
hpack.js@2.1.6 [license(s): MIT]<br>
html-entities@2.3.3 [license(s): MIT]<br>
html-minifier-terser@6.1.0 [license(s): MIT]<br>
html-tags@2.0.0 [license(s): MIT]<br>
html-tags@3.2.0 [license(s): MIT]<br>
html-webpack-plugin@5.5.0 [license(s): MIT]<br>
htmlparser2@6.1.0 [license(s): MIT]<br>
http-deceiver@1.2.7 [license(s): MIT]<br>
http-errors@1.6.3 [license(s): MIT]<br>
http-errors@2.0.0 [license(s): MIT]<br>
http-parser-js@0.5.8 [license(s): MIT]<br>
http-proxy@1.18.1 [license(s): MIT]<br>
http-proxy-middleware@2.0.6 [license(s): MIT]<br>
human-signals@2.1.0 [license(s): Apache, Apache-2.0]<br>
iconv-lite@0.4.4 [license(s): MIT]<br>
iconv-lite@0.4.24 [license(s): MIT]<br>
icss-utils@5.1.0 [license(s): ISC]<br>
ieee754@1.2.1 [license(s): BSD, BSD-3-Clause]<br>
ignore@5.2.4 [license(s): MIT]<br>
import-fresh@3.3.0 [license(s): MIT]<br>
imurmurhash@0.1.4 [license(s): MIT]<br>
indexof@0.0.1 [license(s): MIT]<br>
inflight@1.0.6 [license(s): ISC]<br>
inherits@2.0.3 [license(s): ISC]<br>
inherits@2.0.4 [license(s): ISC]<br>
ini@3.0.1 [license(s): ISC]<br>
ipaddr.js@0.1.2 [license(s): Unknown]<br>
ipaddr.js@1.9.1 [license(s): MIT]<br>
ipaddr.js@2.0.1 [license(s): MIT]<br>
is-arrayish@0.2.1 [license(s): MIT]<br>
is-binary-path@2.1.0 [license(s): MIT]<br>
is-ci@1.2.1 [license(s): MIT]<br>
is-core-module@2.11.0 [license(s): MIT]<br>
is-docker@2.2.1 [license(s): MIT]<br>
is-extglob@2.1.1 [license(s): MIT]<br>
is-file-esm@1.0.0 [license(s): MIT]<br>
is-fullwidth-code-point@2.0.0 [license(s): MIT]<br>
is-fullwidth-code-point@3.0.0 [license(s): MIT]<br>
is-glob@4.0.3 [license(s): MIT]<br>
is-interactive@1.0.0 [license(s): MIT]<br>
is-number@7.0.0 [license(s): MIT]<br>
is-path-inside@3.0.3 [license(s): MIT]<br>
is-plain-obj@3.0.0 [license(s): MIT]<br>
is-plain-object@2.0.4 [license(s): MIT]<br>
is-stream@1.1.0 [license(s): MIT]<br>
is-stream@2.0.1 [license(s): MIT]<br>
is-unicode-supported@0.1.0 [license(s): MIT]<br>
is-wsl@2.2.0 [license(s): MIT]<br>
isarray@0.0.1 [license(s): MIT]<br>
isarray@1.0.0 [license(s): MIT]<br>
isexe@2.0.0 [license(s): ISC]<br>
isobject@3.0.1 [license(s): MIT]<br>
javascript-stringify@2.1.0 [license(s): MIT]<br>
jest-worker@27.5.1 [license(s): MIT]<br>
jest-worker@28.1.3 [license(s): MIT]<br>
joi@17.7.0 [license(s): BSD-3-Clause]<br>
js-message@1.0.7 [license(s): MIT]<br>
js-sdsl@4.2.0 [license(s): MIT]<br>
js-tokens@4.0.0 [license(s): MIT]<br>
js-yaml@4.1.0 [license(s): MIT]<br>
jsesc@0.5.0 [license(s): MIT]<br>
jsesc@2.5.2 [license(s): MIT]<br>
json-parse-better-errors@1.0.2 [license(s): MIT]<br>
json-parse-even-better-errors@2.3.1 [license(s): MIT]<br>
json-schema-traverse@0.4.1 [license(s): MIT]<br>
json-schema-traverse@1.0.0 [license(s): MIT]<br>
json-stable-stringify-without-jsonify@1.0.1 [license(s): MIT]<br>
json-stringify-safe@3.0.0 [license(s): BSD]<br>
json3@3.2.6 [license(s): MIT]<br>
json5@1.0.2 [license(s): MIT]<br>
json5@2.2.3 [license(s): MIT]<br>
jsonfile@6.1.0 [license(s): MIT]<br>
kind-of@6.0.3 [license(s): MIT]<br>
kleur@3.0.3 [license(s): MIT]<br>
kleur@4.1.5 [license(s): MIT]<br>
klona@2.0.5 [license(s): MIT]<br>
launch-editor@2.6.0 [license(s): MIT]<br>
launch-editor-middleware@2.6.0 [license(s): MIT]<br>
levn@0.4.1 [license(s): MIT]<br>
lilconfig@2.0.6 [license(s): MIT]<br>
lines-and-columns@1.2.4 [license(s): MIT]<br>
loader-runner@4.3.0 [license(s): MIT]<br>
loader-utils@1.4.2 [license(s): MIT]<br>
loader-utils@2.0.4 [license(s): MIT]<br>
locate-path@5.0.0 [license(s): MIT]<br>
locate-path@6.0.0 [license(s): MIT]<br>
lodash@4.17.21 [license(s): MIT]<br>
lodash.debounce@4.0.8 [license(s): MIT]<br>
lodash.defaultsdeep@4.6.1 [license(s): MIT]<br>
lodash.kebabcase@4.1.1 [license(s): MIT]<br>
lodash.mapvalues@4.6.0 [license(s): MIT]<br>
lodash.memoize@4.1.2 [license(s): MIT]<br>
lodash.merge@4.6.2 [license(s): MIT]<br>
lodash.uniq@4.5.0 [license(s): MIT]<br>
log-symbols@4.1.0 [license(s): MIT]<br>
log-update@2.3.0 [license(s): MIT]<br>
lower-case@2.0.2 [license(s): MIT]<br>
lru-cache@4.1.5 [license(s): ISC]<br>
lru-cache@5.1.1 [license(s): ISC]<br>
lru-cache@6.0.0 [license(s): ISC]<br>
make-dir@3.1.0 [license(s): MIT]<br>
mdn-data@2.0.14 [license(s): CC0-1.0]<br>
media-typer@0.2.0 [license(s): MIT]<br>
media-typer@0.3.0 [license(s): MIT]<br>
memfs@3.4.13 [license(s): Unlicense]
merge-descriptors@0.0.2 [license(s): MIT]<br>
merge-descriptors@1.0.1 [license(s): MIT]<br>
merge-source-map@1.1.0 [license(s): MIT]<br>
merge-stream@2.0.0 [license(s): MIT]<br>
merge2@1.4.1 [license(s): MIT]<br>
methods@1.1.0 [license(s): MIT]<br>
methods@1.1.2 [license(s): MIT]<br>
micromatch@4.0.5 [license(s): MIT]<br>
mime@1.2.11 [license(s): Unknown]<br>
mime@1.6.0 [license(s): MIT]<br>
mime-db@1.52.0 [license(s): MIT]<br>
mime-types@1.0.2 [license(s): MIT]<br>
mime-types@2.1.35 [license(s): MIT]<br>
mimic-fn@1.2.0 [license(s): MIT]<br>
mimic-fn@2.1.0[license(s): MIT]<br>
mini-css-extract-plugin@2.7.2 [license(s): MIT]<br>
minimalistic-assert@1.0.1 [license(s): ISC]<br>
minimatch@3.1.2 [license(s): ISC]<br>
minimist@1.2.7 [license(s): MIT]<br>
minipass@3.3.6 [license(s): ISC]<br>
minipass@4.0.0 [license(s): ISC]<br>
minizlib@2.1.2 [license(s): MIT]<br>
mkdirp@0.5.6 [license(s): MIT]<br>
mkdirp@1.0.4 [license(s): MIT]<br>
module-alias@2.2.2 [license(s): MIT]<br>
morgan@1.2.0 [license(s): MIT]<br>
mrmime@1.0.1 [license(s): MIT]<br>
ms@0.6.2 [license(s): MIT]<br>
ms@2.0.0 [license(s): MIT]<br>
ms@2.1.2 [license(s): MIT]<br>
ms@2.1.3 [license(s): MIT]<br>
multicast-dns@7.2.5 [license(s): MIT]<br>
mz@2.7.0 [license(s): MIT]<br>
nan@0.3.2 [license(s): MIT]<br>
nanoid@3.3.4 [license(s): MIT]<br>
native-dns@0.6.1 [license(s): Unknown]<br>
native-dns-cache@0.0.2 [license(s): Unknown]<br>
native-dns-packet@0.1.1 [license(s): MIT]<br>
native-run@1.7.1 [license(s): MIT]<br>
natural-compare@1.4.0 [license(s): MIT]<br>
negotiator@0.4.7 [license(s): MIT]<br>
negotiator@0.6.3 [license(s): MIT]<br>
neo-async@2.6.2 [license(s): MIT]<br>
nice-try@1.0.5 [license(s): MIT]<br>
no-case@3.0.4 [license(s): MIT]<br>
node-fetch@2.6.7 [license(s): MIT]<br>
node-forge@1.3.1 [license(s): (BSD-3-Clause OR GPL-2.0), BSD, GPL]<br>
node-options@0.0.6 [license(s): Apache]<br>
node-releases@2.0.8 [license(s): MIT]<br>
node-uuid@1.4.8 [license(s): MIT]<br>
nodemailer@6.8.0 [license(s): MIT]<br>
normalize-package-data@2.5.0 [license(s): BSD, BSD-2-Clause]<br>
normalize-path@1.0.0 [license(s): MIT]<br>
normalize-path@3.0.0 [license(s): MIT]<br>
normalize-range@0.1.2 [license(s): MIT]<br>
normalize-url@6.1.0 [license(s): MIT]<br>
npm-run-path@2.0.2 [license(s): MIT]<br>
npm-run-path@4.0.1 [license(s): MIT]<br>
nth-check@2.1.1 [license(s): BSD-2-Clause]<br>
oauth-sign@0.2.0 [license(s): Unknown]<br>
object-assign@4.1.1 [license(s): MIT]<br>
object-component@0.0.3 [license(s): MIT]<br>
object-inspect@1.12.2 [license(s): MIT]<br>
object-keys@1.1.1 [license(s): MIT]<br>
object.assign@4.1.4 [license(s): MIT]<br>
obuf@1.1.2 [license(s): MIT]<br>
on-finished@2.4.1 [license(s): MIT]<br>
on-headers@1.0.2 [license(s): MIT]<br>
once@1.4.0 [license(s): ISC]<br>
onetime@2.0.1 [license(s): MIT]<br>
onetime@5.1.2 [license(s): MIT]<br>
open@7.4.2 [license(s): MIT]<br>
open@8.4.0 [license(s): MIT]<br>
opener@1.5.2 [license(s): (WTFPL OR MIT), MIT, WTFPL]
optimist@0.3.7 [license(s): MIT/X11]
optionator@0.9.1 [license(s): MIT]<br>
options@0.0.6 [license(s): MIT]<br>
ora@5.4.1 [license(s): MIT]<br>
p-finally@1.0.0 [license(s): MIT]<br>
p-limit@2.3.0 [license(s): MIT]<br>
p-limit@3.1.0 [license(s): MIT]<br>
p-locate@4.1.0 [license(s): MIT]<br>
p-locate@5.0.0 [license(s): MIT]<br>
p-retry@4.6.2 [license(s): MIT]<br>
p-try@2.2.0 [license(s): MIT]<br>
param-case@3.0.4 [license(s): MIT]<br>
parent-module@1.0.1 [license(s): MIT]<br>
parse-json@5.2.0 [license(s): MIT]<br>
parse5@5.1.1 [license(s): MIT]<br>
parse5@6.0.1 [license(s): MIT]<br>
parse5-htmlparser2-tree-adapter@6.0.1 [license(s): MIT]<br>
parsejson@0.0.1 [license(s): MIT]<br>
parseqs@0.0.2 [license(s): MIT]<br>
parseuri@0.0.2 [license(s): MIT]<br>
parseurl@1.1.3 [license(s): MIT]<br>
parseurl@1.3.3 [license(s): MIT]<br>
pascal-case@3.1.2 [license(s): MIT]<br>
path-exists@4.0.0 [license(s): MIT]<br>
path-is-absolute@1.0.1 [license(s): MIT]<br>
path-key@2.0.1 [license(s): MIT]<br>
path-key@3.1.1 [license(s): MIT]<br>
path-parse@1.0.7 [license(s): MIT]<br>
path-to-regexp@0.1.3 [license(s): MIT]<br>
path-to-regexp@0.1.7 [license(s): MIT]<br>
path-type@4.0.0 [license(s): MIT]<br>
pend@1.2.0 [license(s): MIT]<br>
picocolors@0.2.1 [license(s): ISC]<br>
picocolors@1.0.0 [license(s): ISC]<br>
picomatch@2.3.1 [license(s): MIT]<br>
pkg-dir@4.2.0 [license(s): MIT]<br>
pkginfo@0.3.1 [license(s): MIT]<br>
plist@3.0.6 [license(s): MIT]<br>
portfinder@1.0.32 [license(s): MIT]<br>
postcss@7.0.39 [license(s): MIT]<br>
postcss@8.4.21 [license(s): MIT]<br>
postcss-calc@8.2.4 [license(s): MIT]<br>
postcss-colormin@5.3.0 [license(s): MIT]<br>
postcss-convert-values@5.1.3 [license(s): MIT]<br>
postcss-discard-comments@5.1.2 [license(s): MIT]<br>
postcss-discard-duplicates@5.1.0 [license(s): MIT]<br>
postcss-discard-empty@5.1.1 [license(s): MIT]<br>
postcss-discard-overridden@5.1.0 [license(s): MIT]<br>
postcss-loader@6.2.1 [license(s): MIT]<br>
postcss-merge-longhand@5.1.7 [license(s): MIT]<br>
postcss-merge-rules@5.1.3 [license(s): MIT]<br>
postcss-minify-font-values@5.1.0 [license(s): MIT]<br>
postcss-minify-gradients@5.1.1 [license(s): MIT]<br>
postcss-minify-params@5.1.4 [license(s): MIT]<br>
postcss-minify-selectors@5.2.1 [license(s): MIT]<br>
postcss-modules-extract-imports@3.0.0 [license(s): ISC]<br>
postcss-modules-local-by-default@4.0.0 [license(s): MIT]<br>
postcss-modules-scope@3.0.0 [license(s): ISC]<br>
postcss-modules-values@4.0.0 [license(s): ISC]<br>
postcss-normalize-charset@5.1.0 [license(s): MIT]<br>
postcss-normalize-display-values@5.1.0 [license(s): MIT]<br>
postcss-normalize-positions@5.1.1 [license(s): MIT]<br>
postcss-normalize-repeat-style@5.1.1 [license(s): MIT]<br>
postcss-normalize-string@5.1.0 [license(s): MIT]<br>
postcss-normalize-timing-functions@5.1.0 [license(s): MIT]<br>
postcss-normalize-unicode@5.1.1 [license(s): MIT]<br>
postcss-normalize-url@5.1.0 [license(s): MIT]<br>
postcss-normalize-whitespace@5.1.1 [license(s): MIT]<br>
postcss-ordered-values@5.1.3 [license(s): MIT]<br>
postcss-reduce-initial@5.1.1 [license(s): MIT, Public Domain]<br>
postcss-reduce-transforms@5.1.0 [license(s): MIT]<br>
postcss-selector-parser@6.0.11 [license(s): MIT]<br>
postcss-svgo@5.1.0 [license(s): MIT]<br>
postcss-unique-selectors@5.1.1 [license(s): MIT]<br>
postcss-value-parser@4.2.0 [license(s): MIT]<br>
prelude-ls@1.2.1 [license(s): MIT]<br>
prettier@2.8.2 [license(s): Apache, BSD, ISC, MIT]<br>
pretty-error@4.0.0 [license(s): MIT]<br>
process-nextick-args@2.0.1 [license(s): MIT]<br>
progress-webpack-plugin@1.0.16 [license(s): MIT]<br>
prompts@2.4.2 [license(s): MIT]<br>
proxy-addr@1.0.1 [license(s): MIT]<br>
proxy-addr@2.0.7 [license(s): MIT]<br>
pseudomap@1.0.2 [license(s): ISC]<br>
pump@3.0.0 [license(s): MIT]<br>
punycode@2.2.0 [license(s): MIT]<br>
qs@0.5.6 [license(s): MIT]<br>
qs@0.6.6 [license(s): MIT]<br>
qs@6.11.0 [license(s): BSD, BSD-3-Clause]<br>
queue-microtask@1.2.3 [license(s): MIT]<br>
randombytes@2.1.0 [license(s): MIT]<br>
range-parser@1.0.0 [license(s): MIT]<br>
range-parser@1.2.1 [license(s): MIT]<br>
raw-body@1.3.0 [license(s): MIT]<br>
raw-body@2.5.1 [license(s): MIT]<br>
read-pkg@5.2.0 [license(s): MIT]<br>
read-pkg-up@7.0.1 [license(s): MIT]<br>
readable-stream@2.3.7 [license(s): MIT]<br>
readable-stream@3.6.0 [license(s): MIT]<br>
readdirp@3.6.0 [license(s): MIT]<br>
regenerate@1.4.2 [license(s): MIT]<br>
regenerate-unicode-properties@10.1.0 [license(s): MIT]<br>
regenerator-runtime@0.13.11 [license(s): MIT]<br>
regenerator-transform@0.15.1 [license(s): MIT]<br>
regexpp@3.2.0 [license(s): MIT]<br>
regexpu-core@5.2.2 [license(s): MIT]<br>
regjsgen@0.7.1 [license(s): MIT]<br>
regjsparser@0.9.1 [license(s): BSD-2-Clause]<br>
relateurl@0.2.7 [license(s): MIT]<br>
renderkid@3.0.0 [license(s): MIT]<br>
request@2.16.6 [license(s): Apache]<br>
require-directory@2.1.1 [license(s): MIT]<br>
require-from-string@2.0.2 [license(s): MIT]<br>
requires-port@1.0.0 [license(s): MIT]<br>
resolve@1.22.1 [license(s): MIT]<br>
resolve-from@4.0.0 [license(s): MIT]<br>
restore-cursor@2.0.0 [license(s): MIT]<br>
restore-cursor@3.1.0 [license(s): MIT]<br>
retry@0.13.1 [license(s): MIT]<br>
reusify@1.0.4 [license(s): MIT]<br>
rimraf@3.0.2 [license(s): ISC]<br>
run-parallel@1.2.0 [license(s): MIT]<br>
safe-buffer@5.1.2 [license(s): MIT]<br>
safe-buffer@5.2.1 [license(s): MIT]<br>
safer-buffer@2.1.2 [license(s): MIT]<br>
samki-videoanruf@0.1.0 [license(s): Unknown]<br>
sax@1.1.4 [license(s): GPL, ISC, MIT]<br>
schema-utils@2.7.1 [license(s): MIT]<br>
schema-utils@3.1.1 [license(s): MIT]<br>
schema-utils@4.0.0 [license(s): MIT]<br>
select-hose@2.0.0 [license(s): MIT]<br>
selfsigned@2.1.1 [license(s): MIT]<br>
semver@5.7.1 [license(s): ISC]<br>
semver@6.3.0 [license(s): ISC]<br>
semver@7.3.8 [license(s): ISC]<br>
send@0.6.0 [license(s): MIT]<br>
send@0.18.0 [license(s): MIT]<br>
send-intent@3.0.12 [license(s): MIT]<br>
serialize-javascript@6.0.0 [license(s): BSD, BSD-3-Clause]<br>
serve-index@1.9.1 [license(s): MIT]<br>
serve-static@1.3.2 [license(s): MIT]<br>
serve-static@1.15.0 [license(s): MIT]<br>
setprototypeof@1.1.0 [license(s): ISC]<br>
setprototypeof@1.2.0 [license(s): ISC]<br>
shallow-clone@3.0.1 [license(s): MIT]<br>
shebang-command@1.2.0 [license(s): MIT]<br>
shebang-command@2.0.0 [license(s): MIT]<br>
shebang-regex@1.0.0 [license(s): MIT]<br>
shebang-regex@3.0.0 [license(s): MIT]<br>
shell-quote@1.7.4 [license(s): MIT]<br>
side-channel@1.0.4 [license(s): MIT]<br>
signal-exit@3.0.7 [license(s): ISC]<br>
sirv@1.0.19 [license(s): MIT]<br>
sisteransi@1.0.5 [license(s): MIT]<br>
slash@3.0.0 [license(s): MIT]<br>
slice-ansi@4.0.0 [license(s): MIT]<br>
sntp@0.1.2 [license(s): BSD]<br>
socket.io@1.0.6 [license(s): MIT]<br>
socket.io-adapter@0.2.0 [license(s): MIT]<br>
socket.io-client@1.0.6 [license(s): MIT]<br>
socket.io-parser@2.1.2 [license(s): Unknown]<br>
socket.io-parser@2.2.0 [license(s): Unknown]<br>
sockjs@0.3.24 [license(s): MIT]<br>
source-map@0.6.1 [license(s): BSD-3-Clause]<br>
source-map-js@1.0.2 [license(s): BSD-3-Clause]<br>
source-map-support@0.5.21 [license(s): MIT]<br>
spdx-correct@3.1.1 [license(s): Apache, Apache-2.0]<br>
spdx-exceptions@2.3.0 [license(s): CC-BY-3.0]<br>
spdx-expression-parse@3.0.1 [license(s): BSD, GPL, LGPL, MIT]<br>
spdx-license-ids@3.0.12 [license(s): CC0-1.0]<br>
spdy@4.0.2 [license(s): MIT]<br>
spdy-transport@3.0.0 [license(s): MIT]<br>
split2@4.1.0 [license(s): ISC]<br>
ssri@8.0.1 [license(s): ISC]<br>
stable@0.1.8 [license(s): MIT]<br>
stack-trace@0.0.10 [license(s): MIT]<br>
stackframe@1.3.4 [license(s): MIT]<br>
statuses@1.5.0 [license(s): MIT]<br>
statuses@2.0.1 [license(s): MIT]<br>
string-width@2.1.1 [license(s): MIT]<br>
string-width@4.2.3 [license(s): MIT]<br>
string_decoder@1.1.1 [license(s): MIT]<br>
string_decoder@1.3.0 [license(s): MIT]<br>
strip-ansi@4.0.0 [license(s): MIT]<br>
strip-ansi@6.0.1 [license(s): MIT]<br>
strip-eof@1.0.0 [license(s): MIT]<br>
strip-final-newline@2.0.0 [license(s): MIT]<br>
strip-indent@2.0.0 [license(s): MIT]<br>
strip-json-comments@3.1.1 [license(s): MIT]<br>
stylehacks@5.1.1 [license(s): MIT]<br>
supports-color@5.5.0 [license(s): MIT]<br>
supports-color@7.2.0 [license(s): MIT]<br>
supports-color@8.1.1 [license(s): MIT]<br>
supports-preserve-symlinks-flag@1.0.0 [license(s): MIT]<br>
svg-tags@1.0.0 [license(s): MIT]<br>
svgo@2.8.0 [license(s): MIT]<br>
tapable@2.2.1 [license(s): MIT]<br>
tar@6.1.13 [license(s): ISC]<br>
terser@5.16.1 [license(s): BSD, BSD-2-Clause]<br>
terser-webpack-plugin@5.3.6 [license(s): MIT]<br>
text-table@0.2.0 [license(s): MIT]<br>
thenify@3.3.1 [license(s): MIT]<br>
thenify-all@1.6.0 [license(s): MIT]<br>
thread-loader@3.0.4 [license(s): MIT]<br>
through2@4.0.2 [license(s): MIT]<br>
thunky@1.1.0 [license(s): MIT]<br>
tinycolor@0.0.1 [license(s): Unknown]<br>
to-array@0.1.3 [license(s): MIT]<br>
to-fast-properties@2.0.0 [license(s): MIT]<br>
to-regex-range@5.0.1 [license(s): MIT]<br>
toidentifier@1.0.1 [license(s): MIT]<br>
tomahawk@0.1.6 [license(s): Unknown]<br>
tomahawk-plugin-kv-memory-store@0.0.3 [license(s): Unknown]<br>
totalist@1.1.0 [license(s): MIT]<br>
tr46@0.0.3 [license(s): MIT]<br>
tree-kill@1.2.2 [license(s): MIT]<br>
tslib@2.4.1 [license(s): 0BSD]<br>
tunnel-agent@0.2.0 [license(s): Unknown]<br>
type-check@0.4.0 [license(s): MIT]<br>
type-fest@0.6.0 [license(s): (MIT OR CC0-1.0), MIT]<br>
type-fest@0.8.1 [license(s): (MIT OR CC0-1.0), MIT]<br>
type-fest@0.20.2 [license(s): (MIT OR CC0-1.0), MIT]<br>
type-is@1.3.2 [license(s): MIT]<br>
type-is@1.6.18 [license(s): MIT]<br>
unicode-canonical-property-names-ecmascript@2.0.0 [license(s): MIT]<br>
unicode-match-property-ecmascript@2.0.0 [license(s): MIT]<br>
unicode-match-property-value-ecmascript@2.1.0 [license(s): MIT]<br>
unicode-property-aliases-ecmascript@2.1.0 [license(s): MIT]<br>
universalify@2.0.0 [license(s): MIT]<br>
unpipe@1.0.0 [license(s): MIT]<br>
untildify@4.0.0 [license(s): MIT]<br>
update-browserslist-db@1.0.10 [license(s): MIT]<br>
uri-js@4.4.1 [license(s): BSD-2-Clause]<br>
utf8@2.0.0 [license(s): GPL, MIT, MIT/GPL]<br>
util-deprecate@1.0.2 [license(s): MIT]<br>
utila@0.4.0 [license(s): MIT]<br>
utils-merge@1.0.0 [license(s): MIT]<br>
utils-merge@1.0.1 [license(s): MIT]<br>
uuid@8.3.2 [license(s): MIT]<br>
validate-npm-package-license@3.0.4 [license(s): Apache, Apache-2.0]<br>
vary@0.1.0 [license(s): MIT]<br>
vary@1.1.2 [license(s): MIT]<br>
verror@1.10.1 [license(s): MIT]<br>
vue@2.7.14 [license(s): MIT]<br>
vue-drag-selector@0.1.3 [license(s): MIT]<br>
vue-eslint-parser@9.1.0 [license(s): MIT]<br>
vue-form-wizard@0.8.4 [license(s): MIT]<br>
vue-hot-reload-api@2.3.4 [license(s): MIT]<br>
vue-loader@17.0.1 [license(s): MIT]<br>
vue-spinner@1.0.4 [license(s): MIT]<br>
vue-style-loader@4.1.3 [license(s): MIT]<br>
vue-template-compiler@2.7.14 [license(s): MIT]<br>
vue-template-es2015-compiler@1.9.1 [license(s): MIT]<br>
watchpack@2.4.0 [license(s): MIT]<br>
wbuf@1.7.3 [license(s): MIT]<br>
wcwidth@1.0.1 [license(s): MIT]<br>
webidl-conversions@3.0.1 [license(s): BSD, BSD-2-Clause]<br>
webpack@5.75.0 [license(s): MIT]<br>
webpack-bundle-analyzer@4.7.0 [license(s): MIT]<br>
webpack-chain@6.5.1 [license(s): MPL, MPL-2.0]<br>
webpack-dev-middleware@5.3.3 [license(s): MIT]<br>
webpack-dev-server@4.11.1 [license(s): MIT]<br>
webpack-merge@5.8.0 [license(s): MIT]<br>
webpack-sources@3.2.3 [license(s): MIT]<br>
webpack-virtual-modules@0.4.6 [license(s): MIT]<br>
websocket-driver@0.7.4 [license(s): Apache-2.0]<br>
websocket-extensions@0.1.4 [license(s): Apache-2.0]<br>
whatwg-fetch@3.6.2 [license(s): MIT]<br>
whatwg-url@5.0.0 [license(s): MIT]<br>
which@1.3.1 [license(s): BSD, ISC]<br>
which@2.0.2 [license(s): BSD, ISC]<br>
wildcard@2.0.0 [license(s): MIT]<br>
winston@0.7.3 [license(s): MIT]<br>
word-wrap@1.2.3 [license(s): MIT]<br>
wordwrap@0.0.3 [license(s): MIT]<br>
wrap-ansi@3.0.1 [license(s): MIT]<br>
wrap-ansi@7.0.0 [license(s): MIT]<br>
wrappy@1.0.2 [license(s): ISC]<br>
ws@0.4.31 [license(s): MIT]<br>
ws@7.5.9 [license(s): MIT]<br>
ws@8.12.0 [license(s): MIT]<br>
xml-name-validator@4.0.0 [license(s): Apache, Apache-2.0]<br>
xml2js@0.4.23 [license(s): MIT]<br>
xmlbuilder@11.0.1 [license(s): MIT]<br>
xmlbuilder@15.1.1 [license(s): MIT]<br>
xmlhttprequest@1.5.0 [license(s): MIT]<br>
y18n@5.0.8 [license(s): ISC]<br>
yallist@2.1.2 [license(s): ISC]<br>
yallist@3.1.1 [license(s): ISC]<br>
yallist@4.0.0 [license(s): ISC]<br>
yaml@1.10.2 [license(s): ISC]<br>
yargs@16.2.0 [license(s): MIT]<br>
yargs-parser@20.2.9 [license(s): ISC]<br>
yauzl@2.10.0 [license(s): MIT]<br>
yocto-queue@0.1.0 [license(s): MIT]<br>
yorkie@2.0.0 [license(s): MIT]<br>
<br>
BSD-3-Clause:<br>
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.<br>
<br>
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br>
<br>
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.<br>
<br>
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br>
<br>
GPL-2.0:<br>
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.<br>
<br>
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.<br>
<br>
You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.<br>
<br>
MIT, X11:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>
<br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
<br>
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>
<br>
CC0-1.0:<br>
See https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt<br>
<br>
WTFPL:<br>
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE<br>
Version 2, December 2004<br>
<br>
Copyright (C) 2004 Sam Hocevar<br>
14 rue de Plaisance, 75014 Paris, France<br>
Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.<br>
<br>
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE<br>
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION<br>
<br>
0. You just DO WHAT THE FUCK YOU WANT TO.<br>
<br>
0BSD:<br>
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.<br>
<br>
THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.<br>
<br>
Apache:<br>
====================================================================<br>
Copyright (c) 1995-1999 The Apache Group.  All rights reserved.<br>
<br>
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br>
<br>
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. <br>
<br>
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br>
<br>
3. All advertising materials mentioning features or use of this software must display the following acknowledgment: "This product includes software developed by the Apache Group for use in the Apache HTTP server project (http://www.apache.org/)."<br>
<br>
4. The names "Apache Server" and "Apache Group" must not be used to endorse or promote products derived from this software without prior written permission. For written permission, please contact apache@apache.org.<br>
<br>
5. Products derived from this software may not be called "Apache" nor may "Apache" appear in their names without prior written permission of the Apache Group.<br>
<br>
6. Redistributions of any form whatsoever must retain the following acknowledgment: "This product includes software developed by the Apache Group for use in the Apache HTTP server project (http://www.apache.org/)."<br>
<br>
THIS SOFTWARE IS PROVIDED BY THE APACHE GROUP ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE APACHE GROUP OR ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br>
====================================================================<br>
<br>
This software consists of voluntary contributions made by many individuals on behalf of the Apache Group and was originally based on public domain software written at the National Center for Supercomputing Applications, University of Illinois, Urbana-Champaign. For more information on the Apache Group and the Apache HTTP server project, please see http://www.apache.org/.<br>
<br>
Apache-2.0:<br>
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at<br>
<br>
    http://www.apache.org/licenses/LICENSE-2.0<br>
<br>
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.<br>
<br>
BSD:<br>
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br>
<br>
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.<br>
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br>
All advertising materials mentioning features or use of this software must display the following acknowledgement: This product includes software developed by the copyright holder.<br>
Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.<br>
THIS SOFTWARE IS PROVIDED BY COPYRIGHT HOLDER AS IS AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br>
<br>
BSD-2-Clause:<br>
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br>
<br>
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.<br>
<br>
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br>
<br>
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br>
<br>
CC-BY-3.0:<br>
https://creativecommons.org/licenses/by/3.0/legalcode<br>
<br>
CC-BY-4.0:<br>
https://creativecommons.org/licenses/by/4.0/legalcode<br>
<br>
ISC:<br>
Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.<br>
<br>
THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.<br>
<br>
LGPL:<br>
This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version.<br>
<br>
This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.<br>
<br>
You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110, USA<br>
<br>
GPL:<br>
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 1, or (at your option) any later version.<br>
<br>
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.<br>
<br>
You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston MA  02110-1301 USA.<br>
<br>
MPL:<br>
The contents of this file are subject to the Mozilla Public License Version 1.1 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.mozilla.org/MPL/<br>
<br>
Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.<br>
<br>
MPL-2.0:<br>
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.<br>
<br>
Python-2.0:<br>
Copyright (c) 1991 - 1995, Stichting Mathematisch Centrum Amsterdam, The Netherlands. All rights reserved.<br>
<br>
Permission to use, copy, modify, and distribute this software and its documentation for any purpose and without fee is hereby granted, provided that the above copyright notice appear in all copies and that both that copyright notice and this permission notice appear in supporting documentation, and that the name of Stichting Mathematisch Centrum or CWI not be used in advertising or publicity pertaining to distribution of the software without specific, written prior permission.<br>
<br>
STICHTING MATHEMATISCH CENTRUM DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO EVENT SHALL STICHTING MATHEMATISCH CENTRUM BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.<br>
<br>
Unlicense:<br>
This is free and unencumbered software released into the public domain.<br>
<br>
Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.<br>
<br>
In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.<br>
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. <br>
For more information, please refer to http://unlicense.org/<br>
    </ModalComponent>
  </div>
</template>
<script>

function count(array){
    var c = 0;
    for(let i in array) // in returns key, not object
        if(array[i] != undefined)
            c++;

    return c;
}

import axios from 'axios';
import Vue from "vue";
import { Preferences } from '@capacitor/preferences';

export default {
  name: "VideoAnruf",
  components: {
    
  },
  mixins: [],
  data() {
    return {
      Auswahl: [],
      selected: '',
      montageplatz: '',
      modellidentifikation: '',
      modelhost: 'http://127.0.0.1:4000',
      pref: {},
      Modell: {},
      Modelle: [],
      Ziele: {},
      showModalEinst: false,
      showModalLizenz: false
    };
  },
  async beforeMount(){
    this.initialisieren();
  },
  mounted() { },
  methods: {
    async initialisieren()
    {
      console.log("Funktion initialisieren");

      await this.einstellungenPruefen('host', 'http://' + window.location.hostname + ':4000');
      await this.einstellungenPruefen('modellidentifikation', 'Beispielmodell.json');
      await this.einstellungenPruefen('montageplatz', 'Beispielplatz');

      this.modelhost = await this.einstellungHolen('host', 'http://' + window.location.hostname + ':4000');
      this.modellidentifikation = await this.einstellungHolen('modellidentifikation', 'Beispielmodell.json');
      this.montageplatz = await this.einstellungHolen('montageplatz', 'Beispielplatz');

      this.hostGeaendert();
      this.modellInitialisieren();
    },
    async einstellungenPruefen(key, value)
    {
      console.log("Funktion einstellungenPruefen");
      const preferences = await Preferences.keys();
      if (!preferences.keys.includes(key))
      {
        await Preferences.set({
          key: key,
          value: value
        })
      }
    },
    async einstellungHolen (key, standard)
    {
      console.log("Funktion einstellungHolen");
      console.log("Einstellung holen: " + key);
      const preferences = await Preferences.keys();
      console.log("existierende Einstellungen: " + preferences.toString());
      if (preferences.keys.includes(key))
      {
        const r = (await Preferences.get({key: key})).value;
        console.log("Einstellung vorhanden, Wert: " + r);
        return r;
      }
      console.log("Einstellung nicht vorhanden, Standardwert: " + standard);
      return standard;
    },
    hostGeaendert() {
      console.log("hostgeaendert");
      var vm = this;

      axios.get(this.modelhost +'/Modelle')
      .then(function (response){
        console.log("Modelle");
        vm.Modelle = response.data;
        console.log(vm.Modelle);
      })
      .finally(function(){ });

      //wenn aktuelle modellidentifikation nicht enthalten ist, muss die liste und die auswahl ebenfalls aktualisiert werden
    },
    modellInitialisieren() {
      console.log("funktion modellInitialisieren");

      var vm = this;

      if (this.modellidentifikation == '')
      {
        console.log("modellidentifikation leer");
      } else {
        axios.get(this.modelhost +'/Modelle/' + this.modellidentifikation)
        .then(function (response){
          console.log(response.data);
          vm.Modell = response.data;
          vm.Ziele = response.data.VerantwortlicheAdressen;
        });
      }
    },
    modellSelectedSetzen()
    {
      console.log("modellSelectedSetzen");
      var modellSelect = document.getElementById('modellSelect');

      for(var i = 0; i < modellSelect.options.length; i++)
      {
        if(modellSelect.options[i].value == this.modellidentifikation)
        {
          modellSelect.options.selectedIndex = i;
          break;
        }
      }
    },
    async einstellungenSpeichern(event)
    {
      console.log("einstellungenSpeichern: ");
      
      console.log("montageplatz: " + this.montageplatz);
      if (this.modelhost != this.tmp_modelhost)
      {
        console.log("Speichere modelhost: " + this.modelhost);
        await Preferences.set({
          key: 'host',
          value: this.modelhost
        });
        this.hostGeaendert();
      } else {
        console.log("modelhost unverändert");
      }
      
      await Preferences.set({
        key: 'montageplatz',
        value: this.montageplatz
      });
      var modellSelect = document.getElementById('modellSelect');
      try {
        var val = modellSelect.options[modellSelect.options.selectedIndex].value;
        if (val != this.modellidentifikation)
        {
          this.modellidentifikation = val;
          console.log("modellidentifikation: " + val);
          await Preferences.set({
            key: 'modellidentifikation',
            value: val
          });
          await this.modellInitialisieren();
        }
      } catch {
        await Preferences.set({
          key: 'modellidentifikation',
          value: this.modellidentifikation
        });
      }
      
    },
    ausloesen()
    {
      console.log(Date.now() + ": ausloesen");

      var elemente = count(this.Auswahl);
      if (elemente > 0)
      {
        var adressaten = "";
        for (let k = 0; k < elemente; k++)
        {
          var adressen = this.Ziele[this.Auswahl[k]];
          for (let l = 0; l < count(adressen); l++)
          {
            adressaten += adressen[l] + ",";
          }                    
        }

        if (adressaten != "," && adressaten.length > 2)
        {
          adressaten = adressaten.substring(0, adressaten.length-1);
          console.log(adressaten.toString());
          window.open("msteams://teams.microsoft.com/l/call/0/0?users=" + adressaten + "&withVideo=true");
        }
      }
    }
  }
};
</script>

<style>
#multiCall {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#rectangle{
    min-width: 10em;
    max-width: 20em;
    background:none;
    border-radius: 12px;
    background-color: rgba(0, 109, 160,0.5);   	
    text-align:center;
    align-items: center;
    display: grid;
    color:white;
    padding-top: 0.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 0em;
    box-shadow: 1px 1px 3px black;
    height: auto;
    justify-content: center;
    min-height: 5em;
    hyphens: auto;
    position: relative;
}

.taste {
  border-radius: 8px;
  background-color: rgb(35, 204, 239);
  font-size: 20px;
  box-shadow: 1px 1px 3px black;
}

.taste:active {
  background-color: #FF4081;
}

.block {
  display:inline-block;
  margin: 0.5em;
  font-size: 20px;
  justify-content: center;
}

.textbox {

}
</style>
