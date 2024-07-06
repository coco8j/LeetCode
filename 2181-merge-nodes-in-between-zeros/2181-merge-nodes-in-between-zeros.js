/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let accumulator = 0;
    let pointer = head.next;

    let newList = null;
    let newPointer = null;

    while (pointer !== null) {
        if (pointer.val === 0) {
            const newNode = new ListNode(accumulator);

            if (newList === null) {
                newList = newNode;
                newPointer = newNode;
            } else {
                newPointer.next = newNode;
                newPointer = newPointer.next;
            }

            accumulator = 0;
        }

        accumulator += pointer.val;
        pointer = pointer.next;
    }

    return newList;
};