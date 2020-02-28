<template lang="pug">
	.profile
		.card-panel.light-blue.lighten-3.z-depth-1.no-margin(style="font-family: 'Poppins', sans-serif; box-shadow: none")
			.row.center
				.col.s12
					.center
						img#user-img.profile-picture(src="http://clavi.herokuapp.com/images/student.png" alt="picture")
		section.section
			.container
				.row
					.col.s12.m6.offset-m3
						
							table
								tbody#info-table-body
									tr
										td.strong Name
										td Krushn Dayshmookh
									tr
										td.strong Registration Number
										td 2016ACSC0108072
									tr
										td.strong Aadhar Number
										td 6909 2915 3320
									tr
										td.strong Degree
										td Bachelor of Engineering
									tr
										td.strong Branch
										td CSE
									tr
										td.strong Semester
										td III
									tr
										td.strong Father's Name
										td Tooka
									tr
										td.strong Father's Number
										td 9874643547
									tr
										td.strong Mother's Name
										td Revti
									tr
										td.strong Mother's Number
										td 9642633463
									tr
										td.strong Gender
										td Male
									tr
										td.strong Date of Birth
										td 2 July 1994
									tr
										td.strong Height
										td 156 cm
									tr
										td.strong Weight
										td 98 kg
									tr
										td.strong Blood Group
										td O+




</template>

<script>
// @ is an alias to /src
export default {
	name: 'Profile',
	data() {
		return {
			roles: ''
		}
	},
	methods: {
		fetchUser() {
			// TODO: get from DB
			let currentUser = this.$route.params.user_id
			this.roles = currentUser.roles || 'consumer'
		}
	},
	mounted() {
		this.fetchUser()
	}
}
</script>
