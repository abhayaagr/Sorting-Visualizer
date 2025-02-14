function insertionSort(){        
    for(var i=1;i<ip_size;i++){
        var key = bar_size[i];
        barUpdate(bar[i], bar_size[i], "focus-Bar");
        var j = i-1;
        while(j>=0 && bar_size[j] > key){
            barUpdate(bar[j], bar_size[j], "error-Bar");
            barUpdate(bar[j+1], bar_size[j+1], "error-Bar");

            bar_size[j+1] = bar_size[j];
            bar_size[j] = key;

            barUpdate(bar[j], bar_size[j], "modify-Bar");
            barUpdate(bar[j+1], bar_size[j+1], "modify-Bar");

            barUpdate(bar[j], bar_size[j], "default-Bar");

            if(j == (i-1))
                barUpdate(bar[j+1], bar_size[j+1], "focus-Bar");
            else
                barUpdate(bar[j+1], bar_size[j+1], "default-Bar");
            j--;
        }
        bar_size[j+1] = key;
        for(var t=0; t<i; t++)
            barUpdate(bar[t], bar_size[t], "sorted-Bar");
    }
    barUpdate(bar[ip_size-1], bar_size[ip_size-1], "sorted-Bar");
}