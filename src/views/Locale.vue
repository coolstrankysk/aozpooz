<template>
    <div id="app">
        <div class="container">
            <h1 class="text-center">{{ $t('icf_dial') }}</h1>

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

        <footer class="footer">
            <div class="container">
                Vytvorili
                <a href="http://www.coolstranky.sk/" target="_blank">
                    <img class="coolstranky" src="http://www.coolstranky.sk/sites/default/files/logo_0.png" alt="CoolStránky">
                </a>
                a
                <a href="https://slovensko.digital/" target="_blank">
                    <img class="slovenskodigital" src="https://slovensko.digital/img/logo/slovenskodigital-logo.svg" alt="Slovensko digital">
                </a>
            </div>
        </footer>
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

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #337ab7;
        color: #fff;
        font-weight: bold;
    }

    .footer img {
        margin: 10px;
    }

    .coolstranky {
        width: 120px;
    }

    .slovenskodigital {
        width: 140px;
    }
</style>
