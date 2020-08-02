<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      animated
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="images/banner-1.jpg" />
      <q-carousel-slide :name="2" img-src="images/banner-2.jpg" />
      <q-carousel-slide :name="3" img-src="images/baner-3.png" />
    </q-carousel>
    <div class="text-h4 text-center q-pa-md">Agriculture Schemes</div>
    <q-table :data="data" :columns="columns" row-key="name">
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              :icon="props.expand ? 'remove' : 'add'"
              @click="props.expand = !props.expand"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-btn v-if="col.name == 'apply'" flat :href="col.value"
              >Apply Here</q-btn
            >
            <div v-else>{{ col.value }}</div>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <ul>
                <li>
                  Welfare of farmers has been the top priority of Government of
                  India. For this it has implemented different schemes and
                  programmes to revive agriculture sector and to improve
                  economic conditions of the farmers.
                </li>
                <li>
                  These agricultural schemes and programmes are very beneficial
                  for the farmers and they must know about it so as to take its
                  benefit.
                </li>
                <li>
                  So through this article we will put a light on some of the
                  most useful and popular government schemes in India.
                </li>
              </ul>

              <div class="text-caption">
                <a href="http://agricoop.nic.in/programmes-schemes-listing"
                  >For More Information, Click Here</a
                >
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-separator />
    <div class="text-h4 text-center q-pa-md">Loans Schemes</div>
    <q-stepper
      ref="stepper"
      v-model="step"
      header-nav
      vertical
      color="primary"
      animated
      class="q-pa-md"
    >
      <q-step
        :name="1"
        title="Agriculture Loan Interest rate"
        icon="help"
        :done="done1"
      >
        <!-- <tr>
            <th class="text-left">Interest rate</th>
            <td class="text-right">8.80% p.a. onwards</td>
          </tr>
        
          <tr>
            <th class="text-left">Processing fee</th><br>
            <td class="text-right">0% to 2% of the loan amount</td>
          </tr> -->
        <tr>
          <th class="text-left">Interest Rate :</th>
          <br />
          <td class="text-right">8.80% p.a.</td>
        </tr>
        <tr>
          <th class="text-left">Processing Fee :</th>
          <br />
          <td class="text-right">0% to 2%</td>
        </tr>

        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="2"
        title="How to apply for Agriculture Loan"
        icon="help"
        :done="done2"
        class="text-caption text-justify"
      >
        If you are looking to apply for an agriculture loan, it is advisable to
        research your options online and apply for a loan of your choice by
        visiting the nearest branch of a lender. When visiting the branch,
        ensure that you carry the required documentation along with you to
        quicken the application process. Certain lenders may also give
        prospective borrowers the option to apply for an agriculture loan online
        through their official websites. In this case, you will need to navigate
        to the respective website, click on ‘Apply Now’, enter the required
        details in the application form, and upload the necessary documents onto
        the website. Regardless of the channel that you choose, the lender will
        verify your application and approve it. Once your application gets
        approved, the loan amount will be disbursed into your account.

        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="3"
        title="Why should take agriculture Loan?"
        icon="help"
        :done="done3"
        class="text-caption text-justify"
      >
        A number of lenders today, offer a range of agriculture loans for the
        benefit of their customers. The various purposes for which you can avail
        an agriculture loan are as follows:<br />
        <ul>
          <li>Purchase of farming machinery and equipment</li>
          <li>Purchase of land</li>
          <li>Horticulture projects</li>
          <li>Purchase of vehicles</li>
          <li>Establishment of dairy units</li>
          <li>Establishment of small poultry units</li>
          <li>For working capital needs</li>
          <li>For seasonal requirements</li>
          <li>For fish farming</li>
        </ul>
        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done3 = true; step = 4 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="4"
        title=" Features and Benefits"
        icon="create_new_folder"
        :done="done4"
        class="text-caption text-justify"
      >
        The key features and benefits of agriculture loans are as follows:<br />
        <ul>
          <li>
            Simplified Documentation: When borrowing an agriculture loan,
            applicants will only have to submit a few documents such as a valid
            photo identity proof, proof of residence, etc. These documents can
            be submitted along with one’s application form.
          </li>
          <li>
            Quick Processing: Lenders will verify your application form and the
            documents submitted by you, after which your loan application will
            be approved. The loan amount will be disbursed to your account soon
            after this.
          </li>
          <li>
            Competitive Interest Rate Charged: Banks and financial institutions
            that offer agriculture loans charge a competitive rate of interest
            that start as low as 8.80% p.a. Borrowing a loan with such a low
            interest rate can help you keep the overall cost of your loan down.
          </li>
          <li>
            Loan Repayment Tenure Options: A number of agriculture loan
            providers offer both short-term and long-term credit solutions.
            Thus, based on your financial requirements and repayment capacity,
            you can opt for a loan product that offers a suitable product term.
          </li>
          <li>
            No Hidden Charges: When you borrow an agriculture loan, you may need
            to pay other charges such as the processing fee, pre-payment
            charges, etc. However, lenders will usually inform prospective
            borrowers about the various charges that they may have to pay for
            before the loan is borrowed.
          </li>
        </ul>

        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done4 = true; step = 5 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="5"
        title="Documents Required for Agriculture Loans"
        icon="help"
        :done="done5"
        class="text-caption text-justify"
      >
        The documents that you may be asked to submit at the time of applying
        for an agriculture loan are as follows:
        <ul>
          <li>Duly-filled application form</li>
          <li>KYC documents</li>
          <li>Land/asset documents</li>
          <li>Security PDC</li>
          <li>Any other document mandated by the lender</li>
        </ul>
        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done5 = true; step = 6 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="6"
        title="Eligiblity Criteria to borrow an Agricullture Loan"
        icon="help"
        :done="done6"
        class="text-caption text-justify"
      >
        The eligibility criteria to borrow an agriculture loan will vary based
        on the type of loan scheme that you opt for. The generalised eligibility
        criteria, however, are as follows:<br />
        <ul>
          <li>
            The applicant will have to be between the ages of 18 years and 70
            years.
          </li>
          <li>
            The individuals will have to own the necessary assets, which will
            need to be hypothecated to the bank once the loan is borrowed.
          </li>
          <li>
            Loans can be applied on an individual basis or joint basis, based on
            the lender’s terms and conditions.
          </li>
        </ul>
        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done6 = true; step = 7 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="7"
        title="Highlights of union Budget 2020-21"
        icon="create_new_folder"
        :done="done7"
        class="text-caption text-justify"
      >
        <ul>
          <li>
            The Central Government’s allocation for agriculture in the 2020-21
            Union Budget was Rs.2.83 lakh crore.
          </li>
          <li>
            Out of this, Rs.1.73 lakh crore has been earmarked for rural
            development and ‘'Panchayati Raj’'.
          </li>
          <li>
            The rest has been allocated for irrigation for which 20 lakh farmers
            will be provided with individual solar pumps.
          </li>
          <li>
            Agricultural credit availability has been fixed at Rs.15 lakh crore.
          </li>
          <li>
            Comprehensive measures have been implemented to aid districts that
            face shortage of water.
          </li>
          <li>
            More emphasis is placed on solar power and less on kerosene through
            expansion of the Pradhan Mantri Kisan Urja Suraksha evem Utthan
            Mahabhiyan (PM KUSUM scheme) which will increase solar capacity by a
            total of 25,750
          </li>
          <li>
            Solarised grid-connected pump sets will be provided to 15 lakh
            farmers.
          </li>
          <li>
            The government will establish solar power generation units through
            which solar power will be sold back into the grid during the
            non-cropping season, thereby augmenting the income of farmers.
          </li>
          <li>
            A streamlined national cold supply chain will be established through
            the launch of special train services called Kisan Rail. This will be
            a public-private partnership model. This will aid in the daily
            transport of perishable goods such as fish, dairy products, fruits,
            and vegetables.
          </li>
          <li>
            Each state will be encouraged to adopt model agricultural laws.
          </li>
          <li>
            The balanced use of fertilisers will be encouraged so that the
            current use of chemical fertilisers (which is incentivised) is
            reduced.
          </li>
          <li>
            A Village Storage Scheme, which is managed by women’s Self-Help
            Groups (SHG) will help farmers to store their crops for an extended
            period of time while also cutting down on logistics expenses.
          </li>
          <li>
            Inventory storages, agricultural warehouses, and cold storage units
            will be geotagged by the National Bank for Agriculture and Rural
            Development (NABARD).
          </li>
          <li>
            A One Product One District scheme will be introduced for the
            horticulture sector to distribute products.
          </li>
          <li>
            The Aviation Ministry will launch the Krishi Udaan scheme which will
            establish connections between farmers and the domestic and
            international market. This will help them get a better price for
            their produce through institutionalised supply chains. Even during
            times of a dip in prices due to abundant supplies, farmers can still
            sell their produce to other markets for a good price through this
            channel.
          </li>
          <li>
            E-services will be integrated with financing of warehousing receipts
            that are negotiable.
          </li>
          <li>
            Measures will be taken to eliminate foot and mouth disease in goats
            and sheep by the year 2025.
          </li>
          <li>
            A Fish Farmer Organisation will be established to involve the youth
            in the fisheries sector as 'Sagar Mitras'.
          </li>
          <li>
            Measures will be taken to double milk production by the year 2025 to
            103 metric million tonnes.
          </li>
          <li>The Antyodaya Scheme will promote Self Help Groups for women.</li>
        </ul>
        <!-- <q-stepper-navigation>
          <q-btn @click="() => { done7 = true; step = 8 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>

      <q-step
        :name="8"
        title="Agriculture loan FAQ’s"
        icon="add_comment"
        :done="done8"
        class="text-caption text-justify"
      >
        1. Can loan be availed for purchase of land?<br />

        Yes, banks do extend loans to farmers for purchasing lands. However,
        banks usually finance purchase of land within a radius of 3 to 5 Kms of
        their residence or within village boundary.

        <br />
        2. Can I pre-close my agriculture loan before the completion of the loan
        tenure?<br />

        Most lenders will allow you to prepay the outstanding loan balance and
        pre-close the loan amount before the completion of the loan tenure.
        However, you may need to pay a pre-closure penalty to the lender.<br />
        3. What are the different stages involved in the process of availing an
        agriculture loan?<br />
        The key stages involved in the process of availing an agriculture loan
        are as follows:<br />
        Submission of application form and relevant documents Lender processes
        the application Loan amount is sanctioned Loan amount gets disbursed
        into the customer’s savings account<br />
        4. How long do lenders take to process agriculture loan applications?<br />
        The time required to process your application will vary based on the
        lender’s terms and conditions. That said, most lenders take around 7
        days to process loan applications.<br />
        5. Will I need a guarantor to avail an agriculture loan?<br />
        Yes, most lenders will require you to have a guarantor.<br />
        6. Can loan be availed for purchase of land?<br />
        Yes, banks do extend loans to farmers for purchasing lands. However,
        banks usually finance purchase of land within a radius of 3 to 5 Kms of
        their residence or within village boundary.<br />
        7. Who can apply for such land purchase?<br />
        Farmers who own less than 2.5 acres of irrigated land or 5 acres of
        non-irrigated land, i.e-marginal and small farmers-are eligible to buy
        land by availing a bank loan. Sharecroppers and tenant farmers can also
        be covered under the scheme.<br />
        8. Can loans be availed for purchasing land in the name of women?<br />
        Yes, it is possible. As per Govt policy women owning land could lead to
        their empowerment. Hence, purchase of land in women can be financed and
        preference can be given to women in distress, SHG members and widows
        etc.<br />
        9. What are the other allied activities eligible for agricultural
        loan?<br />
        In addition purchasing of land, or purchasing of agricultural tools,
        storage of produce and transport also are included under purview of
        agricultural loans.<br />
        10. How much agricultural loan can be availed without any security?<br />
        To encourage institutional borrowing among farmers, banks have relaxed
        security or collateral for agricultural loans.<br />
        As per RBI directive, crop loans till an amount of Rs. 1 lakh require no
        security. Loans over Rs. 1 lakh may require security as per the lending
        banks terms and conditions.<br />
        Similarly, there is no margin for loans for purchase of land up to Rs
        50,000 and amounts higher than this require a margin of 10%. The land is
        supposed to mortgaged in favour of the Bank and is considered the
        security.

        <!-- <q-stepper-navigation>
          <q-btn color="primary" @click="done8 = true" label="Finish" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation> -->
      </q-step>
      <q-btn
        label="Reset"
        push
        color="white"
        text-color="primary"
        class="q-mb-md"
        @click="reset"
      />
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      done5: false,
      done6: false,
      done7: false,
      done8: false,
      columns: [
        {
          name: 'scheme',
          required: true,
          label: 'Scheme Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'dept',
          align: 'center',
          label: 'Department Name',
          field: 'dept',
          sortable: true
        },
        {
          name: 'sdate',
          label: 'Application Start Date',
          field: 'sdate',
          sortable: true,
          style: 'width: 10px'
        },
        {
          name: 'edate',
          label: 'Application End Date',
          field: 'edate'
        },
        {
          name: 'apply',
          label: 'Apply here',
          field: 'apply',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
          dept: 'Central Government of India',
          sdate: '30/5/2020',
          edate: '30/7/2020',
          apply: 'Apply here'
        },
        {
          name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
          dept: 'NDA government',
          sdate: '15/7/2020',
          edate: '12/8/2020',
          apply: 'Apply here'
        },
        {
          name: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)',
          dept: 'Central Government of India',
          sdate: '5/1/2020',
          edate: '22/4/2020',
          apply: 'Apply here'
        },
        {
          name: 'Gramin Bhandaran Yojna',
          dept: 'State Government',
          sdate: '25/1/2020',
          edate: '20/2/2020',
          apply: 'Apply here'
        },
        {
          name: 'Livestock insurance Scheme',
          dept: 'State Government',
          sdate: '2/6/2020',
          edate: '8/8/2020',
          apply: 'Apply here'
        },
        {
          name: 'Micro Irrigation Fund (MIF)',
          dept: 'Central Government of India',
          sdate: '12/8/2020',
          edate: '8/10/2020',
          apply: 'Apply here'
        },
        {
          name: 'Soil Health Card Scheme',
          dept: 'State Government',
          sdate: '23/3/2020',
          edate: '31/5/2020',
          apply: 'Apply here'
        },
        {
          name: 'National Mission For Sustainable Agriculture (NMSA)',
          dept: 'Government of India',
          sdate: '19/2/2020',
          edate: '6/6/2020',
          apply: 'Apply here'
        },
        {
          name: 'E-NAM',
          dept: 'Government of India',
          sdate: '9/9/2020',
          edate: '30/11/2020',
          apply: 'Apply here'
        }
      ]
    }
  },
  methods: {
    reset() {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.done4 = false
      this.done5 = false
      this.done6 = false
      this.done7 = false
      this.done8 = false
      this.step = 1
    }
  }
}
</script>
