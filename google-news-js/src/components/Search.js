export default function Search({ $app, initialState }) {
  this.state = initialState;

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

  this.render = () => {
    this.$input.addEventListener('click', e => {
      e.stopImmediatePropagation();

      console.log(e.target.value);
    });
  };
  this.render();
}
