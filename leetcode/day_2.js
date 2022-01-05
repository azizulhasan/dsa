const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
          //console.log([map[another], i])
        return [map[another], i];
      }
  
      map[nums[i]] = i;
      console.log(map)
    }
  
    return null;
  };

  console.log(twoSum([3,4, 3], 7))