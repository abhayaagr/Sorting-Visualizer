function bubbleSort(){        
    for(var i=0;i<ip_size-1;i++){
        for(var j=0;j<ip_size-i-1;j++){
            barUpdate(bar[j], bar_size[j], "focus-Bar");
            if(bar_size[j] > bar_size[j+1]){
                barUpdate(bar[j], bar_size[j], "error-Bar");
                barUpdate(bar[j+1], bar_size[j+1], "error-Bar");

                var temp = bar_size[j];
                bar_size[j] = bar_size[j+1];
                bar_size[j+1] = temp;

                barUpdate(bar[j], bar_size[j], "modify-Bar");
                barUpdate(bar[j+1], bar_size[j+1], "modify-Bar");
            }
            barUpdate(bar[j], bar_size[j], "default-Bar");
        }
        barUpdate(bar[j], bar_size[j], "sorted-Bar");
    }
    barUpdate(bar[0], bar_size[0], "sorted-Bar");
}