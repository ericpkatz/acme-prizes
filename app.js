const prizesContainer = document.querySelector('#prizes');
const customersContainer = document.querySelector('#customers');

const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 5,
    Bar: 7,
    Bazz: 9
  }
};


const renderPrizes = (data)=> {
  prizesContainer.innerHTML = `
    ${ Object.keys(data.prizes).map( prizeName => {
      return `
          <div class='prize-card'>
            <span class='prize-name'>
            ${ prizeName } 
            </span>
            <div class='prize-quantity-container'>
              <span class='prize-quantity'>
              ${ data.prizes[prizeName] }
              </span>
            </div>
          </div>
      `;
    }).join('')}
  `;
};

const renderCustomers = (data)=> {
  const html = `
      ${ Object.keys(data.customers).map( customerName => {
        return `
          <div class='customer-card'>
            <div class='customer-name'>
            ${ customerName }
            </div>
            <div class='customer-prizes'>
            ${ Object.keys(data.prizes).map( prizeName => {
              return `  
                <div data-customer-name='${ customerName }' data-prize-name='${prizeName}' class='customer-prize'>
                  <button ${!data.customers[customerName][prizeName] ? 'disabled': ''}>-</button>
                  ${ prizeName }
                  ${ data.customers[customerName][prizeName]}
                  <button ${ !data.prizes[prizeName] ? 'disabled' : ''}>+</button>
                </div>
              `;
            }).join('') }
            </div>
          </div>
        `;
      }).join('')}
  `;
  customersContainer.innerHTML = html;
}

customersContainer.addEventListener('click', (ev)=> {
  if(ev.target.tagName === 'BUTTON'){
    const li = ev.target.parentNode;
    const customerName = li.getAttribute('data-customer-name');
    const prizeName = li.getAttribute('data-prize-name');
    const customer = data.customers[customerName];
    const prize = data.prizes;
    if(ev.target.innerHTML === '+'){
      customer[prizeName]++;
      prize[prizeName]--;
    }
    else {
      customer[prizeName]--;
      prize[prizeName]++;
    }
    renderCustomers(data);
    renderPrizes(data);
  }
});

renderCustomers(data);
renderPrizes(data);
