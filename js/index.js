Vue.createApp({
    data() {
        return {
            articlesData: [
                {
                    title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
                    imgUrl: 'article-image1.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2024/02/10'
                },
                {
                    title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)',
                    imgUrl: 'article-image2.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2023/11/20'
                },
                {
                    title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
                    imgUrl: 'article-image3.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2023/10/18'
                },
                {
                    title: 'Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)',
                    imgUrl: 'article-image4.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2024/02/10'
                },
                {
                    title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)',
                    imgUrl: 'article-image5.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2023/11/20'
                },
                {
                    title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
                    imgUrl: 'article-image6.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2023/10/18'
                },
                {
                    title: '給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)',
                    imgUrl: 'article-image7.jpg',
                    tags:[
                        {
                            link: '',
                            name: 'UI/UX 新知'
                        }
                    ],
                    date: '2023/10/18'
                }
            ]
        }
    }
}).mount('#articles')


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });