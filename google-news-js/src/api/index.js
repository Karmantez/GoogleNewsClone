// const baseURL = 'https://newsapi.org/v2';
const config = {
  method: 'GET',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
};

const getNews = async (type = 'top-headlines', query = undefined) => {
  const url = `/api/${type}?${query !== undefined ? `q=${query}&` : ''}country=kr&apiKey=${
    process.env.API_KEY
  }`;
  console.log(url);
  // const result = await fetch(url, config);
  const result = await fetch(url, config);
  console.log(result);
  return result;
};

const getDummyNews = () => {
  const dummyDate = {
    status: 'ok',
    totalResults: 24797,
    articles: [
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/valentina-palladino',
        title: "Samsung's new Galaxy Chromebook 2 is already $100 off",
        description:
          "Save $100 on Samsung's new Galaxy Chromebook 2 laptop at Samsung and Best Buy.",
        url: 'https://www.engadget.com/samsung-galaxy-chromebook-2-sale-best-buy-134037712.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-04/ab871810-96d5-11eb-b5fe-41c2db4984ea',
        publishedAt: '2021-04-06T13:40:37Z',
        content:
          "Samsung's updated Galaxy Chromebook 2 came out just last month and it brought more practicality and affordability to what was previously a luxurious, expensive Chrome OS device. The laptop normally s… [+2068 chars]",
      },
      {
        source: {
          id: null,
          name: 'Lifehacker.com',
        },
        author: 'Brendan Hesse',
        title: 'How to Download Your Samsung Cloud Data Before It Disappears',
        description:
          'The Samsung Cloud storage service is on its way out. The shutdown is happening in phases depending on where you live—but one of the first deadlines has already passed for the U.S., Australia, UK, and most of Europe, aka “Group 1". Group 1 users had until Wedn…',
        url:
          'https://lifehacker.com/how-to-download-your-samsung-cloud-data-before-it-disap-1846609177',
        urlToImage:
          'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eyous9fp7o1476e3kzr6.jpg',
        publishedAt: '2021-04-02T20:30:00Z',
        content:
          'The Samsung Cloud storage service is on its way out. The shutdown is happening in phases depending on where you livebut one of the first deadlines has already passed for the U.S., Australia, UK, and … [+1729 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/chris-velazco',
        title: 'Samsung’s new Galaxy A phone lineup includes its cheapest 5G model yet',
        description:
          'Between the Galaxy S21 series and the foldables it plans to release later this year, Samsung is pretty much set with premium smartphones. For anyone who doesn’t want to drop flagship levels of cash, though, Samsung just pulled back the curtain on a bevy of ne…',
        url:
          'https://www.engadget.com/samsung-galaxy-a52-5g-galaxy-a42-galaxy-a32-galaxy-a12-galaxy-a02s-140017341.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-04/d1bce6d0-97a8-11eb-baee-1220f349268a',
        publishedAt: '2021-04-07T14:00:17Z',
        content:
          'Between the Galaxy S21 series and the foldables it plans to release later this year, Samsung is pretty much set with premium smartphones for 2021. For anyone who doesnt want to drop flagship levels o… [+3764 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/steve-dent',
        title: "Samsung's 512GB DDR5 module is a showcase for the future of RAM",
        description:
          'Samsung has unveiled a new RAM module that shows the potential of DDR5 memory in terms of speed and capacity.',
        url: 'https://www.engadget.com/samsung-unveils-a-512-gb-ddr-5-ram-module-102447443.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-03/afa86d10-8d46-11eb-bfd6-e15d49904fe7',
        publishedAt: '2021-03-25T10:24:47Z',
        content:
          'Samsung has unveiled a new RAM module that shows the potential of DDR5 memory in terms of speed and capacity. The 512GB DDR5 module is the first to use High-K Metal Gate (HKMG) tech, delivering 7,200… [+1382 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Igor Bonifacic',
        title: 'Samsung will hold its next Unpacked event on March 17th',
        description:
          'It was only two months ago that Samsung held an Unpacked event to announce the Galaxy S21, but the company is already sending out invites for another event it plans to hold on March 17th at 10 AM ET.\nThe moment of awesome we’ve all been waiting for: Unpacked,…',
        url: 'https://www.engadget.com/samsung-unpacked-2021-230748872.html',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/bqFrDOwDn0.vniPb_3LadQ--~B/aD00MTA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2021-03/cf0a07d0-812b-11eb-bfce-1e3e2a1fecb6.cf.jpg',
        publishedAt: '2021-03-09T23:07:48Z',
        content:
          'It was only two months ago that Samsung held an Unpacked event to announce the Galaxy S21, but the company is already sending out invites for another event it plans to hold on March 17th at 10 AM ET.… [+587 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/steve-dent',
        title: 'Samsung says it may skip the Galaxy Note this year',
        description:
          'During Samsung\'s annual shareholder\'s meeting, co-CEO Koh Dong-jin said that the company is grappling with a shortage of chips and that it "might be difficult" to release a Note model in the second half of 2021 as it had planned.',
        url:
          'https://www.engadget.com/samsung-may-skip-a-galaxy-note-model-due-to-a-severe-chip-shortage-094327482.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-03/1708fea0-86ff-11eb-bfd6-72f43851ae05',
        publishedAt: '2021-03-17T09:43:27Z',
        content:
          'Samsung has always been committed to its large, pen-centric Galaxy Note lineup, even when things went very wrong. Late last year, however, rumors surfaced that Samsung might not release a Galaxy Note… [+1710 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/steve-dent',
        title: 'Samsung latest high-res monitors go all-in on HDR',
        description:
          'Samsung has launched its business and consumer lineup of high-resolution monitors, and this year, all 12 of them support HDR.',
        url:
          'https://www.engadget.com/samsung-latest-high-res-monitors-go-all-in-on-hdr-100912697.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-03/5c2d5ef0-8af5-11eb-87df-be1f43bd3921',
        publishedAt: '2021-03-22T10:09:12Z',
        content:
          'Samsung has launched its business and consumer lineup of high-resolution monitors, and this year, all 12 of them support HDR. The S8 flagship lineup comes features two 27-inch (S80A and S80UA) and on… [+1785 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/steve-dent',
        title: 'Rumors claim Samsung will make OLED TVs with LG panels next year',
        description:
          'A big shakeup might be coming to the AV world as Samsung may start producing OLED TVs with panels sourced by rival LG, according to a report from Korean broadcaster MTN.',
        url:
          'https://www.engadget.com/samsung-may-source-lg-panels-for-its-own-oled-tvs-091909753.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-04/af676be0-990c-11eb-b58e-a14400d2386c',
        publishedAt: '2021-04-09T09:19:09Z',
        content:
          'A big shakeup might be coming to the AV world as Samsung may start producing OLED TVs with panels sourced by rival LG, according to a report from Korean broadcaster MTN spotted by Sammobile. The two … [+1708 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/valentina-palladino',
        title: "Samsung's T7 Touch SSD is cheaper than ever on Amazon",
        description:
          "Save big on Samsung's T7 Touch 500GB portable SSD on Amazon -- it's 20 percent off right now.",
        url: 'https://www.engadget.com/samsung-t7-touch-ssd-500gb-sale-amazon-200045443.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2020-11/3794dbe0-2e61-11eb-b7dd-d361570dca9d',
        publishedAt: '2021-03-25T20:00:45Z',
        content:
          "Samsung's T-series of portable SSDs is praised by many for fast speeds and pocketable designs, and now you can get one of the newest models for less. The Samsung T7 Touch in 500GB is down to $88 on A… [+1304 chars]",
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Mitchell Clark',
        title: 'Here’s how the OnePlus 9 and 9 Pro compare to Samsung and Apple',
        description:
          'OnePlus has announced its OnePlus 9 and 9 Pro phones. So, how do they stack up to the competition from Samsung and Apple? We stack up the specs and features to help you decide which phone to get.',
        url:
          'https://www.theverge.com/22338919/oneplus-9-pro-vs-samsung-iphone-comparison-features-price',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/lWmlTLiDpS3lEHJhGKDTH0W-P58=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22388898/bfarsace_4481_20210317_0077_Edit.jpg',
        publishedAt: '2021-03-23T15:29:06Z',
        content:
          'To Pro or not to Pro? Or maybe Samsung?\r\nPhoto by Becca Farsace / The Verge\r\nOnePlus has released its new batch of phones, the OnePlus 9 and the 9 Pro. As is the tradition with OnePlus, the phones ar… [+7340 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Chris Welch',
        title: 'Samsung’s Galaxy Z Fold 2 foldable phone just got $200 cheaper',
        description:
          'Samsung is dropping the price of its ultra-premium Galaxy Z Fold 2 5G by $200, bringing the foldable smartphone down to $1,799.99 from its initial $1,999.99 launch price.',
        url:
          'https://www.theverge.com/2021/4/2/22364162/samsung-galaxy-z-fold-2-5g-price-cut-announced-1800',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/AK4LBcmcJZtWfr3SpZgeY67tXy4=/0x197:2040x1265/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21864976/vpavic_200907_4181_0017.jpg',
        publishedAt: '2021-04-02T16:37:06Z',
        content:
          'The companys flagship foldable is now $1,800\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Vjeran Pavic / The Verge\r\nSamsung is droppin… [+1211 chars]',
      },
      {
        source: {
          id: null,
          name: 'Lifehacker.com',
        },
        author: 'Joel Kahn',
        title: 'How to Use the S-Pen With a Samsung Galaxy S21 Ultra',
        description:
          'Samsung announced recently that its flagship phone, the Galaxy S21 Ultra, will get one of its best features—the use of a stylus. Galaxy fans rejoiced at the thought of using the S-Pen in a variety of ways, and the uses do not disappoint. Here are some of our …',
        url:
          'https://lifehacker.com/how-to-use-the-s-pen-with-a-samsung-galaxy-s21-ultra-1846429071',
        urlToImage:
          'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/l3wfnb4o46fc7wwfzltz.jpg',
        publishedAt: '2021-03-08T16:00:00Z',
        content:
          'Samsung announced recently that its flagship phone, the Galaxy S21 Ultra, will get one of its best featuresthe use of a stylus. Galaxy fans rejoiced at the thought of using the S-Pen in a variety of … [+795 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/engadget',
        title: "The best tech deals we found in Best Buy's weekend sale",
        description:
          "Here's a list of the best tech deals we found in Best Buy's 3-day sale, including discounts on Samsung's Galaxy S21 5G and Microsoft's Surface Pro 7.",
        url:
          'https://www.engadget.com/best-tech-deals-best-buy-three-day-sale-march-19-2021-120041858.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-02/68605b30-6d3d-11eb-bfe8-dd1de6fcda36',
        publishedAt: '2021-03-19T12:00:41Z',
        content:
          "Best Buy's kicking off the weekend with another limited-time sale. Through Sunday, a bunch of smart TVs, smartphones, laptops and more have been deeply discounted and this includes some of the newest… [+5511 chars]",
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'Jon Fingas',
        title: "Samsung's 980 NVMe SSD boasts high performance with a tradeoff",
        description:
          "Samsung has finally introduced a 980 SSD that isn't part of the high-priced Pro line, and it's mostly good news for performance-minded PC users — with a caveat. The company's new base level 980 NVMe drive is billed as a significant upgrade over the long-servi…",
        url: 'https://www.engadget.com/samsung-980-nvme-ssd-150012298.html',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CnSyHmkcvp7mxroY8osl7w--~B/aD0xMDY3O3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/b13410e0-7a94-11eb-ad7e-7803c951c607.cf.jpg',
        publishedAt: '2021-03-09T15:00:12Z',
        content:
          "Samsung has finally introduced a 980 SSD that isn't part of the high-priced Pro line, and it's mostly good news for performance-minded PC users with a caveat. The company's new base level 980 NVMe dr… [+1291 chars]",
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch',
        },
        author: 'Sarah Perez',
        title:
          'Samsung’s AirTags rival, the Galaxy SmartTag+, arrives to help you find lost items via AR',
        description:
          'Samsung’s Galaxy SmartTag+, the company’s competitor to Apple’s forthcoming lost-item finder known as AirTags, has now arrived. Samsung had first announced its Tile competitor known as the Galaxy SmartTag, a Bluetooth-powered locator, during its press event i…',
        url:
          'http://techcrunch.com/2021/04/08/samsungs-airtags-rival-the-galaxy-smarttag-arrives-to-help-you-find-lost-items-via-ar/',
        urlToImage: 'https://techcrunch.com/wp-content/uploads/2021/04/Galaxy-SmartTag2.jpg?w=600',
        publishedAt: '2021-04-08T16:49:39Z',
        content:
          'Samsung’s Galaxy SmartTag+, the company’s competitor to Apple’s forthcoming lost-item finder known as AirTags, has now arrived. Samsung had first announced its Tile competitor known as the Galaxy Sma… [+3052 chars]',
      },
      {
        source: {
          id: 'engadget',
          name: 'Engadget',
        },
        author: 'https://www.engadget.com/about/editors/chris-velazco',
        title: "Watch Samsung's Galaxy Awesome Unpacked with us live at 9:40AM ET",
        description:
          'Samsung usually saves its Unpacked events for its flashiest, highest-profile product launches, but today — well, things might be a little different. When the company kicks off its third major online event in as many months at 10:00 AM Eastern/7:00 AM Pacific …',
        url:
          'https://www.engadget.com/samsung-galaxy-awesome-unpacked-galaxy-a52-a72-live-stream-2021-124713139.html',
        urlToImage:
          'https://s.yimg.com/os/creatr-uploaded-images/2021-03/39350b30-86f1-11eb-acdd-26cf199815f6',
        publishedAt: '2021-03-17T12:47:13Z',
        content:
          'Samsung usually saves its Unpacked events for its flashiest, highest-profile product launches, but today well, things might be a little different. When the company kicks off its third major online ev… [+1151 chars]',
      },
      {
        source: {
          id: null,
          name: 'Gizmodo.com',
        },
        author: 'David Nield',
        title: 'How to Use Your Samsung Phone As a Desktop',
        description:
          'Many folks don’t know that you can use your Samsung Galaxy phone or tablet as a desktop experience using Samsung DeX. If you’re completely new to the idea of DeX, the “Desktop eXperience” runs from your Galaxy device and lets you use your phone or tablet with…',
        url: 'https://gizmodo.com/how-to-use-your-samsung-phone-as-a-desktop-1846422923',
        urlToImage:
          'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dh02ijccndcvriracldx.jpg',
        publishedAt: '2021-03-09T13:30:00Z',
        content:
          'Many folks dont know that you can use your Samsung Galaxy phone or tablet as a desktop experience using Samsung DeX. If youre completely new to the idea of DeX, the Desktop eXperience runs from your … [+5551 chars]',
      },
      {
        source: {
          id: 'the-verge',
          name: 'The Verge',
        },
        author: 'Allison Johnson',
        title: 'Samsung is bringing its lowest-cost 5G phones to the US',
        description:
          'Samsung is bringing five new A-series phones to the US this year, including the Galaxy A32 5G, its most affordable 5G model ever. They go on sale this month, with prices ranging from $499 for the A52 5G to $109 for the budget-friendly A02s.',
        url:
          'https://www.theverge.com/2021/4/7/22370189/samsung-galaxy-a52-a42-a32-5g-a12-a02s-price-specs-price',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/sYYNDVzN0EGl9zr360-TyDfR7Zg=/0x144:2000x1191/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22424808/Galaxy_A02S_A12_A32_A42_5G_5G_A52_5G_Lineup.jpg',
        publishedAt: '2021-04-07T14:00:00Z',
        content:
          'This years Galaxy A-series lineup includes the A32 5G, A42 5G, and A52 5G, starting at $279\r\nFive new A-series models will debut in the US this month, from the entry-level A02s up to the midrange A52… [+3887 chars]',
      },
      {
        source: {
          id: 'mashable',
          name: 'Mashable',
        },
        author: 'Joseph Green',
        title: 'Save £200 and experience the power of QLED with this Samsung 4K TV',
        description:
          "SAVE 15%: The Samsung 2020 65-inch Q80T QLED 4K HDR 1500 TV is on sale for £1,099 in Amazon's spring sale, saving you £200 on list price.\n\nAfter a slow start, the Amazon spring sale has started to drop some impressive deals on 4K TVs. You can save big on popu…",
        url: 'https://mashable.com/uk/shopping/march-25-best-4k-tv-deal/',
        urlToImage:
          'https://mondrian.mashable.com/2021%252F03%252F25%252Faf%252Fa14ac2e7e2d3422c968d76f38c64dafe.f4bc3.png%252F1200x630.png?signature=ZbpAQ7w8iYiEoV-FScYtnTsUJTo=',
        publishedAt: '2021-03-25T05:10:00Z',
        content:
          "SAVE 15%: The Samsung 2020 65-inch Q80T QLED 4K HDR 1500 TV is on sale for £1,099 in Amazon's spring sale, saving you £200 on list price.\r\nAfter a slow start, the Amazon spring sale has started to dr… [+883 chars]",
      },
      {
        source: {
          id: 'mashable',
          name: 'Mashable',
        },
        author: 'Stan Schroeder',
        title: "There probably won't be a new Samsung Galaxy Note this year",
        description:
          "Samsung doesn't plan on launching a new Galaxy Note smartphone this year. \nThis is according to Samsung's head of mobile DJ Koh, who said so at a shareholder meeting according to Korean outlet Digital Daily (via MySmartPrice). \nSamsung isn't completely giving…",
        url: 'https://mashable.com/article/no-samsung-galaxy-note-2021/',
        urlToImage:
          'https://mondrian.mashable.com/2021%252F03%252F17%252Fdb%252Ff92eac04a3b64539af673c5af2d429d3.93abd.png%252F1200x630.png?signature=Cy4uxbxiw1sugbs9Rwl-gYPYzS4=',
        publishedAt: '2021-03-17T08:39:11Z',
        content:
          "Samsung doesn't plan on launching a new Galaxy Note smartphone this year. \r\nThis is according to Samsung's head of mobile DJ Koh, who said so at a shareholder meeting according to Korean outlet Digit… [+1188 chars]",
      },
    ],
  };

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(dummyDate);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

export { getNews, getDummyNews };
