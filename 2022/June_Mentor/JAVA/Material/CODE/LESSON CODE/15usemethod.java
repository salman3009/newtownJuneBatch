import java.util.Scanner;

class method{
public static void main(String[] args){
Scanner input =  new Scanner(System.in);
tuna1 tunaobject = new tuna1();
System.out.println("enter your name here:");
String name = input.nextLine();
tunaobject.simplemessage(name);

}

}