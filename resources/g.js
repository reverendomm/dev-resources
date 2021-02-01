const {
    programming,
    toolsAndUtilities,
    infrastructure,
    jobs,
    assets,
    readingAndWriting,
    uiDesign,
} = require('../constants/categories')
const { website, youtube } = require('../constants/links')

module.exports = [
    {
        name: 'Gatsby',
        categories: [programming.javascript.react],
        description:
            'Gatsby is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud.',
        keywords: ['gatsby', 'javascript', 'react', 'graphql', 'fast'],
        links: {
            [website]: 'https://www.gatsbyjs.com/',
        },
        icon: 'https://www.gatsbyjs.com/icons/icon-96x96.png?v=3ad5294f3fa6c06e2d07ab07c76df2cf',
    },
    {
        name: 'GetTerms.io',
        categories: [toolsAndUtilities.general],
        description: 'Generate a simple Terms of Service and Privacy Policy statement for your website.',
        links: {
            [website]: 'https://getterms.io/',
        },
        icon: 'https://getterms.io/img/apple-touch-icon-72x72.png',
    },
    {
        name: 'GitHub Pages',
        categories: [infrastructure.hosting],
        description:
            'Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.',
        links: {
            [website]: 'https://pages.github.com/',
        },
        icon: 'https://pages.github.com/favicon.ico',
    },
    {
        name: 'GoatCounter',
        categories: [toolsAndUtilities.analytics],
        description:
            'GoatCounter is an open source web analytics platform available as a hosted service (free for non-commercial use) or self-hosted app.',
        links: {
            [website]: 'https://www.goatcounter.com/',
        },
        icon: 'https://static.zgo.at/favicon/favicon-32x32.png',
    },
    {
        name: 'GoDaddy Website Builder',
        categories: [toolsAndUtilities.websiteBuilders],
        description:
            'Learn How to Make a Website Quickly and Easily with our Highly Acclaimed Website Builder. Our easy to use Web Design software will let you Create a Website in no time at all!',
        links: {
            [website]: 'https://www.godaddy.com/websites/website-builder',
        },
        icon: 'https://img6.wsimg.com/ux/favicon/favicon-96x96.png',
    },
    {
        name: 'GoLand',
        categories: [toolsAndUtilities.editorsAndExtensions],
        description: 'GoLand is an IDE by JetBrains aimed at providing an ergonomic environment for Go development.',
        links: {
            [website]: 'https://www.jetbrains.com/go/',
        },
        icon: 'https://www.jetbrains.com/favicon-32x32.png',
    },
    {
        name: 'Golang Developer Jobs',
        categories: [jobs.boards],
        description:
            'Find specific Golang Developer Jobs, including Remote Jobs. You are looking for Golang Developers? Submit your position for free.',
        links: {
            [website]: 'https://golangjob.xyz/',
        },
        icon: 'https://golangjob.xyz/img/icons/favicon-32x32.png',
    },
    {
        name: 'Google Chrome Developers',
        categories: [programming.youtubeChannels],
        description: 'Making the web more awesome.',
        keywords: ['Google Chrome Developers Web CSS Framweorks'],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Google Developers',
        categories: [programming.youtubeChannels],
        description:
            'The Google Developers channel features talks from events, educational series, best practices, tips, and the latest updates across our products and platforms.',
        keywords: [
            '"google developers" developers "Google developers videos" "google developer tutorials" "developer tutorials" "developer news" android firebase tensorflow chr...',
        ],
        links: {
            [youtube]: 'https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw',
        },
        icon: 'https://www.youtube.com/s/desktop/d743f786/img/favicon_96.png',
    },
    {
        name: 'Google Fonts',
        categories: [assets.fonts],
        description: 'Making the web more beautiful, fast, and open through great typography.',
        links: {
            [website]: 'https://fonts.google.com/',
        },
        icon: 'https://www.gstatic.com/images/branding/product/1x/google_fonts_blue_ios_96dp.png',
    },
    {
        name: 'Google Search Console',
        categories: [toolsAndUtilities.seo],
        description:
            "Search Console tools and reports help you measure your site's Search traffic and performance, fix issues, and make your site shine in Google Search results.",
        links: {
            [website]: 'https://search.google.com/search-console/about',
        },
        icon: 'https://ssl.gstatic.com/search-console/scfe/search_console-64.png',
    },
    {
        name: 'Google Technical Writing',
        categories: [readingAndWriting.learn],
        description:
            'This collection of courses and learning resources aims to improve your technical documentation. Learn how to plan and author technical documents. You can also learn about the role of technical writers at Google.',
        links: {
            [website]: 'https://developers.google.com/tech-writing',
        },
        icon:
            'https://www.gstatic.com/devrel-devsite/prod/v45f61267e22826169cf5d5f452882f7812c8cfb5f8b103a48c0d88727908b295/developers/images/touchicon-180.png',
    },
    {
        name: 'GotResumeBuilder',
        categories: [jobs.resumeBuilders],
        description:
            'Resume Builder – Free and easy to use. Sample resumes and tips on how to write a resume available.',
        keywords: [
            'resume builder',
            'free resume builder',
            'how to write a resume',
            'how to make a resume',
            'sample resumes',
        ],
        links: {
            [website]: 'https://www.gotresumebuilder.com/',
        },
        icon: 'https://cdn.gotresumebuilder.com/favicon.ico',
    },
    {
        name: 'Gradient',
        categories: [uiDesign.colorPalettes],
        description:
            'Thousands of trendy color gradients in a curated collection that is updated daily. Get a fresh color gradient for your next design project and save all the gradients you like.',
        links: {
            [website]: 'https://gradienthunt.com/',
        },
        icon: 'https://gradienthunt.com/img/gradienthunt.jpg',
    },
    {
        name: 'Gramara',
        categories: [readingAndWriting.utilities],
        description: 'Write fluent English in a snap!',
        links: {
            [website]: 'https://gramara.com/',
        },
        icon: 'https://gramara.com/icons/icon-96x96.png?v=36fedff97b311c405df1c8fff551eb82',
    },
    {
        name: 'Grammarly',
        categories: [readingAndWriting.utilities],
        description:
            'Grammarly makes sure everything you type is easy to read, effective, and mistake-free. Try it today:.',
        links: {
            [website]: 'https://grammarly.com',
        },
        icon: 'https://static.grammarly.com/assets/files/efe57d016d9efff36da7884c193b646b/favicon-32x32.png',
    },
    {
        name: 'GrayGrids',
        categories: [programming.templates],
        description:
            'Biggest Source of Free HTML Website Templates & Bootstrap Themes for Business, Landing Page, Admin Dashboards and Resume & Portfolio Websites.',
        links: {
            [website]: 'https://graygrids.com/',
        },
        icon: 'https://graygrids.com/wp-content/uploads/Group-1-2.png',
    },
    {
        name: 'Grid.Guide',
        categories: [toolsAndUtilities.general],
        description: 'Create pixel perfect grids for the web.',
        links: {
            [website]: 'http://grid.guide/',
        },
        icon: 'http://grid.guide/assets/favicons/favicon-96x96.png',
    },
    {
        name: 'Grommet',
        categories: [programming.uiKitsAndLibraries],
        description: 'Grommet documentation.',
        keywords: ['React', 'UI Kit', 'Grommet', 'Grommet Design', 'UI/UX Framework'],
        links: {
            [website]: 'https://v2.grommet.io/',
        },
        icon: 'https://v2.grommet.io/img/mobile-app-icon.png',
    },
    {
        name: 'GTmetrix',
        categories: [toolsAndUtilities.performance],
        description:
            "GTmetrix is a free tool that analyzes your page's speed performance.  Using PageSpeed and YSlow, GTmetrix generates scores for your pages and offers actionable recommendations on how to fix them.",
        links: {
            [website]: 'https://gtmetrix.com/',
        },
        icon: 'https://gtmetrix.com/favicon.ico',
    },
    {
        name: 'Guru',
        categories: [jobs.freelancing],
        description:
            'Guru is one of the best freelance websites to find & hire Freelancers online and get work done. Freelancers can also search jobs for freelance work and get hired.',
        links: {
            [website]: 'https://www.guru.com/',
        },
        icon: 'https://www.guru.com/favicon-32x32.png',
    },
]
