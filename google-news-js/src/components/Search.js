export default function Search({ $app, initialState, onSearch }) {
  this.state = initialState;
  this.onSearch = onSearch;
  this.debounce = null;

  this.$container = document.createElement('div');
  this.$container.id = 'news-search';

  this.$input = document.createElement('input');
  this.$input.placeholder = 'Please enter a keyword to search.';

  this.$container.appendChild(this.$input);
  $app.appendChild(this.$container);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.searchEvent = e => {
    e.stopImmediatePropagation();

    if (e.type === 'keypress') {
      if (e.code === 'Enter') {
        this.onSearch(e.target.value);
      } else {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          console.log(e.target.value);
        }, 300);
      }
    } else if (e.type === 'click') {
      console.log('click!');
    }
  };

  this.render = () => {
    this.$input.focus();

    this.$input.addEventListener('click', this.searchEvent);
    this.$input.addEventListener('keypress', this.searchEvent);
  };
  this.render();
}
