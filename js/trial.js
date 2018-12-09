(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            lightbox : GLightbox(),
            lightboxDescription : GLightbox({
              selector: 'glightbox2'
            }),
            
            welcomemessage : "Howdy! Welcome to my video app!",
            
            portdata : [], //this gets the array
            singledata : [],

            workcategory : "",

            videotitle : "",
            videodescription : "",
            videsources : "",

            showDetails : false
        },

        created : function(){
            //this witll fetch the data during page load
            this.fetchPortfolioData(null);
        },

        methods : {
            login() {
                //stub
                console.log('login functionality');
            },

            fetchSingle(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.port);
            },

            loadWork(e) {
                //debugger;
                e.preventDefault(); // block a page reload (anchor tag default behaviour

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.portdata.filter(tbl_work => tbl_work.work_url === dataKey);

                this.workcategory = currentData[0].work_desc;
                this.videotitle = currentData[0].work_title;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function(){ window.scrollTo(0, 1200)}, 500)
            },

            fetchPortfolioData(port) {
                //this is a ternary statement (shorthand for if/else). left of the : is true, right is false
                let url = port ? `./includes/index.php?port=${port}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (port) {
                        // this fetches one work
                        this.singledata = data; //this is gonna go to the data
                    } else {
                        // this will push all the portfolio content
                        this.portdata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();