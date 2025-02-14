function mergeArr(start, mid, end){       
    var i = start;
    var j = mid+1;
    var arr = [], k = 0;
    while(i<=mid && j<=end){
        if(bar_size[i] < bar_size[j]){
            barUpdate(bar[i], bar_size[i], "error-Bar");
            arr[k++] = bar_size[i++];
        }
        else{
            barUpdate(bar[j], bar_size[j], "error-Bar");
            arr[k++] = bar_size[j++];
        }
    }
    while(i<=mid){
        barUpdate(bar[i], bar_size[i], "error-Bar");
        arr[k++] = bar_size[i++];
    }
    while(j<=end){
        barUpdate(bar[j], bar_size[j], "error-Bar");
        arr[k++] = bar_size[j++];    
    }
    
    for(var t=0; t<k; t++){
        bar_size[start++] = arr[t];
        barUpdate(bar[start-1], bar_size[start-1], "sorted-Bar");
    }
}

function merge(start, end){
    if(start<end){
        var mid = Math.floor((start+end)/2);
        barUpdate(bar[mid], bar_size[mid], "focus-Bar");

        merge(start, mid);
        merge(mid+1, end);

        mergeArr(start, mid, end);
    }
}

function mergeSort(){      
    merge(0, ip_size-1);
}