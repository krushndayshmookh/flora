<template>
<q-page padding class="flex flex-center my-bg ">

    <div class="row justify-center flex-block full-width" >
        <q-card class="col-12 col-md-3 col-sm-6 box-shadow">
            <q-img src="~assets/images/login-card.jpg">
                <div class="absolute-bottom text-center">
                    <div class=" text-h4 ">Flora</div>
                </div>
            </q-img>
            <q-card-section>
                <q-input color="teal" filled v-model="user.name" placeholder="Name" input-class="text" class="q-mb-md" type="text"> <template v-slot:prepend>
                        <q-icon style="margin-right:25px" name="person" />
                    </template></q-input>
                <q-input color="teal" filled v-model="user.email" placeholder="Email" input-class="text" class="q-mb-md" type="email"> <template v-slot:prepend>
                        <q-icon style="margin-right:25px" name="mail" />
                    </template></q-input>
                <q-input color="teal" filled v-model="user.phone" placeholder="Phone" input-class="text" class="q-mb-md" type="phone"> <template v-slot:prepend>
                        <q-icon style="margin-right:25px" name="phone" />
                    </template></q-input>
                <q-input color="teal" filled v-model="user.password" placeholder="Password" input-class="text" class="q-mb-md" type="password"> <template v-slot:prepend>
                        <q-icon style="margin-right:25px" name="lock" />
                    </template></q-input>


            <q-btn rounded dense size="18px" color="primary" label="Register" class="full-width" style="margin-top:12px"  @click="register" />

                <div class=" text register ">Already Have an Account?

                    <q-btn flat to='/auth/login'> Login Here </q-btn>
                </div>
                 <div class=" text-left register ">Flora version 1.1</div>
            </q-card-section>
        </q-card>
    </div>
</q-page>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                phone: ''
            }
        }
    },
    methods: {
        register() {
            console.log({ ...this.user })
        }
    }
}
</script>

<style scoped>
.my-bg {
    background-image: url('~assets/images/login-bg.jpg')
}

.flex-block {
    min-height: 500px;
}

.register {
    margin-top: 18px;
    margin-bottom: 10px;
    text-align: center;
    color:rgba(0, 0, 0, 0.54);
}
.box-shadow{
  box-shadow:
  0 6.8px 8.2px rgba(0, 0, 0, 0.034),
  0 9.7px 12.3px rgba(0, 0, 0, 0.048),
  0 18.5px 23px rgba(0, 0, 0, 0.06),
  0 32.3px 29.9px rgba(0, 0, 0, 0.072),
  0 49.8px 54.4px rgba(0, 0, 0, 0.086),
  0 120px 89px rgba(0, 0, 0, 0.12)
  ;

}
</style>
