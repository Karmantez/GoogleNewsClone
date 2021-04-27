export default function News({ $app, initialState }) {
  this.state = initialState;

  this.$wrapper = document.createElement('div');
  this.$wrapper.id = 'news-wrapper';
  $app.appendChild(this.$wrapper);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$wrapper.innerHTML = this.state.news
      .map(article => {
        return `
        <div class="news-container" data-url="${article.url}">
          <div class="news-img">
            <img src="${article.urlToImage}" />
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

      console.log(e.target);
    });
  };

  this.render();
}
