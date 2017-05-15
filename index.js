
//OlderCoaster -- use Reat.createClass()
const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel'),
          ]
        ),
      ]
    );
  }
});

//InFrontOfYou -- use ES2015 class syntax
class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {},
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, 'Sometimes, the solution is ',
        React.createElement('strong', {}, 'right in front of you.')
      )
    );
  }
}


//ButcherShop -- use ES2015 class syntax
class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, "Tenderloin"),
        React.createElement('li', {}, "Short ribs"),
        React.createElement('li', {}, "Beef shin"),
        React.createElement('li', {}, "Ribeye"),
      ])
    ])
  }
}

//adding above

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
