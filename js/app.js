(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            workdata : [], //grabs the work array
            testimonialdata : [],

            testimonialname : "",
            testimonialtitle : "",
            testimonialdesc : "",

            worktitle : "", //grabs work title
            workdesc : "", //grabs work description 
            workimg : "", //grabs work image1
            workurl : "", //grabs the url

            showDetails : false, //because we have the lightbox setup, this needs to be set to false
            showTestimonialDetails : true
        },


        created : function(){
            //this will fetch the data during page load
            this.fetchPortfolioData(null);
        },

        methods : {
            openLightBox(e){
                //console.log('from openlightbox');

                var modal = document.querySelector(".lightBox");

                modal.style.display = "block";

                setTimeout(function(){ window.scrollTo(0, -200)}, 100)

            },

            closeLightBox(){
                //console.log('from closeLightBox vue');
                
                var modal = document.querySelector(".lightBox");

                modal.style.display = "none";
            },

            loadPortfolio(e) {
                //debugger;
                //console.log("from loadPortfolio");
                e.preventDefault(); // block a page reload (anchor tag default behaviour

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.workdata.filter(tbl_portfolio => tbl_portfolio.port_url === dataKey);

                this.worktitle = currentData[0].port_title;
                this.workdesc = currentData[0].port_desc;

                this.workimg = currentData[0].port_img;
                this.workurl = currentData[0].port_url;

                this.showDetails = true;
            },

            loadSite(e) { //This makes it so the button will go to the respective page site
                //debugger;
                //console.log("from loadSite");
                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.workdata.filter(tbl_portfolio => tbl_portfolio.port_url === dataKey);
            },

            fetchPortfolioData(work) {
                //console.log("from fetchPortfolioata");
                let url = work ? `./includes/index.php?work=${work}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (work) {
                        this.singledata = data; //this is gonna go to the data
                    } else {
                        // this will push all the content
                        this.workdata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            },

            loadTestimonial(e) {
                //debugger;
                console.log("from loadTestimonial");

            },

            fetchTestimonialData(testimonial) {
                console.log("from fetchTestimonialData");
            }
        }
    });
})();