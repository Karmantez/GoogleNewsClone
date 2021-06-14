const lazyLoading = () => {
  const options = { threshold: 0 };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        const img = entry.target;
        const { imageSrc } = img.dataset;
        img.src = imageSrc;
      }
    });
  };

  const io = new IntersectionObserver(callback, options);
  const newsImages = Array.from(document.getElementsByClassName('news-image'));

  newsImages.forEach(image => {
    io.observe(image);
  });
};

export default lazyLoading;
