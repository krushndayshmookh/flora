<template>
  <q-page>
    <div class="text-h5 q-pa-md">Scheduled Appointment</div>

    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Client Name : Kishor Baidya
          </div>
          <div class="text-caption">Mob No : 7620053352</div>
          <div class="text-caption">Dilevery : Nagpur</div>
          <div class="text-caption">Pincode : 440016</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">
            Reason For Appointment : Cow Blue tongue
          </div>
          <div class="text-overline">Scheduled Time : 10:00 AM</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/doc-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Client Name : Krushn Dayshmookh
          </div>
          <div class="text-caption">Mob No : 7620053352</div>
          <div class="text-caption">Dilevery : Nagpur</div>
          <div class="text-caption">Pincode : 440016</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">
            Reason For Appointment : Cow Milk Fever
          </div>
          <div class="text-overline">Scheduled Time : 11:00 AM</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/doc-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Client Name : Vithika Jha
          </div>
          <div class="text-caption">Mob No : 7620053352</div>
          <div class="text-caption">Dilevery : Nagpur</div>
          <div class="text-caption">Pincode : 440016</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">
            Reason For Appointment : Cow Milk Fever
          </div>
          <div class="text-overline">Scheduled Time : 12:00 PM</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/doc-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Client Name : Anuprita
          </div>
          <div class="text-caption">Mob No : 7620053352</div>
          <div class="text-caption">Dilevery : Nagpur</div>
          <div class="text-caption">Pincode : 440016</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Reason For Appointment : Cow Fever</div>
          <div class="text-overline">Scheduled Time : 06:00 PM</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/doc-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Client Name : Kirti
          </div>
          <div class="text-caption">Mob No : 7620053352</div>
          <div class="text-caption">Dilevery : Nagpur</div>
          <div class="text-caption">Pincode : 440016</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">
            Reason For Appointment : Cow Blue tongue
          </div>
          <div class="text-overline">Scheduled Time : 06:30 PM</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/doc-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {}
  }
}
</script>
