const Resource = require('./resource');

const catalog = {
    why_development: {
        articles: [
            new Resource(1, 'why development', 'article', 'meduim', 'Why you should become a software developer (and how to start)', null, null, 'https://medium.com/daliaresearch/why-and-how-to-become-a-software-developer-c0507fbcbb9f'),
            new Resource(2, 'why development', 'article', 'PrepAway', 'Advantages of Being a Software Developer', null, null, 'https://www.prepaway.com/certification/advantages-software-developer/'),
        ]
    },
    fits_me: {
        articles: [
            new Resource(3, 'fits me', 'article', 'linkedin', 'How to Know if Software Engineering is the Right Career For You', 'Software engineering is, by all objective measures, one of the best fields to get into today.', null, 'https://learning.linkedin.com/blog/tech-tips/how-to-know-if-software-engineering-is-the-right-career-for-you'),
            new Resource(4, 'fits me', 'article', 'medium', 'How To Know If Software Engineering Is Right For You?', null, null, 'https://medium.com/@lucychang_11167/how-to-know-if-software-engineering-is-right-for-you-d036d038beea'),
            new Resource(5, 'fits me', 'article', 'acodersjourney', 'Should you choose Software Engineering as a career?', null, null, 'https://www.acodersjourney.com/choose-software-engineering-career/'),
        ]
    },
    
};

const getCatalogInfo = (id) => {
    return catalog[id];
};

module.exports = {
    getCatalogInfo
}