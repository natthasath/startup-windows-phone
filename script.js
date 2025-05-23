// News data - in a real app, this would come from an API
const newsData = [
    {
        id: 1,
        title: "Global Tech Conference Announces New Smartphone Features",
        summary: "The latest innovations in mobile technology revealed at annual tech summit",
        category: "Technology",
        imageUrl: "https://picsum.photos/id/1/600/400",
        size: "large",
        color: "blue",
        content: "The annual Global Tech Conference has unveiled a range of groundbreaking smartphone features that are set to redefine mobile technology. Industry leaders showcased advancements in display technology, including foldable screens with improved durability and innovative form factors. Battery technology also saw significant progress with new compounds promising up to 50% longer battery life while reducing charging times to under 15 minutes for a full charge. AI capabilities are becoming more integrated with daily phone functions, with on-device processing that enhances both privacy and performance. Camera systems continue to evolve, with computational photography reaching new heights through advanced sensor technology combined with sophisticated algorithms. These developments are expected to appear in consumer devices within the next 12-18 months."
    },
    {
        id: 2,
        title: "Stock Markets Reach Record High",
        summary: "Major indices show strong performance amid economic recovery",
        category: "Business",
        imageUrl: "https://picsum.photos/id/20/300/200",
        size: "medium",
        color: "green",
        content: "Stock markets around the world have reached unprecedented heights as economic recovery continues to gain momentum following the challenges of recent years. Major indices in the US, Europe, and Asia have all posted significant gains, with technology and renewable energy sectors leading the charge. Analysts attribute this strong performance to a combination of factors including robust corporate earnings, increased consumer spending, and supportive monetary policies from central banks. Institutional investors are showing renewed confidence, with record inflows into equity funds. However, some market observers caution that valuations are becoming stretched and that investors should remain alert to potential volatility. Small and mid-cap stocks have also performed well, suggesting broad-based economic optimism beyond just the larger corporations."
    },
    {
        id: 3,
        title: "New Climate Agreement Signed by 50 Countries",
        summary: "Historic environmental pact aims to reduce emissions by 2030",
        category: "Environment",
        imageUrl: "https://picsum.photos/id/28/300/200",
        size: "medium",
        color: "teal",
        content: "In a landmark move for global climate action, 50 countries have signed a new agreement committing to ambitious emission reduction targets by 2030. The pact includes both developed and developing nations and represents over 70% of global carbon emissions. Key provisions include accelerated transitions to renewable energy, phasing out coal power, reducing methane emissions, and establishing carbon pricing mechanisms. The agreement also includes financial commitments to support developing nations in their transition to cleaner energy sources. Environmental groups have cautiously welcomed the agreement, though some critics argue the targets still fall short of what's needed to limit global warming to 1.5 degrees Celsius. Implementation will be monitored through a new international oversight body with regular progress reports and accountability measures."
    },
    {
        id: 4,
        title: "Space Mission Successfully Lands on Mars",
        summary: "Rover begins exploration of the red planet's surface",
        category: "Science",
        imageUrl: "https://picsum.photos/id/36/600/300",
        size: "wide",
        color: "red",
        content: "After a seven-month journey through space, the international Mars mission has successfully landed a rover on the red planet. The touchdown in the Jezero Crater region was confirmed by mission control, marking a significant milestone in our exploration of Mars. Equipped with state-of-the-art scientific instruments, the rover will analyze Martian soil and atmosphere, search for signs of ancient microbial life, and collect samples for eventual return to Earth. Initial images transmitted back show a rocky, dusty landscape with promising geological features that scientists are eager to investigate. The mission represents an unprecedented level of international cooperation in space exploration, with contributions from multiple space agencies. The rover is expected to operate for at least two Earth years, though previous Mars missions have often exceeded their planned operational lifespans."
    },
    {
        id: 5,
        title: "Major Sports Tournament Begins This Weekend",
        summary: "32 teams compete for the championship title",
        category: "Sports",
        imageUrl: "https://picsum.photos/id/43/300/200",
        size: "small",
        color: "orange",
        content: "The world's attention turns to sports this weekend as 32 national teams kick off the quadrennial championship tournament. Hosted across 10 cities, the month-long competition is expected to draw record global viewership. Defending champions face stiff competition from several teams that have shown impressive form during qualifying rounds. The tournament introduces new technology including enhanced video assistant referee systems and real-time player performance analytics. Beyond the sporting spectacle, the event is projected to boost tourism and local economies in the host regions. Security measures have been enhanced, with authorities working to ensure a safe environment for both participants and spectators. Team doctors have implemented strict health protocols to protect players throughout the competition."
    },
    {
        id: 6,
        title: "New Breakthrough in Medical Research",
        summary: "Scientists discover potential treatment for rare disease",
        category: "Health",
        imageUrl: "https://picsum.photos/id/96/300/200",
        size: "small",
        color: "purple",
        content: "Scientists have announced a major breakthrough in the treatment of a rare genetic disease that affects thousands worldwide. The new approach, which combines gene editing technology with targeted drug delivery, has shown remarkable results in clinical trials. Patients receiving the experimental treatment demonstrated significant improvement in symptoms with minimal side effects. This development comes after a decade of research and represents a potential paradigm shift in how we approach genetic disorders. The team behind the discovery has published their findings in a leading medical journal and is now working with regulatory authorities to expedite approval processes. Patient advocacy groups have welcomed the news, highlighting the profound impact this could have on quality of life for those affected. Researchers believe the underlying methodology could potentially be adapted for other similar genetic conditions in the future."
    },
    {
        id: 7,
        title: "Film Festival Announces Award Winners",
        summary: "International cinema celebration concludes with surprise victories",
        category: "Entertainment",
        imageUrl: "https://picsum.photos/id/65/600/400",
        size: "large",
        color: "blue",
        content: "The prestigious International Film Festival has concluded with a ceremony that featured several unexpected winners. The Grand Prix went to a first-time director for a moving drama about rural life and generational change. Jury members praised the film's authentic performances and stunning cinematography. In other categories, established filmmakers were recognized alongside emerging talents, reflecting the festival's commitment to celebrating both artistic heritage and innovation. The Best Actor award went to a performer making their debut in a challenging role that required significant physical transformation. Attendance at this year's festival reached record levels, with screenings consistently selling out and additional venues added to meet demand. Industry analysts note this success contradicts the narrative of declining interest in theatrical cinema. Several of the award-winning films have already secured international distribution deals following their festival reception."
    },
    {
        id: 8,
        title: "New Education Policy Implemented Nationwide",
        summary: "Reforms aim to modernize learning for digital age",
        category: "Education",
        imageUrl: "https://picsum.photos/id/71/300/200",
        size: "medium",
        color: "teal",
        content: "A comprehensive education reform package has been implemented nationwide, introducing significant changes to curriculum, assessment methods, and classroom technology integration. The policy emphasizes critical thinking and problem-solving skills over traditional memorization-based learning. Digital literacy has been made a core subject from primary school onwards, reflecting the changing demands of the modern workforce. Teacher training programs are being overhauled to align with the new approach, with additional resources allocated to professional development. Parents have shown mixed reactions, with many supporting the focus on practical skills while others express concern about potential disruption during the transition period. Early pilot programs in select districts showed promising results, with increased student engagement and improved performance in practical applications of knowledge. The reforms also include provisions for more inclusive education approaches to better serve students with diverse learning needs."
    },
    {
        id: 9,
        title: "AI Assistants Transform Home Living",
        summary: "Smart home technology reaches new level of integration",
        category: "Technology",
        imageUrl: "https://picsum.photos/id/119/600/400",
        size: "wide",
        color: "magenta",
        content: "Artificial intelligence-powered home assistants are fundamentally changing how people interact with their living spaces. The latest generation of smart home devices features significantly improved natural language processing, contextual awareness, and integration capabilities. These systems can now coordinate multiple aspects of home management including climate control, security, entertainment, and energy usage optimization with minimal user input. Privacy concerns are being addressed through enhanced on-device processing that limits the data sent to cloud services. Industry reports indicate that adoption rates for these technologies have doubled in the past year alone, with particularly strong growth in multi-generational households where the accessibility benefits are especially valuable. Manufacturers are increasingly focusing on interoperability standards to ensure devices from different brands can work seamlessly together."
    },
    {
        id: 10,
        title: "Major Art Exhibition Opens to Public",
        summary: "Rare collection showcases previously unseen masterpieces",
        category: "Arts",
        imageUrl: "https://picsum.photos/id/122/300/200",
        size: "medium",
        color: "pink",
        content: "A landmark art exhibition featuring works rarely displayed in public has opened at the National Gallery. The collection includes pieces from private collections around the world, many of which have never been exhibited publicly before. Curators have arranged the exhibition to highlight the evolution of artistic movements over three centuries, with interactive elements that provide historical and cultural context. Advanced reservation tickets for the first month sold out within hours of being released, prompting the gallery to extend viewing hours. Art historians have praised the meticulous restoration work done on several key pieces. Virtual tours are available for those unable to attend in person, featuring ultra-high-resolution imagery and expert commentary. The exhibition will remain in place for six months before selected works travel to partner institutions internationally."
    },
    {
        id: 11,
        title: "New Public Transportation System Launches",
        summary: "Green technology powers innovative urban mobility solution",
        category: "Environment",
        imageUrl: "https://picsum.photos/id/133/300/200",
        size: "small",
        color: "lime",
        content: "The metropolitan transport authority has unveiled a revolutionary public transportation system powered entirely by renewable energy. The network combines electric buses, trams, and autonomous shuttles in an integrated system designed to reduce traffic congestion and emissions. Commuters can access real-time schedule information and make seamless transfers between different modes of transport through a unified digital platform. The vehicles feature advanced battery technology that allows for rapid charging during brief stops. Urban planners from several countries have visited to study the implementation as a potential model for their own cities. Initial data shows a 15% reduction in private vehicle usage in areas served by the new system. The project was completed under budget and ahead of schedule, challenging assumptions about the complexity of implementing such comprehensive transit solutions."
    },
    {
        id: 12,
        title: "Historic Peace Agreement Reached",
        summary: "Longstanding regional conflict resolved through diplomacy",
        category: "Politics",
        imageUrl: "https://picsum.photos/id/140/600/400",
        size: "large",
        color: "green",
        content: "After decades of tension and intermittent conflict, a comprehensive peace agreement has been signed between regional adversaries. The treaty addresses territorial disputes, resource sharing, and security arrangements that have been sources of contention for generations. Negotiations were facilitated by an international team of diplomats working behind the scenes for over three years. Economic analysts predict significant growth potential for the entire region as trade barriers are removed and joint development projects move forward. The agreement includes provisions for cultural exchanges and educational cooperation aimed at building lasting bonds between the populations. Human rights organizations have cautiously welcomed the deal while emphasizing the importance of following through on commitments to address past violations. Implementation will be monitored by a multinational oversight committee with broad enforcement powers."
    },
    {
        id: 13,
        title: "Archaeological Discovery Reveals Ancient Civilization",
        summary: "Unprecedented findings challenge historical understanding",
        category: "Science",
        imageUrl: "https://picsum.photos/id/144/300/200",
        size: "small",
        color: "brown",
        content: "Archaeologists have uncovered the remains of a previously unknown urban settlement dating back approximately 5,000 years. The site features sophisticated architectural elements and technological artifacts that suggest a level of advancement not previously associated with this historical period. Preliminary analysis of recovered writings indicates a unique language system that predates other documented scripts from the region. The discovery is prompting historians to reconsider the timeline of early urban development and cultural exchange. Excavation work continues with international collaboration from leading universities and research institutions. Advanced imaging techniques are being employed to map structures that remain below ground without disturbing them. The site has been designated for protection under international heritage conventions to ensure proper scientific study can proceed without commercial interference."
    },
    {
        id: 14,
        title: "Global Music Streaming Service Launches Artist Support Program",
        summary: "New initiative aimed at developing emerging musical talent",
        category: "Entertainment",
        imageUrl: "https://picsum.photos/id/146/300/200",
        size: "medium",
        color: "orange",
        content: "A major music streaming platform has announced a $100 million program to support independent artists and help them develop sustainable careers. The initiative includes direct financial grants, production resources, marketing support, and educational opportunities. Selected artists will maintain full ownership of their music while gaining access to the platform's user base of over 200 million subscribers. The program specifically targets musicians from underrepresented backgrounds and regions with limited music industry infrastructure. Industry veterans will provide mentorship and guidance to participants. The company developed the program in response to criticism about compensation models for streaming content. Early participants have reported significant growth in listenership and opportunities for live performances. Applications are being accepted on a rolling basis with quarterly cohorts selected through a panel review process."
    },
    {
        id: 15,
        title: "International Space Station Celebrates 25 Years",
        summary: "Quarter-century of continuous human presence in orbit",
        category: "Science",
        imageUrl: "https://picsum.photos/id/176/600/300",
        size: "wide",
        color: "purple",
        content: "The International Space Station has marked 25 years of continuous human habitation, representing an unprecedented achievement in international scientific cooperation. Since the first module was launched, the station has hosted astronauts from 19 different countries conducting over 3,000 research investigations. Experiments performed on the station have led to advances in medicine, materials science, and our understanding of how humans can live and work in space. Current research focuses on preparations for long-duration missions to the Moon and Mars. The station's operational lifetime has been extended to 2030, though planning is underway for successor facilities. A series of special events and educational outreach activities are planned throughout the year to commemorate the anniversary. Former crew members have shared reflections on how their experiences aboard the station shaped their perspectives on global collaboration and environmental stewardship."
    },
    {
        id: 16,
        title: "Financial Regulators Announce Cryptocurrency Framework",
        summary: "New regulations aim to balance innovation with consumer protection",
        category: "Business",
        imageUrl: "https://picsum.photos/id/180/300/200",
        size: "small",
        color: "teal",
        content: "Financial authorities have unveiled a comprehensive regulatory framework for cryptocurrencies and digital assets after extensive consultation with industry stakeholders. The rules establish clear compliance requirements while attempting to preserve the innovative potential of blockchain technologies. Key provisions address consumer protection, anti-money laundering protocols, and market stability safeguards. The approach represents a middle ground between the more restrictive policies implemented in some regions and the largely unregulated environment preferred by certain market participants. Cryptocurrency exchanges will need to meet enhanced licensing requirements and maintain specified capital reserves. The regulations also create a pathway for certain digital assets to be integrated into traditional financial systems. Market reaction has been generally positive, with many industry leaders expressing relief at the clarity provided after years of regulatory uncertainty."
    }
];

