function hideVideoContents() {
    // 메인 피드의 영상 콘텐츠들 숨기기
    const videoContents = document.querySelectorAll('ytd-rich-item-renderer');
        videoContents.forEach(content => {
            content.style.display = 'none';
        });

        // 쇼츠 섹션 숨기기
        const shortsSection = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
        shortsSection.forEach(section => {
            section.style.display = 'none';
        });

        // 영상 그리드 컨테이너 숨기기
        const gridContainer = document.querySelectorAll('ytd-rich-grid-renderer');
        gridContainer.forEach(container => {
            container.style.display = 'none';
        });

    console.log("영상 숨김 완료: " + videoContents.length);
    console.log("쇼츠 숨김 완료: " + shortsSection.length);
    console.log("그리드 숨김 완료: " + gridContainer.length);

}

// 초기 실행
hideVideoContents();

const observer = new MutationObserver((mutations) => {
    hideVideoContents();
});

if(document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
} else {
    window.addEventListener('load', () => {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}