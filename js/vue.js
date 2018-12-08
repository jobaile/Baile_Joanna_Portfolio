(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
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
        },

        created : function() {
            this.loadWorkOne();
            this.loadWorkTwo();
        },

        methods : {
            loadWorkOne(){
                const url = `includes/index.php?id=1`; //selects the specific id

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
                })
                .catch(function(error){
                    console.log(error);
                })   
            },

            loadProject2(){
                const url = `includes/index.php?id=2`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.pageTitleTwo = data[0].port_title;
                    this.fimsCategory = data[0].port_category;
                    this.fimsDate = data[0].port_date;
                    this.fimsAbout = data[0].port_about;
                    this.fimsImgOne = data[0].port_img;
                    this.fimsDesc = data[0].port_desc;
                    this.fimsImgTwo = data[0].port_img2;
                })
                .catch(function(error){
                    console.log(error);
                })   
            },
        }
    });


})();