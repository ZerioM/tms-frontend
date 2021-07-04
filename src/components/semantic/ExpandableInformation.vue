<template>
  <Accordion id="info-accordion" class="in_box">
        <AccordionTab :header="messages.TELEGRAM_INFO_TITLE">
            <TelegramMonitoringContent />
        </AccordionTab>
  </Accordion>
</template>

<script>
import TelegramMonitoringContent from '../elements/TelegramMonitoringContent.vue'
import * as messages from '@/config/messages';

export default {
    components: {
        TelegramMonitoringContent,
    },
    data() {
        return {
            messages
        }
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