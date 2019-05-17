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
      Foo: 1,
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

const prizeList = document.querySelector('#prizes');
const customerList = document.querySelector('#customers');

customerList.addEventListener('click', (ev)=> {
  if(ev.target.tagName === 'BUTTON'){
    const sign = ev.target.innerHTML;
    const dataset = ev.target.parentNode.dataset;
    const customer = dataset.customer;
    const prize = dataset.prize;
    const amount = sign === '+' ? 1 : -1;
    data.customers[customer][prize] += amount;
    data.prizes[prize] -= amount;
    render();
  }
});

const render = ()=> {
  renderContainer(customerList, customersTemplate(data.customers, data.prizes));
  renderContainer(prizeList, prizesTemplate(data.prizes));
};

const customersTemplate = (customerData, prizeData)=> {
  const customerNames = Object.keys(customerData);
  return customerNames.map( customerName => customerTemplate(customerName, customerData[customerName], prizeData)).join('');
};

const customerTemplate = (customerName, customerPrizes, prizeData)=> {
  return `
    <div class='customer-card'>
      <div class='customer-name'>
        ${ customerName }
      </div>
      <div class='customer-prizes'>
        ${ customerPrizesTemplate(customerPrizes, customerName, prizeData)}
      </div>
    </div>
  `;
};

const customerPrizesTemplate = (customerPrizes, customerName, prizeData)=> {
  const prizeNames = Object.keys(customerPrizes);
  return prizeNames.map( prizeName => customerPrizeTemplate(prizeName, customerPrizes[prizeName], customerName, prizeData[prizeName])).join('');
};

const customerPrizeTemplate = (prizeName, count, customerName, availableCount)=> {
  return `
    <div data-prize='${prizeName}' data-customer='${customerName}' class='customer-prize'>
      <button ${ count === 0 ? 'disabled': ''}>-</button>
      ${ prizeName }
      (${ count })
      <button ${ availableCount === 0 ? 'disabled': ''}>+</button>
    </div>
  `;
};

const prizesTemplate = (prizeData)=> {
  const prizeNames = Object.keys(prizeData);
  return prizeNames.map( prizeName => prizeTemplate(prizeName, prizeData[prizeName])).join('');
};

const prizeTemplate = (prizeName, count)=> {
  return `
    <div class='prize-card'>
      <div class='prize-name'>
        ${ prizeName }
      </div>
      <div class='prize-quantity-container'>
        <div class='prize-quantity${ count === 0 ? ' done': ''}'>
        ${ count }
        </div>
      </div>
    </div>
  `;
};

const renderContainer = (container, html)=> {
  container.innerHTML = html;
};

render();