// DOM Elements
const newsContainer = document.getElementById('newsContainer');
const newsModal = document.getElementById('newsModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const categoryFilter = document.getElementById('categoryFilter');

// Current filter
let currentFilter = 'all';

// Initialize category filters
function initCategoryFilters() {
    // Get unique categories
    const categories = [...new Set(newsData.map(news => news.category))];
    
    // Clear existing buttons except "All"
    const allButton = categoryFilter.querySelector('[data-category="all"]');
    categoryFilter.innerHTML = '';
    categoryFilter.appendChild(allButton);
    
    // Add a button for each category
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.dataset.category = category;
        
        button.addEventListener('click', () => {
            filterNewsByCategory(category);
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
        
        categoryFilter.appendChild(button);
    });
    
    // Add click event to "All" button
    allButton.addEventListener('click', () => {
        filterNewsByCategory('all');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        allButton.classList.add('active');
    });
}

// Filter news by category
function filterNewsByCategory(category) {
    currentFilter = category;
    createNewsTiles();
}

// Get tile color based on category
function getTileColorForCategory(category) {
    const colorMap = {
        'Technology': 'blue',
        'Business': 'green',
        'Environment': 'lime',
        'Science': 'red',
        'Sports': 'orange',
        'Health': 'purple',
        'Entertainment': 'magenta',
        'Education': 'teal',
        'Arts': 'pink',
        'Politics': 'brown'
    };
    
    return colorMap[category] || 'blue';
}

// Determine appropriate tile size based on screen size and content
function determineTileSize(index, category) {
    // Get screen width
    const screenWidth = window.innerWidth;
    
    // For small screens (mobile)
    if (screenWidth <= 480) {
        // Make important categories and first items in sequence larger
        if (index % 5 === 0 || category === 'Breaking News') {
            return 'wide';
        }
        return 'small';
    }
    
    // For medium screens (tablet)
    if (screenWidth <= 1024) {
        if (index % 4 === 0) {
            return 'large';
        }
        if (index % 3 === 0) {
            return 'wide';
        }
        return 'medium';
    }
    
    // For large screens (desktop)
    if (index % 6 === 0) {
        return 'large';
    }
    if (index % 4 === 0) {
        return 'wide';
    }
    if (index % 3 === 0) {
        return 'medium';
    }
    return 'small';
}

// Create news tiles
function createNewsTiles() {
    // Clear existing tiles
    newsContainer.innerHTML = '';
    
    // Filter news based on current category
    const filteredNews = currentFilter === 'all' 
        ? newsData 
        : newsData.filter(news => news.category === currentFilter);
    
    // Create tiles for each news item
    filteredNews.forEach((news, index) => {
        const tile = document.createElement('div');
        const size = news.size || determineTileSize(index, news.category);
        const color = news.color || getTileColorForCategory(news.category);
        
        tile.className = `tile tile-${size} tile-${color}`;
        tile.innerHTML = `
            <div class="tile-front">
                <img src="${news.imageUrl}" alt="${news.title}" class="tile-image">
                <div class="tile-content">
                    <h3>${news.title}</h3>
                    <p>${news.summary}</p>
                </div>
            </div>
            <div class="tile-back">
                <h3>${news.title}</h3>
                <p>${news.summary}</p>
            </div>
        `;
        
        // Add click event to show news details
        tile.addEventListener('click', () => showNewsDetails(news.id));
        
        newsContainer.appendChild(tile);
    });
}

// Show news details in modal
function showNewsDetails(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (!news) return;
    
    modalContent.innerHTML = `
        <img src="${news.imageUrl}" alt="${news.title}" class="news-image">
        <span class="news-category">${news.category}</span>
        <h2 class="news-title">${news.title}</h2>
        <div class="news-content">${news.content}</div>
    `;
    
    newsModal.style.display = 'block';
}

// Initialize live tiles
function initLiveTiles() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        if (Math.random() > 0.7) { // 30% chance of being a live tile
            tile.classList.add('live-tile');
            const content = tile.querySelector('.tile-content');
            content.classList.add('live-tile-content');
        }
    });
}

// Adjust layout for screen size
function adjustLayoutForScreenSize() {
    createNewsTiles();
}

// Initialize app
function initApp() {
    initCategoryFilters();
    createNewsTiles();
    initLiveTiles();
    
    // Add event listeners
    closeModal.addEventListener('click', () => {
        newsModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === newsModal) {
            newsModal.style.display = 'none';
        }
    });
    
    window.addEventListener('resize', adjustLayoutForScreenSize);
}

// Start the app
initApp();