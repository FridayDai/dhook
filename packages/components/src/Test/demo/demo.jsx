const tree = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 3
    }
  },
  right: {
    value: 10,
    left: {
      value: 8
    },
    right: {
      value: 11
    }
  }
};
var linkList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4
      }
    }
  }
};

function quickSort(arr) {
  function quickSortFn(arr, left, right) {
    if(left >= right) return;
    let i = left;
    let j = right;

    const pivot = arr[j];
    while(i < j) {
      while(i < j && arr[i] <= pivot) {
        i++;
      }
      arr[j] = arr[i];
      while(i < j && arr[j] >= pivot) {
        j--;
      }
      arr[i] = arr[j];
    }
    arr[j] = pivot;
    quickSortFn(arr, left, j - 1);
    quickSortFn(arr, j + 1, right);
  }

  quickSortFn(arr, 0, arr.length - 1);
  return arr;
}

 // 反转链表到null，同样也可以到任一位置，只不过会断
function reverseLinkList(head) {
  if(!head.next) return head;
  const last = reverseLinkList(head.next);
  head.next.next = head;
  head.next = null;

  return last;
}

let nextNode;
function reverseN(head, n) {
  if(n === 1) {
    nextNode = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = nextNode;

  return last;
}

// k个一组反转
// 定义两个指针a,b指向head，先将b向前移K个位置，反转[a, b)中的节点返回新的头结点，将原来的头结点即现在的尾结点指向下一个递归头结点。
function reverseKGroup(head, k) {
  let a = head;
  let b = head;

  for(let i = 0; i < k; i++) {
    if(!b) return head;
    b = b.next;
  }

  const newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
}
