function selectionSort(){        
    for(var i=0;i<ip_size-1;i++){
        var k = i;
        barUpdate(bar[i], bar_size[i], "focus-Bar");
        for(var j=i+1; j<ip_size; j++){
            barUpdate(bar[j], bar_size[j], "focus-Bar");
            if(bar_size[j] < bar_size[k]){
                k = j;
                barUpdate(bar[j], bar_size[j], "focus-Bar");
                barUpdate(bar[i], bar_size[i], "error-Bar");
            }
            else
                barUpdate(bar[j], bar_size[j], "default-Bar");
        }   
        barUpdate(bar[k], bar_size[k], "error-Bar");

        var temp = bar_size[i];
        bar_size[i] = bar_size[k];
        bar_size[k] = temp;

        barUpdate(bar[k], bar_size[k], "default-Bar");
        barUpdate(bar[i], bar_size[i], "sorted-Bar");
    }
    barUpdate(bar[ip_size-1], bar_size[ip_size-1], "sorted-Bar");
}