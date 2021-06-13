<template>
  <Accordion id="info-accordion" class="in_box">
        <AccordionTab header="Telegram Monitoring Bot">
            <TelegramMonitoringContent />
        </AccordionTab>
  </Accordion>
</template>

<script>
import TelegramMonitoringContent from '../elements/TelegramMonitoringContent.vue'
export default {
    components: {
        TelegramMonitoringContent,
    }
}
</script>

<style lang="scss">
@import '@/main.scss';

    .in_box {
        margin-top: 20%;
        margin: 2.5%;
    }

    #info-accordion {
        font-family: $font-main;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
    }

</style>