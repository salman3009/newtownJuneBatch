import java.util.Random;
class randomnumber{
public static void main(String[] args){
   Random dice = new Random();
   int number;
   
   for(int counter =1 ; counter<=10; counter++){
           number = 1+dice.nextInt(6);
    System.out.println(number + " ");		   
   }
}
}   