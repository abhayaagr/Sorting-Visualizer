function partition(start, end){       
    var i = start+1;
    var pivot = bar_size[start];
    barUpdate(bar[start], bar_size[start], "focus-Bar");
    barUpdate(bar[i], bar_size[i], "focus-Bar");
    
    for(var j = start+1; j<=end; j++){
        barUpdate(bar[j], bar_size[j], "focus-Bar");
        if(bar_size[j] < pivot){
            if(j != i){
                barUpdate(bar[j], bar_size[j], "error-Bar");
                barUpdate(bar[i], bar_size[i], "error-Bar");
            
                var temp = bar_size[i];
                bar_size[i] = bar_size[j];
                bar_size[j] = temp;
            
                barUpdate(bar[i], bar_size[i], "modify-Bar");
                barUpdate(bar[j], bar_size[j], "modify-Bar");
            
                barUpdate(bar[i], bar_size[i], "default-Bar");
            }
            i++;
        }
        barUpdate(bar[j], bar_size[j], "default-Bar");
        barUpdate(bar[i], bar_size[i], "focus-Bar");
    }
    barUpdate(bar[start], bar_size[start], "error-Bar");
    barUpdate(bar[i-1], bar_size[i-1], "error-Bar");

    var temp = bar_size[start];
    bar_size[start] = bar_size[i-1];
    bar_size[i-1] = temp;

    barUpdate(bar[start], bar_size[start], "modify-Bar");
    barUpdate(bar[i], bar_size[i], "default-Bar");
    barUpdate(bar[i-1], bar_size[i-1], "sorted-Bar");

    return i-1;
}

function quick(start, end){
    if(start < end){
        var j = partition(start, end);
        quick(start, j-1);
        quick(j+1, end);
    }
    else
        barUpdate(bar[start], bar_size[start], "sorted-Bar");
}

function quickSort(){
    quick(0,ip_size-1);
}