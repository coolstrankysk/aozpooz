<template>
    <div id="app">
        <h1 class="text-center">Choose language / Vyberte jazyk</h1>

        <div class="animated fadeIn">
            <div id="step1" class="row">
                <div class="col-md-12 text-center">
                    <input type="button"
                           class="btn btn-primary"
                           value="English"
                           @click="changeLocale('en')">

                    <input type="button"
                           class="btn btn-primary"
                           value="Slovenský"
                           @click="changeLocale('sk')">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'locale',

    methods: {
      changeLocale (locale) {
        this.$i18n.locale = locale
        this.$router.push('step1')
      }
    }
  }
</script>
