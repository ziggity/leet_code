//Slow method:

var addTwoNumbers = function(l1, l2) {
    var val = 0,
        newHead,
        newTail,
        node;

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    while (l1 && l2) {
        val += l1.val + l2.val;
        node = new ListNode(val % 10);

        if (newHead) {
            newTail.next = node;
            newTail = newTail.next;
        } else {
            newHead = node;
            newTail = node;
        }

        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        val += l1.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l1 = l1.next;
    }

    while (l2) {
        val += l2.val;
        node = new ListNode(val % 10);
        newTail.next = node;
        newTail = newTail.next;
        val = (val >= 10)? 1 : 0;
        l2 = l2.next;
    }

    if (val > 0) {
        node = new ListNode(val);
        newTail.next = node;
    }

    return newHead;
};

// Fastest method:

var addTwoNumbers = function(l1, l2) {
    var sum = (l1.val + l2.val);
    var carry = Math.floor(sum / 10);

    var answer = new ListNode(sum % 10);
    var temp = answer;

    l1 = l1.next;
    l2 = l2.next;

    while(l1 != null && l2 != null){
        sum = (l1.val + l2.val + carry);
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);

        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    var short = l1 == null ? l1 : l2;
    var long = l1 == null ? l2 : l1;

    while(long != null){
        sum = long.val + carry;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);

        temp = temp.next;
        long = long.next;
    }

    if(carry && long == null){
        temp.next = new ListNode(carry % 10);
    }

    return answer;
};
