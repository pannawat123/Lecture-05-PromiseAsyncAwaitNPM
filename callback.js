 function callback(){
    console.log('Timeout completed');
 }

 setTimeout(callback, 3000); //wait 3 seconds

 // cascading problem
 longRunningOperation(() => {
    anotherLongRunningOperation(() => {
        yetAnother(() => {
            omeMore(() => {
                lastOne(() => {
                        console.log('Where are we?');
                });
            });
        });
    });
 });