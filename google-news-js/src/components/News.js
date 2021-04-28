export default function News({ $app, initialState }) {
  this.state = initialState;

  this.$wrapper = document.createElement('div');
  this.$wrapper.id = 'news-wrapper';
  $app.appendChild(this.$wrapper);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.onScrolling = () => {
    const news = document.querySelectorAll('.news-container');

    const ob = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.children[0]);

          const img = entry.target.children[0].children[0];
          const { src } = img.dataset;

          img.setAttribute('src', src);
          observer.unobserve(entry.target);
        }
      });
    });

    news.forEach(article => {
      ob.observe(article);
    });
  };

  this.render = () => {
    this.$wrapper.innerHTML = this.state.news
      .map(article => {
        return `
        <div class="news-container" data-url="${article.url}">
          <div class="news-img">
            <img src="#" data-src="${article.urlToImage}" />
          </div>
          
          <div class="news-spec">
            <div class="news-title">
              ${article.title}
            </div>

            <div class="news-content">
              ${article.content}
            </div>
            
            <div class="news-publishedAt">
              ${article.publishedAt}
            </div>
          </div>
        </div>
        `;
      })
      .join('');

    this.$wrapper.addEventListener('click', e => {
      e.stopImmediatePropagation();

      const { url } = e.target.parentNode.parentNode.dataset;
      window.open(url);
    });
    this.onScrolling();
  };

  this.render();
}
