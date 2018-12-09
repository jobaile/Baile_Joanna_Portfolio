(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            workdata : [], //grabs the work array

            worktitle : "", //grabs work title
            workdesc : "", //grabs work description 
            workimg : "", //grabs work image1
            workurl : "", //grabs the url

            showDetails : false, //because we have the lightbox setup, this needs to be set to false

            roletitle : "My Role",

            pageTitleOne : "",
            sosCategory: "",
            sosDate : "",
            sosAbout : "",
            sosImgOne : "",
            sosDesc : "",
            sosImgTwo : "",
            
            pageTitleTwo : "",
            fimsCategory: "",
            fimsDate : "",
            fimsAbout : "",
            fimsImgOne : "",
            fimsDesc : "",
            fimsImgTwo : "",

            pageTitleThree : "",
            neroCategory: "",
            neroDate : "",
            neroAbout : "",
            neroImgOne : "",
            neroDesc : "",
            neroImgTwo : "",

            pageTitleFour : "",
            getCategory: "",
            getDate : "",
            getAbout : "",
            getImgOne : "",
            getDesc : "",
            getImgTwo : "",

            pageTitleFive : "",
            lsfcCategory: "",
            lsfcDate : "",
            lsfcAbout : "",
            lsfcImgOne : "",
            lsfcDesc : "",
            lsfcImgTwo : "",

            pageTitleSix : "",
            reelCategory: "",
            reelDate : "",
            reelAbout : "",
            reelImgOne : "",
            reelDesc : "",
            reelImgTwo : "",

        },


        created : function(e){
            //this will fetch the data during page load
            this.fetchPortfolioData(null);
            this.loadWorkFiles();

        },

        methods : {
            loadWorkFiles(){
                const url = `includes/index.php?`; //selects the specific id

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    //make sure it's the same as the database
                    this.pageTitleOne = data[0].port_title;
                    this.sosCategory = data[0].port_category;
                    this.sosDate = data[0].port_date;
                    this.sosAbout = data[0].port_about;
                    this.sosImgOne = data[0].port_img;
                    this.sosDesc = data[0].port_desc;
                    this.sosImgTwo = data[0].port_img2;

                    this.pageTitleTwo = data[1].port_title;
                    this.fimsCategory = data[1].port_category;
                    this.fimsDate = data[1].port_date;
                    this.fimsAbout = data[1].port_about;
                    this.fimsImgOne = data[1].port_img;
                    this.fimsDesc = data[1].port_desc;
                    this.fimsImgTwo = data[1].port_img2;

                    this.pageTitleThree = data[2].port_title;
                    this.neroCategory = data[2].port_category;
                    this.neroDate = data[2].port_date;
                    this.neroAbout = data[2].port_about;
                    this.neroImgOne = data[2].port_img;
                    this.neroDesc = data[2].port_desc;
                    this.neroImgTwo = data[2].port_img2;

                    this.pageTitleFour = data[3].port_title;
                    this.getCategory = data[3].port_category;
                    this.getDate = data[3].port_date;
                    this.getAbout = data[3].port_about;
                    this.getImgOne = data[3].port_img;
                    this.getDesc = data[3].port_desc;
                    this.getImgTwo = data[3].port_img2;

                    this.pageTitleFive = data[4].port_title;
                    this.lsfcCategory = data[4].port_category;
                    this.lsfcDate = data[4].port_date;
                    this.lsfcAbout = data[4].port_about;
                    this.lsfcImgOne = data[4].port_img;
                    this.lsfcDesc = data[4].port_desc;
                    this.lsfcImgTwo = data[4].port_img2;

                    this.pageTitleSix = data[5].port_title;
                    this.reelCategory = data[5].port_category;
                    this.reelDate = data[5].port_date;
                    this.reelAbout = data[5].port_about;
                    this.reelImgOne = data[5].port_img;
                    this.reelDesc = data[5].port_desc;
                    this.reelImgTwo = data[5].port_img2;


                })
                .catch(function(error){
                    console.log(error);
                })   
            },

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