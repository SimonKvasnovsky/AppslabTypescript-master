function CaptureTheRook(rook:string[]){
    if(rook[0].charAt(0) == rook[1].charAt(0) || rook[0].charAt(1) == rook[1].charAt(1))
    {
        return true;
    }
    else{
        return false;
    }
}
var rooks1:string[] = ["A8", "E8"];
var rooks2:string[] = ["B6", "A1"];

 console.log("Result is: "+CaptureTheRook(rooks1));
 console.log("Result is: "+CaptureTheRook(rooks2));