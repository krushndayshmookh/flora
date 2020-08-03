<template>
  <q-page>
    <div class="text-h5 q-pa-md">Manage Service</div>

    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Service Name : Powertrac 445 PLUS
          </div>
          <div class="text-caption">
            Range Starts From Rs. 6.56 lakh - 6.94 lakh
          </div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Productivity</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/service1.png" />
          </q-avatar>
        </q-item-section>
        <q-card-actions align="right" class="q-pa-sm" style="margin-left:12px">
          <q-btn label="EDIT " type="submit" color="primary" />
          <q-btn label="DELETE " type="submit" color="negative" />
        </q-card-actions>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Service Name : Cultivator
          </div>
          <div class="text-caption">In Stock (13pc) Price: ₹360.00</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Productivity</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/service2.png" />
          </q-avatar>
        </q-item-section>
        <q-card-actions align="right" class="q-pa-sm" style="margin-left:12px">
          <q-btn label="EDIT " type="submit" color="primary" />
          <q-btn label="DELETE " type="submit" color="negative" />
        </q-card-actions>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Service Name : Tractor Mounted Combine Harvester
          </div>
          <div class="text-caption">In Stock (13pc) Price: ₹360.00</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Productivity</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/service3.png" />
          </q-avatar>
        </q-item-section>
        <q-card-actions align="right" class="q-pa-sm" style="margin-left:12px">
          <q-btn label="EDIT " type="submit" color="primary" />
          <q-btn label="DELETE " type="submit" color="negative" />
        </q-card-actions>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Service Name : Trolley
          </div>
          <div class="text-caption">In Stock (13pc) Price: ₹360.00</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Productivity</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/service4.png" />
          </q-avatar>
        </q-item-section>
        <q-card-actions align="right" class="q-pa-sm" style="margin-left:12px">
          <q-btn label="EDIT " type="submit" color="primary" />
          <q-btn label="DELETE " type="submit" color="negative" />
        </q-card-actions>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-pa-md">
      <q-item v-ripple :to="'#'" clickable>
        <q-item-section>
          <div class="text-subtitle text-bold">
            Service Name : Cultivator
          </div>
          <div class="text-caption">In Stock (13pc) Price: ₹360.00</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Productivity</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/service1.png" />
          </q-avatar>
        </q-item-section>
        <q-card-actions align="right" class="q-pa-sm" style="margin-left:12px">
          <q-btn label="EDIT " type="submit" color="primary" />
          <q-btn label="DELETE " type="submit" color="negative" />
        </q-card-actions>
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
