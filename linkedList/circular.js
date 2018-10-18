const circular = (list) => {
    let fast = list.getFirst();
    let slow = list.getFirst();

    while(fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) {
        return true;
      }
    }

    return false;
}

module.exports = circular;
