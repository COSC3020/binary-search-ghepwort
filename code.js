function binarySearch(list, element) {
    
    var low = 0;
    var high = list.length - 1;

    while(low <= high){
        // Calculate middle
        var middle = Math.floor((low + high)/2);

        if (list[middle] == element)
            // After you find elementwe loop to find element with the lowest index
            while(true){
                if (list[middle-1] == element)
                    middle--;
                else
                    return middle
            }
        // Sets the new range to have high one less than middle
        else if (list[middle] > element)
            high = middle - 1
        // Sets the new range to have low one more than middle
        else
            low = middle + 1
    }
    return -1
}



