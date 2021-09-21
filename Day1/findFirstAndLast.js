/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/


//overall time complexity O((log n)+(log n)) = O(log n)
//space complexity O(1)
module.exports = function searchRange(nums, target){
    let lastIndex = nums.length-1;
    // setting the BS walls
    let left =0;
    let right = lastIndex;

    let begining =0;
    let end = right;
    let mid =0;
    
    //binary search to find begining
    //time complexity O(log n)
    while(right>left){
      mid = Math.floor((right+left)/2);
      if(nums[mid]<target) left = mid+1;
      else  right = mid;
    }
    //if the targe is not found return [-1,-1]
    if(nums[left] != target) return [-1,-1];

    begining = left;
    //reset the right wall
    right =lastIndex;
    //binary search to find end starting from the new left 
    //time complexity O(log n)

    while(right>left){
        mid = Math.ceil((right+left)/2);
        if(nums[mid]>target) right = mid-1;
        else  left = mid;
      }
    end = right;

    return [begining, end]
}



  