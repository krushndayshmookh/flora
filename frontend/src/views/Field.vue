<template lang="pug">
  .home
    section.section
      .container
        .row
          .col.s12
            
            .card-panel
              .section
              
                router-link.btn(to="/") back
                  i.material-icons.left keyboard_arrow_left

              #crop-head.row
                .col.s12
                  h4 Field 1
                  h4.light Rice
                    
              #harvest-info.row
                .col.s6.strong Planted on
                .col.s6.strong Land area (Acres)
                .col.s6.input-field
                  input#crop-date.datepicker(type="date" name="crop-date")
                  label(for="crop-date") Date
                .col.s6.input-field
                  input#land-area(type="number" value="10")
                  label(for="land-area") Area
                
                .col.s6.strong Expected harvest date
                .col.s6.strong Expected Harvest quantity
                #expected-harvest-date.col.s6 Please enter date above.
                #expected-harvest-quantity.col.s6 something in kg :-P
                

            .card-panel
              h5.center Water record
            
              .row
                .col.s12.strong.center Next water
                #next-water.col.s12.red-text.center Water now first!
              .row
                .col.s12.center Previous record

              #water-record-container.row
                .col.s6.offset-s3
                  #add-water-btn.btn.full-width.blue.white-text.waves-effect.waves-green Water now

            .card-panel
              h5.center Fertilizer record

              .row
                .col.s6.strong Fertilser
                .col.s6.strong Added on
              #fertilizer-record-container.row
                .col.s12.white-text This is blank space.
                .col.s6.input-field
                  input#fertilizer-name(type="text")
                  label(for="fertilizer-name") Name
                .col.s6.input-field
                  input#fertilizer-date.datepicker(type="date")
                  label(for="fertilizer-date") Date
              .row
                .col.s4 
                  #add-fertilizer-btn.btn.full-width.blue.white-text.waves-effect.waves-red Add fertilizer
                .col.s4 
                  .btn.full-width.orange.white-text.waves-effect.waves-red(onclick="Materialize.toast('Suggestions coming soon!', 4000)") Suggestions
                .col.s4 
                  .btn.full-width.green.white-text.waves-effect.waves-purple(onclick="Materialize.toast('Store opening shortly!', 4000)") Get Fertilizer
            
            .card-panel
              h5.center Activity record
              .row
                .col.s6.strong Activity
                .col.s6.strong Date
              #activity-record-container.row
                .col.s6.input-field
                  input#activity-name(type="text")
                  label(for="activity-name") Name
                .col.s6.input-field
                  input#activity-date.datepicker(type="date")
                  label(for="activity-date") Date
              .row

                .col.s6
                  #add-activity-btn.btn.full-width.green.white-text.waves-effect.waves-orange Add activity
                .col.s6
                  #upcoming-activity-btn.btn.full-width.red.white-text.waves-effect.waves-orange(onclick="Materialize.toast('This feature is under development!', 4000)") Upcoming
            
            
            .card-panel
              h5.center Expense record
              #expense-record-container.row
                .col.s3.strong Activity
                .col.s3.strong Date
                .col.s3.strong.center In
                .col.s3.strong.center Out
              .row
                .col.s3.input-field
                  input#expense-input-description(type="text" name="expense-input-description")
                  label(for="expense-input-description") Description
                .col.s3.input-field
                  input#expense-input-date.datepicker(type="date" name="expense-input-date")
                  label(for="expense-input-date") Select date
                .col.s3.input-field.right-align
                  input#expense-input-amt_in(type="number" value="0")
                  label(for="expense-input-amt_in") Amount
                .col.s3.input-field.right-align
                  input#expense-input-amt_out(type="number" value="0")
                  label(for="expense-input-amt_out") Amount
              .row
                .col.s3.offset-s9
                  #add-expense-btn.btn.teal.white-text.full-width Add
              //
                <div class="col s6 center strong">Total</div>
                <div class="col s3 right-align green-text strong">300.00</div>
                <div class="col s3 right-align red-text strong">250.00</div>
                <a class="btn blue wite-text " href="#expense-input-modal">Add Expense</a>
                <div class="btn teal white-text " onclick="$('#expense-input-modal').modal('open')">Add</div>

</template>

<script>
import M from 'materialize-css'
// @ is an alias to /src
import FieldOverview from '@/components/FieldOverview.vue'

export default {
	name: 'Home',
	components: {
		FieldOverview
	},
	mounted() {
		M.AutoInit()
	},
	updated() {
		M.updateTextFields()
	}
}
</script>
