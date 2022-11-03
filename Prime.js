function chkPrime(num){
   let count=0;
	for(let i=0 ;i<=num; i++){
	if(num%i ==0){
		count++;
	}
}
if(count==0){
	    return true;
	}
	return false;
} 
let ans= checkprime(15);
if(ans == true){
   console.log("Prime")
}else{
   console.log("Not Prime")
}