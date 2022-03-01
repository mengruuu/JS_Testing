// 1 
// 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
function fibonacci(position) {
  if (position <= 2) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}
// console.log(fibonacci(3));



// 2 
// 使用 Linked List 實作 Stack ，實作需包含以下方法。
// push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 

class Stack {
  constructor() {
    this.stack = [];
  };
  push(e) {
    this.stack.push(e);
  };
  pop() {
    return this.stack.pop();
  };
  get size() {
    return this.stack.length;
  };
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.pop());
// stack.pop();
// console.log(stack.size);
// stack.size;



// 3
// 將下列輸入資料整合成期望的輸出結果。
// 輸入資料:

const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
]
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 }
};
console.log(
  userOrders.map((objs) => {
    const result = {};
    result.user = { id: objs.userId, name: userData[objs.userId] };
    result.orders = objs.orderIds.map((orderId) => {
      const order = {};
      orderData[orderId].id = orderId;

      return orderData[orderId];

    });
    return result
  })
);


// 輸出結果:
const result = [
  {
    user: {
      id: 'U01', name: 'Tom'
    },
    orders: [
      { id: 'T01', name: 'A', price: 499 },
      { id: 'T02', name: 'B', price: 599 },
    ],
  },
]