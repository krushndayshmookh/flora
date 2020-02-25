<template lang="pug">
  .register
    section.section
      .container
        .row
          .col.s12
            h3 Register

        .row
          .col.s5
            //- nice image

          .col.s12.l7
            .card-panel
              form
                .row
                  .input-field.col.s6
                    input#first_name.validate(type="text")
                    label(for="first_name") First Name
                  .input-field.col.s6
                    input#last_name.validate(type="text")
                    label(for="last_name") Last Name
                

                .row
                  .input-field.col.s12
                    input#email.validate(type="email")
                    label(for="email") Email
                    
                .row
                  .input-field.col.s6
                    input#password.validate(type="password")
                    label(for="password") Password

                  .input-field.col.s6
                    input#passwordc.validate(type="password")
                    label(for="passwordc") Confirm Password

                
                .row
                  .input-field.col.s6
                    input#phone.validate(type="tel")
                    label(for="phone") Phone
                .row
                  .input-field.col.s12
                    select(multiple)
                      option(value="1") Farmer
                      option(value="2") Expert
                      option(value="3" selected) Consumer
                      option(value="4") Govt. Officer
                    label User type

                .row
                  .col.s12
                    .btn-large.right.green Register
            

</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'

export default {
	name: 'Register',
	components: {},
	data() {
		return {}
	},
	methods: {},
	mounted() {
		M.AutoInit()
	},
	updated() {
		M.updateTextFields()
	}
}
</script>
