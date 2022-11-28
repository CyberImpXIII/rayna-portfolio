const defaultData = {
    pages:[
      {
        pageImages:[{image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png', link:'symposia', alt:'symposia'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png', link:'farmshelf', alt:'farmshelf'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png', link:'museumotcny', alt:'musem'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/4-Leg Room/LegRoom_Mockup_10-24-22.png', link:'legroom', alt:'legroom'}, 
        {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletcher_s-fae-logo-mockup.png', link:'fletchersfae', alt:'fletchersfae'}],
        pageName:'print'
      },
      {
        pageImages:[{image:process.env.PUBLIC_URL + '/videos/3-Spaces/A City for Corduroy/farmshelfwebsitemockup2.mp4', link:'', alt:'test'}, 
        {image:process.env.PUBLIC_URL + '/videos/3-Spaces/A City for Corduroy/WhatIsFarmshelf_IG_final.mp4', link:'', alt:'test'}],
        pageName:'digital'
      },{
        pageImages:[
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot1.png', link:'corduroy', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot2.png', link:'corduroy', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot3.png', link:'corduroy', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot4.png', link:'corduroy', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot5.png', link:'corduroy', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7773.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7793.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7799.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7837-Edit.jpg', link:'google', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7855.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7860.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7884-Edit.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7886.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7887-Edit.jpg', link:'google', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4716.jpg', link:'pernod', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4726.jpg', link:'pernod', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8243.jpg', link:'pernod', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8250.jpg', link:'pernod', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7460.jpeg', link:'rebel', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7466.jpeg', link:'rebel', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7469.jpeg', link:'rebel', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-027.jpg', link:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-034.jpg', link:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-048.jpg', link:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-059.jpg', link:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-135.jpg', link:'stettheimer', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.25.53 PM.png', link:'kubrick', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.26.33 PM.png', link:'kubrick', alt:'test'}],
          pageName:'space'
      },{
        pageImages:[
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_BeginnersGuide2.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_FoodWaste.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/ezgif-6-5fc630b070ad.gif', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0211.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0212.png', link:'', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0214.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0215.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0216+2.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0217+2.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0222.png', link:'', alt:'test'},
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0223+2.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0224+2.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_7465.jpeg', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/KaleOnCouch_2-01.jpeg', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/PARTY-INVITE.gif', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+5.57.04+PM.png', link:'', alt:'test'}, 
          {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+6.10.45+PM.png', link:'', alt:'test'}],
          pageName:'illustration'
      }
    ],
    navItems:[
      {
        navItemName:'Symposia',
        navItemPageContent:`Hotel identity exploration, 2021
        See more →
        `,
        navItemProjectContent:`Hotel identity for SVA Continuing Education with Anita Zeppetelli
        2021
        `,
        navItemLink:'symposia'
      },{
        navItemName:'Farmshelf',
        navItemPageContent:`Senior Graphic Designer, 2019-2020
        See more →        
        `,
        navItemProjectContent:`I was responsible for all the visual style, design and photography at Farmshelf. I evolved the design system to create consistency, increase brand awareness and accommodate growth.
        `,
        navItemLink:'farmshelf'
      },{
        navItemName:'Museum of the City of New York',
        navItemPageContent:`Graphic Designer, xxxdate
        See more →           
        `,
        navItemProjectContent:`XXXXX`,
        navItemLink:''
      },{
        navItemName:'Fletcher’s Fae',
        navItemPageContent:`Identity and packaging, xxxdate
        See more →             
        `,
        navItemProjectContent:`Identity, illustration, and packaging for independent distiller
        2021?`,
        navItemLink:''
      },{
        navItemName:'Leg Room',
        navItemPageContent:`Illustration and poster design for short film titled Leg Room, 2022            
        `,
        navItemProjectContent:``,
        navItemLink:''
      }
    ]
  }

  export default defaultData