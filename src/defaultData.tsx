const defaultData = {
    pages:[
      {
        pageImages:[{image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png', link:'symposia', project:'symposia', alt:'symposia'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png', link:'farmshelf',project:'farmshelf', alt:'farmshelf'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png', link:'museumotcny',project:'museumotcny', alt:'musem'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/4-Leg Room/LegRoom_Mockup_10-24-22.png', link:'', project:'legroom', alt:'legroom'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletcher_s-fae-logo-mockup.png', link:'fletchersfae', project:'fletchersfae', alt:'fletchersfae'}],
        pageName:'print'
      },
      {
        pageImages:[{image:process.env.PUBLIC_URL + '/videos/2-Digital/farmshelfwebsitemockup2.mp4', link:'farmshelf',project:'website-mockup', alt:'farmshelf'}, 
        {image:process.env.PUBLIC_URL + '/videos/2-Digital/WhatIsFarmshelf_IG_final.mp4', link:'farmshelf', project:'farmshelf2', alt:'farmshelf'}],
        pageName:'digital'
      },{
        pageImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot1.png', link:'corduroy',project:'corduroy', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7773.jpg', link:'google',project:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4716.jpg', link:'pernod',project:'pernod', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7460.jpeg', link:'rebel',project:'rebel', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-027.jpg', link:'stettheimer',project:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.25.53 PM.png', link:'kubrick',project:'kubrick', alt:'test'}],
          pageName:'space'
      },{
        pageImages:[
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_BeginnersGuide2.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_FoodWaste.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/ezgif-6-5fc630b070ad.gif', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0211.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0212.png', link:'',project:'n/a', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0214.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0215.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0216+2.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0217+2.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0222.png', link:'',project:'n/a', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0223+2.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0224+2.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_7465.jpeg', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/KaleOnCouch_2-01.jpeg', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/PARTY-INVITE.gif', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+5.57.04+PM.png', link:'',project:'n/a', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+6.10.45+PM.png', link:'',project:'n/a',  alt:'test'}],
          pageName:'illustration'
      }
    ],
    navItems:[
      {
        navItemName:'Symposia',
        navItemPageContent:`Hotel identity exploration, 2021
        <a href='/symposia'>See more →</a>
        `,
        navItemLink:'symposia',
        project:'symposia'
      },{
        navItemName:'Farmshelf',
        navItemPageContent:`Senior Graphic Designer, 2019-2020
        <a href='/farmshelf'>See more →</a>        
        `,
        navItemLink:'farmshelf',
        project:'farmshelf'
      },{
        navItemName:'Farmshelf',
        navItemPageContent:`Conceptualized and edited a video for marketing of new product.
        2020               
        `,
        navItemLink:'farmshelf',
        project:'farmshelf2'
      },{
        navItemName:'Farmshelf Website',
        navItemPageContent:`Designed, produced and launched website for food-tech startup.
        2020                      
        `,
        navItemLink:'farmshelf',
        project:'website-mockup'
      },{
        navItemName:`Museum of the 
        City of New York`,
        navItemPageContent:`Graphic Designer, 2017-2018
        <a href='/museumotcny'>See more →</a>           
        `,
        navItemLink:'museumotcny',
        project:'museumotcny'
      },{
        navItemName:'Fletcher’s Fae',
        navItemPageContent:`Identity and packaging, 2020
        <a href='/fletchersfae'>See more →</a>             
        `,
        navItemLink:'fletchersfae',
        project:'fletchersfae'
      },{
        navItemName:'Leg Room',
        navItemPageContent:`Illustration and poster design for short film titled Leg Room. 2022           
        `,
        navItemLink:'',
        project:'legroom'
      },{
        navItemName:'A City for Corduroy',
        navItemPageContent:`Exhibition design, 2018
        <a href='/corduroy'>See more →</a>
        `,

        navItemLink:'corduroy',
        project:'corduroy'
      },{
        navItemName:'Google Austin',
        navItemPageContent:`Environmental design, 2019
        <a href='/google'>See more →</a>
        `,
        navItemLink:'google',
        project:'google'
      },{
        navItemName:'Rebel Women: Defying Victorianism',
        navItemPageContent:`Dropdown on spaces page:
        Exhibition design, 2018
        <a href='/rebel'>See more →</a>        
        `,
        navItemLink:'rebel',
        project:'rebel'
      },{
        navItemName:'Stettheimer Dollhouse',
        navItemPageContent:`
        Illustration, 2020
        <a href='/stettheimer'>See more →</a>
        `,
        navItemLink:'stettheimer',
        project:'stettheimer'
      },{
        navItemName:'Through a Different Lens',
        navItemPageContent:`Exhibition design, MCNY, 2018
        <a href='/kubrick'>See more →</a>
        `,
        navItemLink:'kubrick',
        project:'kubrick'
      },{
        navItemName:'Pernod Ricard',
        navItemPageContent:`Environmental design, 2019
        <a href='/pernod'>See more →</a>        
        `,
        navItemLink:'pernod',
        project:'pernod'
      }
    ],
    projects:[
      {
        projectName:'Corderoy',
        projectLink:'/corduroy',
        dropdownContent:`This exhibition of Don Freeman’s work featured drawings, paintings, publications, and prints, as well as the artist’s original studies and sketches of Corduroy and other characters. I created the main environmental graphics, provided illustrations, and assisted exhibition design under Design Director Marissa Martonyi.

        Photographs courtesy of Brad Farwell
        2018
        `,
        projectImages:[{image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot1.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot2.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot3.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot4.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot5.png', alt:'test'}]
      },{
        projectName:'Farmshelf',
        projectLink:'/Farmshelf',
        dropdownContent:`I was responsible for all the visual style, design and photography at Farmshelf. I evolved the design system to create consistency, increase brand awareness and accommodate growth.
        `,
        projectImages:[{image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_collateral-booklet.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_nutrient-instruction-postcard.png',  alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_welcome-postcard.png', alt:'test'}]
      },
      {
        projectName:'Symposia',
        projectLink:'/symposia',
        dropdownContent:`Hotel identity for SVA Continuing Education with Anita Zeppetelli
        2021
        `,
        projectImages:[{image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS2.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS3.png',  alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS4.png', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS5.png', alt:'test'}]
      },
      {
        projectName:'Museum of the City of New York',
        projectLink:'/museumotcny',
        dropdownContent:`Created original work for marketing, exhibitions, wayfinding, and online shop.
        2017-2018
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/2-MCNY mockups_germ-city-book.png', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/3-MCNY mockups_germ-city-poster.png',  alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/4-MCNY mockups_activist-postcard.png', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/5-MCNY mockups_berg-program.png', alt:'test'}
        ]
      },
      {
        projectName:'Fletcher\'s Fae',
        projectLink:'/FletchersFae',
        dropdownContent:`Identity, illustration, and packaging for independent distiller.
        2020
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletcher_s-fae-logo-mockup.png', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletchers-Fae-Bottle-Mockup-CLOSEUP.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletchers-Fae-Bottle-Mockup.png', alt:'test'}
          
        ]
      },
      {
        projectName:'Through Different Lense',
        projectLink:'/kubrick',
        dropdownContent:`Through a Different Lens: Stanley Kubrick Photographs features more than 120 photographs by Kubrick from the Museum’s Look Magazine archive. I worked with Design Director Marissa Martonyi at Museum of the City of New York.
        Photos courtesy of Brad Farwell.
        Hyperallergic review
        2018        
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.25.53 PM.png', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.26.33 PM.png', alt:'test'}        
        ]
      },
      {
        projectName:'Stettheimer Dollhouse',
        projectLink:'/stettheimer',
        dropdownContent:`The Stettheimer “doll’s house” – an artistic model made over the course of nearly two decades between 1916 and 1935 – is one of the great treasures of the Museum of the City of New York. I provided illustrations for the museum’s exhibition featuring the doll’s house, working with Design Director Marissa Martonyi.
        2020
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-027.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-034.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-048.jpg', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-059.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-135.jpg', alt:'test'}       
        ]
      },
      {
      projectName:'Google Austin',
      projectLink:'/google',
      dropdownContent:`I designed a floor of Google’s corporate offices in Austin, Texas, while working at GHD Partners. The space is themed in retrofuturism, looking back at stories of imagining the future through design, architecture, and scientific exploration.
      2019
      `,
      projectImages:[
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7773.jpg', alt:'test'},
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7793.jpg', alt:'test'},
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7799.jpg', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7837-Edit.jpg', alt:'test'},
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7855.jpg', alt:'test'},
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7860.jpg', alt:'test'},
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7884-Edit.jpg', alt:'test'},              
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7886.jpg', alt:'test'},              
        {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7887-Edit.jpg', alt:'test'},              
      ]
      },
      {
        projectName:'Rebel Women_ Defying Victorianism',
        projectLink:'/rebel',
        dropdownContent:`This exhibition focused on the untold stories of the city’s independent, unconventional, and path-breaking women who had an indelible impact on New York’s society, culture, and economy by the turn of the 20th century. I worked with Design Director Marissa Martonyi at Museum of the City of New York.
        2018
        
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7460.jpeg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7466.jpeg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7469.jpeg', alt:'test'}           
        ]
      },
      {
        projectName:'Pernod Ricard',
        projectLink:'/pernod',
        dropdownContent:`I designed wall graphics for Pernod Ricard, a global leader in wine and spirits, while working at GHD Partners. The Impress space, in their New York corporate office, features art-deco inspired vinyl graphics. 
        2019            
        `,
        projectImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4716.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4726.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8243.jpg', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8250.jpg', alt:'test'}           
        ]
      }
    ]
  }

  export default defaultData