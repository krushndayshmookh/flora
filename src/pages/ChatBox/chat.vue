<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        stamp="7 minutes ago"
        :text="['wheat 56 Rs./kg']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          >
        </template>
      </q-chat-message>

      <q-chat-message
        name="Customer"
        :text="['Okay then,I will send you address.',
        'I will pay you after delivery.',
        'Will that be okay?']"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          >
        </template>
      </q-chat-message>


      <q-chat-message
        name="me"
        stamp="7 minutes ago"
        :text="['Yeah,that will be okay.']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          >
        </template>
      </q-chat-message>

    <q-chat-message
        name="Customer"
        :text="['Address:Gandhi Road,bandra',
        'Mob no. 1234567890.',
        'Could you tell me how much till it will take to deliver??And also...']"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          >
        </template>
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>