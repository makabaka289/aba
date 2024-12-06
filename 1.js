let currentIndex = 4; // 初始索引为4，对应中间的图片
        const totalStates = 10; // 总共10个状态

        function slideLeft() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalStates - 1;
            }
            updateBannerPosition();
        }

        function slideRight() {
            currentIndex++;
            if (currentIndex >= totalStates) {
                currentIndex = 0;
            }
            updateBannerPosition();
        }

        function updateBannerPosition() {
            const bannerWrapper = document.getElementById('bannerWrapper');
            bannerWrapper.style.transform = `translateX(-${currentIndex * 10}%)`;
        }

        // 初始化显示第一种状态
        updateBannerPosition();
window.onload = () => {
    const bannerItems = document.querySelectorAll('.banner-item');
    
    // Add active and animation classes to each item with zoomIn effect
    bannerItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active', 'animate__animated', 'animate__zoomIn');
            
            // Remove animation classes after the animation ends but keep the active class
            item.addEventListener('animationend', () => {
                item.classList.remove('animate__animated', 'animate__zoomIn');
            });
        }, index * 300); // 添加延迟以顺序显示动画
    });
};
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-container img');

    console.log('Images found:', images);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Image intersecting:', entry.target);
                entry.target.classList.remove('hidden');
                entry.target.classList.add('animate__animated', 'animate__slideInUp');
                observer.unobserve(entry.target); // 停止观察已处理的元素
            }
        });
    }, {
        threshold: 0.1 // 图片进入视口10%时触发
    });

    images.forEach(image => {
        observer.observe(image);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
window.addEventListener('scroll', function() {
    var caseStudies = document.getElementById('case-studies');
    var rect = caseStudies.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        caseStudies.classList.add('slide-top');
    }
});