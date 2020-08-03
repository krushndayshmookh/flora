<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Procurement Orders</div>

    <q-list bordered separator>
      <q-item v-for="order in orders" :key="order._id" v-ripple clickable>
        <q-item-section>
          <div class="text-body1">{{ order.farmer.name }}</div>
          <div class="text-caption">{{ order.farmer.phone }}</div>
          <div class="text-caption">{{ order.farmer.address }}</div>

          <q-separator spaced></q-separator>

          <div class="text-h6">{{ order.crop.name }}</div>
          <div class="text-caption">{{ order.crop.quantity }} kg</div>
        </q-item-section>

        <q-item-section side>
          <q-btn round icon="done" color="green"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          _id: 0,
          crop: {
            name: 'Wheat',
            quantity: 300
          },
          farmer: {
            name: 'Ravi Makkad',
            phone: '+91 21324 43242',
            address: 'Soem home, some street, nice area, City - 123455 Maharashtra'
          }
        },
        {
          _id: 1,
          crop: {
            name: 'Rice',
            quantity: 300
          },
          farmer: {
            name: 'Ravi Tiwari',
            phone: '+91 21324 43242',
            address: 'Soem home, some street, nice area, City - 123455 Maharashtra'
          }
        },
        {
          _id: 2,
          crop: {
            name: 'Rice',
            quantity: 300
          },
          farmer: {
            name: 'Ravi Tiwari',
            phone: '+91 21324 43242',
            address: 'Soem home, some street, nice area, City - 123455 Maharashtra'
          }
        }
      ]
    }
  }
}
</script>
