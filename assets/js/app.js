let cl = console.log;

$(document).ready(function () {
    const $bannerSlider = $('#bannerSlider')
    const baseurl = "https://api.themoviedb.org/3";
    const apiKey = '1ab0b6ee06ec01c77561b6ad6e0c1901'
    const imgUrl = `https://image.tmdb.org/t/p/`
    const trendingUrl = `${baseurl}/trending/all/week?api_key=${apiKey}`
    $.ajax({
        url: trendingUrl,
        method: "GET",
        dataType: 'json',
        success: function (res) {
            cl(res.results)
            let movieArray = res.results;
            let result = movieArray.map(movie => {
                return `
                    <div class="item">
                        <img src="${imgUrl}/original/${movie.backdrop_path}">
                        <div class="caption">
                            <h3 class="display-3">${movie.title ?? movie.original_title ?? movie.original_name}</h3>
                            <p>
                                ${movie.overview}
                            </p>
                        </div>
                    </div>
                `
            }).join('')
            cl(result)
            $bannerSlider.html(result)


            $bannerSlider.html(result);
            $('#bannerSlider').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                navText: ["<", ">"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        },
        error: function (err) {

        }
    })

    // $('#bannerSlider').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })
})

// let params = new HttpParams()
//                     .append('api_key', apiKey)