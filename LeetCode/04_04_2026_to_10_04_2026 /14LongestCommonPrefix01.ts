function longestCommonPrefix(arr: string[]): string {
    var mainStr= arr[0];
    for (var i = 1; i < arr.length ; i ++){
        if(arr[i].length === 0){
            mainStr = "";
            break;
        }
        for(var j = 0; j < arr[i].length;j++ ){
            if (j === (arr[i].length-1) ){
                mainStr = mainStr.slice(0, j+1);
            }
            if(arr[i][j] !== mainStr[j]){
               mainStr = mainStr.slice(0, j);
                break
            }
        }
    }
    return mainStr
};