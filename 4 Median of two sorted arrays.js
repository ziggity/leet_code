// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

//Solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var total = m + n;

    if(total%2 === 1) {
        return findKth(nums1, m, nums2, n, parseInt(total/2) + 1);
    } else {
        return (findKth(nums1, m, nums2, n, parseInt(total/2)) + findKth(nums1, m, nums2, n, parseInt(total/2) + 1))/2;
    }
};


function findKth(a, m, b, n, k) {
    if(m > n) {
        return findKth(b, n, a, m, k);
    }
    if(m === 0) {
        return b[k-1];
    }
    if(k === 1) {
        return Math.min(a[0],b[0]);
    }
    var pa = Math.min(parseInt(k/2), m);
    var pb = k - pa;
    if(a[pa - 1] < b[pb - 1]) {
        return findKth(a.slice(pa), m - pa, b, n, k - pa);
    } else if(a[pa - 1] > b[pb - 1]) {
        return findKth(a, m, b.slice(pb), n - pb, k - pb);
    } else {
        return a[pa - 1];
    }
}
