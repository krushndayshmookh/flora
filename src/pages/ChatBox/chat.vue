<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="Customer"
        stamp="17 minutes ago"
        :text="['Can you please send me qualities and rate of wheat?']"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message
        name="me"
        stamp="15 minutes ago"
        :text="[
          'Black Wheat, Nabi Certified Black Wheat, Sugar Free Wheat, Packaging Size: 50 Kg',
          'Rate:80 Rs./kg',
          'Whole Wheat Grain Cleaned, Pack Type: Jute Bag',
          'Rate:40 rs./kg'
        ]"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message
        name="Customer"
        stamp="12 minutes ago"
        :text="[
          'Okay then,Send me Black wheat.',
          'I will send you address.',
          'I will pay you after delivery.',
          'Will that be okay?'
        ]"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message
        name="me"
        stamp="9 minutes ago"
        :text="['Yeah,that will be okay.']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message
        name="Customer"
        stamp="7 minutes ago"
        :text="[
          'Address:Gandhi Road,Chennai',
          'Mob no. 1234567890.',
          'Could you tell me how much till it will take to deliver??And also...',
          'The who will deliver it?'
        ]"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message
        name="me"
        :text="[
          'Okay.',
          'It will take approximately 2 to 3 weeks.',
          'And our delivery boy will deliver at your place'
        ]"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          />
        </template>
        <q-spinner-dots size="2rem" />
      </q-chat-message>

      <q-input v-model="text" label="typing..." rounded outlined>
        <template v-slot:append>
          <q-spinner-dots size="2rem" />
          <q-icon name="close" class="cursor-pointer" @click="text = ''" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>