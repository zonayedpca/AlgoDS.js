const fromLast = (list, n) => {
  let fast = list.getFirst();
  let slow = list.getFirst();

  while(n > 0) {
    fast = fast.next;
    n--;
  }

  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

module.exports = fromLast;
