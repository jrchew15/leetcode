class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(4);
let node3 = new ListNode(5);
let node4 = new ListNode(1);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
let node7 = new ListNode(2);
let node8 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node4.next = node5;
node5.next = node6;
node7.next = node8;

console.log(mergeKLists([node1, node4, node7]))

function mergeKLists(lists) {
    lists.sort((a, b) => a.val - b.val);

    let head = lists[0];
    let current = head;

    lists[0] = lists[0].next;

    oneStepSort(lists);

    while (lists.length) {
        current.next = lists[0];
        lists[0] = lists[0].next;
        current = current.next;
        oneStepSort(lists)
    }
    return head;
}

function oneStepSort(list) {
    let ele = list.splice(0, 1)[0];
    if (!ele) return;

    let l = 0;
    let r = list.length - 1;
    let middle = Math.floor((l + r) / 2);
    while (l < r) {
        middle = Math.floor((l + r) / 2);

        if (list[middle].val <= ele.val) {
            l = middle + 1;
            continue
        }
        r = middle;
    }

    ele.val < list[l].val ? list.splice(l, 0, ele) : list.splice(l + 1, 0, ele)
    console.log(list);
}
