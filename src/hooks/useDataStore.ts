import { create } from 'zustand'

type DataStore = {
  btnText: string,
  menuList: Array<string>,
  banner: {
    svg: string,
    alt: string
  },

  heroSection: {
    header: string,
    paragrap: string,
    image: string,
    alt: string,
  },
  feature: {
    header: string,
    paragrap: string
    lists: Array<{
      list: string,
      headerList: string,
      paragrapList: string,
    }>
  },
  article: {
    header: string,
    articleList: Array<{
      id: string,
      image: string,
      name: string,
      articleText: string,
    }>,
  },
  faq: {
    header: string,
  },
  contact: {
    menulist: Array<string>,
    btnText: string,
    inputText: string,
    Copyright: string,
    sociallists: Array<{
      link: string,
      name: string,
      social: string
    }>,
  }
}

const useDataStore = create<DataStore>(() => ({
  btnText: 'Get Started',
  menuList: ['Pricing', 'Product', 'About Us', 'Careers', 'Community'],
  banner: {
    svg: './images/logo.svg',
    alt: 'banner',
  },
  heroSection: {
    header: 'Bring everyone together to build better products.',
    paragrap: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
    image: '/images/illustration-intro.svg',
    alt: 'illustration intro',
  },
  feature: {
    header: 'What’s different about Manage?',
    paragrap: 'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.',
    lists: [{
      list: '01',
      headerList: 'Track company-wide progress',
      paragrapList: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    }, {
      list: '02',
      headerList: 'Advanced built-in reports ',
      paragrapList: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    }, {
      list: '03',
      headerList: 'Everything you need in one place ',
      paragrapList: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
    }],
  },
  article: {
    header: 'What they’ve said',
    articleList: [{
      id: 'item1',
      image: '/images/avatar-anisha.png',
      name: 'Anisha Li',
      articleText: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    }, {
      id: 'item2',
      image: '/images/avatar-ali.png',
      name: 'Ali Bravo',
      articleText: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    }, {
      id: 'item3',
      image: '/images/avatar-richard.png',
      name: 'Richard Watts',
      articleText: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    }, {
      id: 'item4',
      image: '/images/avatar-shanai.png',
      name: 'Shanai Gough',
      articleText: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    }],
  },
  faq: {
    header: 'Simplify how your team works today.',
  },
  contact: {
    menulist: ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy'],
    btnText: 'Go',
    inputText: ' Updates in your inbox…',
    Copyright: 'Copyright 2020. All Rights Reserved',
    sociallists: [{
      link: '',
      name: 'Facebook',
      social: './images/icon-facebook.svg',
    }, {
      link: '',
      name: 'Youtube',
      social: './images/icon-youtube.svg',
    }, {
      link: '',
      name: 'Twitter',
      social: './images/icon-twitter.svg',
    }, {
      link: '',
      name: 'Pinterest',
      social: './images/icon-pinterest.svg',
    }, {
      link: '',
      name: 'instagram',
      social: './images/icon-instagram.svg',
    }],
  },
}))

export default useDataStore
