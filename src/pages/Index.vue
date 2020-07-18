<template lang="pug">
  q-page.q-pa-md
    .row
      //- .col-8.q-px-md
      .col.q-px-md
        .row
          .col-12.q-my-md
            q-card.my-card
              q-card-section(horizontal)
                q-card-section.q-pt-xs
                  .text-overline Overline
                  .text-h5.q-mt-sm.q-mb-xs Title
                  .text-caption.text-grey
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                q-card-section.col-5.flex.flex-center
                  q-img.rounded-borders(src="https://cdn.quasar.dev/img/parallax2.jpg")
              q-separator
              q-card-actions
                q-btn(flat round icon="event")
                q-btn(flat)
                  | 7:30PM
                q-btn(flat color="primary")
                  | Reserve


          .col-12.q-my-md
            q-card.my-card
              q-card-section(horizontal)
                q-card-section.q-pt-xs
                  .text-overline Overline
                  .text-h5.q-mt-sm.q-mb-xs Title
                  .text-caption.text-grey
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                q-card-section.col-5.flex.flex-center
                  q-img.rounded-borders(src="https://cdn.quasar.dev/img/parallax2.jpg")
              q-separator
              q-card-actions
                q-btn(flat round icon="event")
                q-btn(flat)
                  | 7:30PM
                q-btn(flat color="primary")
                  | Reserve


      //- .col-4.q-pa-md
      

      //-   q-list(bordered padding)
          
      //-     q-item-label(header) Updates
          
      //-     //- q-separator(spaced)
      //-     q-item
      //-       q-item-section(top avatar)
      //-         q-avatar(color="primary" text-color="white" icon="bluetooth")
      //-       q-item-section
      //-         q-item-label Single line item
      //-         q-item-label(caption lines="2") Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
      //-       q-item-section(side top)
      //-         q-item-label(caption) 5 min ago
      //-         q-icon(name="star" color="yellow")
      //-     q-separator(spaced inset="item")
      //-     q-item
      //-       q-item-section(top avatar)
      //-         q-avatar(color="primary" text-color="white" square icon="bluetooth")
      //-       q-item-section
      //-         q-item-label Single line item
      //-         q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
      //-       q-item-section(side top)
      //-         q-item-label(caption) meta
      //-     q-separator(spaced inset="item")
      //-     q-item
      //-       q-item-section(top avatar)
      //-         q-avatar
      //-           img(src="https://cdn.quasar.dev/img/boy-avatar.png")
      //-       q-item-section
      //-         q-item-label Single line item
      //-         q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
      //-       q-item-section(side top)
      //-         q-badge(label="10k")
      //-     q-separator(spaced inset="item")
      //-     q-item
      //-       q-item-section(top avatar)
      //-         q-avatar(rounded)
      //-           img(src="https://cdn.quasar.dev/img/boy-avatar.png")
      //-       q-item-section
      //-         q-item-label Single line item
      //-         q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
      //-       q-item-section(side top)
      //-         q-item-label(caption) meta
        

</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
