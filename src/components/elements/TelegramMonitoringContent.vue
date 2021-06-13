<template>
  <div id="telegram-content-box">
      <p>
          Um Benachrichtigungen bei Fehlerverhalten der Kühlgeräte zu erhalten, muss der Monitoring Bot auf Telegram abonniert werden. Folgende Schritte sind dafür nötig:
      </p>
      <ul>
          <li>Der Monitoring Bot ist öffentlich zugänglich und abonnierbar.</li>
          <li>Auf Telegram kann die Suchfunktion verwendet werden, um den Bot zu finden. Tippe im Suchfeld "Kuehlschrankmonitoring" ein. Es sollte ein Bot namens "Temperatur Monitoring" vorgeschlagen werden.</li>
          <li>Drücke auf den Bot und anschließend auf Starten.</li>
          <li>Um das Abonnieren abzuschließen, gib deine Client-Id ein. Der Vorgang ist abgeschlossen, wenn dein Name und Client-Id in der Antwort vom Bot zu finden sind.</li>
      </ul>
      <Galleria :value="images" :numVisible="1" :responsiveOptions="responsiveOptions" :showThumbnails="false" :showIndicators="true">
          <template #item="slotProps">
              <img :src="slotProps.item.imgSrc" />
          </template>
      </Galleria>
  </div>
</template>

<script>
export default {
    data () {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            images: [
                {
                    imgSrc: "assets/images/telegram-bot-2.svg",
                },
                {
                    imgSrc: "assets/images/telegram-bot-2.svg",
                },
                {
                    imgSrc: "assets/images/telegram-bot-2.svg",
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    #telegram-content-box {
        font-family: $font-main;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
    }

    li {
        margin-top: 10%;
    }
</style>